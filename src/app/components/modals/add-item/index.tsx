"use client";

import { addItemAtom } from "@/jotai/atoms/modal";
import { useAddItem, useGetUserItems } from "@/services/items";
import { AddItemInputT, AddItemsParamsT, ItemTypeT } from "@/types/item";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { NameField } from "./fields/name";
import { TypeField } from "./fields/type";
import { DescriptionField } from "./fields/description";
import { PriceField } from "./fields/price";
import { CancelButton } from "./buttons/cancel";
import { SubmitButton } from "./buttons/submit";
import { userAtom } from "@/jotai/atoms/users";
import { ItpvInfoButton } from "./buttons/itpvInfo";
import { useRouter } from "next/navigation";

export const ItemFormModal = () => {
  const methods = useForm<AddItemInputT>({
    defaultValues: {
      type: ItemTypeT.product,
      name: "",
      description: "",
      price: "",
      duration: "",
    },
  });

  const [open, setOpen] = useAtom(addItemAtom);

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const addItem = useAddItem();
  const user = useAtomValue(userAtom);
  const { refetch } = useGetUserItems(user?.id);
  const router = useRouter();

  const onSubmit = async (data: AddItemInputT) => {
    try {
      if (!user?.id) throw new Error("error no user id");
      const params: AddItemsParamsT = {
        type: data?.type,
        name: data?.name,
        description: data?.description,
        price: Number(data?.price),
        userId: user?.id,
      };
      const response = await addItem.mutateAsync(params);
      const itemId = response?.data?.id;
      router.push(`/item/${itemId}`);
      refetch();
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-20">
        <Typography
          sx={{ color: "black", mb: 2, fontWeight: 600 }}
          className="mb-20"
        >
          Add something you own
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ mt: 2 }}>
              <NameField />
            </Box>
            <Box sx={{ mt: 2 }}>
              <DescriptionField />
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <PriceField />
              <ItpvInfoButton />
            </Box>
            <Box sx={{ mt: 2 }}>
              <TypeField />
            </Box>
            {/* <Box sx={{ mt: 2 }}>
              <DurationField />
            </Box> */}
            <Box sx={{ mt: 2 }} className="flex justify-end space-x-2">
              <CancelButton />
              <Box sx={{ ml: 1 }}>
                <SubmitButton isLoading={addItem?.isPending} />
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};
