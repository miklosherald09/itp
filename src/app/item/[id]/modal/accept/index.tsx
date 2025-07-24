"use client";

import { acceptAtom } from "@/jotai/atoms/modal";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { StatusField } from "./fields/status";
import { CancelButton } from "./buttons/cancel";
import { SubmitButton } from "./buttons/submit";
import { userAtom } from "@/jotai/atoms/users";
import { useGetOfferByItemId } from "@/services/offers";
import { AcceptOfferInputT, AcceptOfferParamsT } from "@/types/offer";
import { usePathname } from "next/navigation";
import { useAcceptOffer } from "@/services/offers";
import { offerAtom } from "@/jotai/atoms/selected";

export const AcceptModal = () => {
  const methods = useForm({
    defaultValues: {
      status: null,
    },
  });

  const [open, setOpen] = useAtom(acceptAtom);

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const user = useAtomValue(userAtom);
  const acceptOffer = useAcceptOffer();
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const itemId = Number(pathnames?.[2]);
  const { refetch: refetchOffers } = useGetOfferByItemId(itemId);
  const selectedOffer = useAtomValue(offerAtom);

  const onSubmit = async (data: AcceptOfferInputT) => {
    try {
      if (!user?.id) throw new Error("no user");
      if (!selectedOffer) throw new Error("no offer");

      let status = data?.status?.id;
      if (!status) status = "ACCEPTED";

      const params: AcceptOfferParamsT = {
        status,
        offerId: selectedOffer?.id,
      };

      await acceptOffer.mutateAsync(params);

      refetchOffers();
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  const isLoading = acceptOffer?.isPending;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20">
        <Typography
          variant="h6"
          sx={{ color: "black", mb: 2 }}
          className="mb-20"
        >
          Accept Offer
        </Typography>
        <Typography sx={{ color: "black", mb: 2 }} className="mb-20">
          Accepting offer will instantly transfer the item in your account. You
          can tag the offer to "NEGOTIATING" or "WIll THINK ABOUT" if still need
          some time.
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ mt: 1 }}>
              <StatusField />
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
