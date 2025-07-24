"use client";

import { addItemAtom } from "@/jotai/atoms/modal";
import { useAddItem, useGetUserItems } from "@/services/items";
import { AddItemInputT, AddItemsParamsT } from "@/types/item";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { NameField } from "./fields/name";
import { TypeField } from "./fields/type";
import { DescriptionField } from "./fields/description";
import { PriceField } from "./fields/price";
import { DurationField } from "./fields/duration";
import { CancelButton } from "./buttons/cancel";
import { SubmitButton } from "./buttons/submit";
import { userAtom } from "@/jotai/atoms/users";

export const ItemFormModal = () => {
  const methods = useForm({
    defaultValues: {
      type: "PRODUCT",
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

  const onSubmit = async (data: AddItemInputT) => {
    const userString = localStorage?.getItem("user");
    if (!userString) return;

    const user = JSON.parse(userString);
    const params: AddItemsParamsT = {
      type: data?.type,
      name: data?.name,
      description: data?.description,
      price: Number(data?.price),
      userId: user?.id,
    };
    await addItem.mutateAsync(params);
    refetch();
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20">
        <Typography
          sx={{ color: "black", mb: 2, fontWeight: 600 }}
          className="mb-20"
        >
          Add something you own
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ mt: 1 }}>
              <TypeField />
            </Box>
            <Box sx={{ mt: 1 }}>
              <NameField />
            </Box>
            <Box sx={{ mt: 1 }}>
              <DescriptionField />
            </Box>
            <Box sx={{ mt: 1 }}>
              <PriceField />
            </Box>
            <Box sx={{ mt: 1 }}>
              <DurationField />
            </Box>
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
