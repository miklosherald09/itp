"use client";

import { countAtom } from "@/jotai/atoms/countAtoms";
import { useAddItem } from "@/services/items";
import { AddItemInputT, ItemT } from "@/types/items";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { NameField } from "./fields/name";
import { TypeField } from "./fields/type";
import { DescriptionField } from "./fields/description";
import { PriceField } from "./fields/price";
import { DurationField } from "./fields/duration";
import { CancelButton } from "./buttons/cancel";
import { SubmitButton } from "./buttons/submit";

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

  const [open, setOpen] = useAtom(countAtom);

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const addItem = useAddItem();

  const onSubmit = (data: AddItemInputT) => {
    console.log("Form Data:", data);
    const params: ItemT = {
      type: data?.type,
      name: data?.name,
      price: Number(data?.price),
    };
    addItem.mutateAsync(params);
    handleClose();
    refetch();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20">
        <Typography
          variant="h6"
          sx={{ color: "black", mb: 2 }}
          className="mb-20"
        >
          Add New Item
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
                <SubmitButton />
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};
