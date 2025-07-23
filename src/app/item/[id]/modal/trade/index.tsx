"use client";

import { tradeAtom } from "@/jotai/atoms/modal";
import { useAddItem, useGetUserItems } from "@/services/items";
import { AddItemsParamsT, TradeInputT, TradeParamT } from "@/types/items";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { NotesField } from "./fields/notes";
import { ItemsField } from "./fields/items";
import { CancelButton } from "./buttons/cancel";
import { SubmitButton } from "./buttons/submit";
import { userAtom } from "@/jotai/atoms/users";

export const TradeModal = () => {
  const methods = useForm({
    defaultValues: {
      items: "",
      notes: "",
      coins: "",
    },
  });

  const [open, setOpen] = useAtom(tradeAtom);

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  // const tradeItem = useTradeItem();
  const user = useAtomValue(userAtom);
  const { refetch } = useGetUserItems(user?.id);

  const onSubmit = async (data: TradeInputT) => {
    const params: TradeParamT = {
      coins: "1",
      notes: "2",
      userId: 1,
      itemId: 1,
    };
    // await tradeItem.mutateAsync(params);
    refetch();
    handleClose();
  };

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
                <SubmitButton />
              </Box>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};
