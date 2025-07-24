"use client";

import { tradeAtom } from "@/jotai/atoms/modal";
import { useGetUserItems } from "@/services/items";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { NotesField } from "./fields/notes";
import { ItemsField } from "./fields/items";
import { CancelButton } from "./buttons/cancel";
import { SubmitButton } from "./buttons/submit";
import { userAtom } from "@/jotai/atoms/users";
import { useAddOffer, useGetItemOffers } from "@/services/offers";
import { AddOfferInputT, AddOfferParamsT } from "@/types/offer";
import { usePathname } from "next/navigation";
import { useAddOfferItem } from "@/services/offerItems";
import { AddOfferItemParamsT } from "@/types/offerItem";

export const OfferModal = () => {
  const methods = useForm({
    defaultValues: {
      items: [],
      notes: "",
      coins: "",
    },
  });

  const [open, setOpen] = useAtom(tradeAtom);

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const user = useAtomValue(userAtom);
  const addOffer = useAddOffer();
  const addOfferItem = useAddOfferItem();
  const { refetch: refetchGetUserItems } = useGetUserItems(user?.id);
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const itemId = Number(pathnames?.[2]);
  const { refetch: refetchOffers } = useGetItemOffers(itemId);

  const onSubmit = async (data: AddOfferInputT) => {
    // const itemId = window.location.

    try {
      if (!user?.id) throw new Error();

      const params: AddOfferParamsT = {
        itemId,
        userId: user?.id,
        status: "PENDING",
        notes: data?.notes,
      };

      const response = await addOffer.mutateAsync(params);
      const offer = response?.data;

      const oiParams: AddOfferItemParamsT[] = data?.items?.map((item) => {
        return {
          itemId: item?.id,
          offerId: offer?.id,
        };
      });

      console.log("oiParamsxx", oiParams);

      await addOfferItem.mutateAsync(oiParams);

      refetchGetUserItems();
      refetchOffers();
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const isLoading = addOfferItem?.isPending || addOffer.isPending;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20">
        <Typography
          variant="h6"
          sx={{ color: "black", mb: 2 }}
          className="mb-20"
        >
          Select Item you want to offer
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ mt: 1 }}>
              <ItemsField />
            </Box>
            <Box sx={{ mt: 1 }}>
              <NotesField />
            </Box>
            <Box sx={{ mt: 2 }} className="flex justify-end space-x-2">
              <CancelButton />
              <Box sx={{ ml: 1 }}>
                <SubmitButton isLoading={isLoading} />
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};
