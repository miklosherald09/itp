"use client";

import { whatIsItpvtAtom } from "@/jotai/atoms/modal";
import { Box, Modal, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { FormProvider, useForm } from "react-hook-form";
import { SubmitButton } from "./buttons/submit";
import spiel from "@/spiels";

export const WhatIsItpvModal = () => {
  const methods = useForm({
    defaultValues: {},
  });

  const [open, setOpen] = useAtom(whatIsItpvtAtom);

  const handleClose = () => {
    setOpen(false);
    methods.reset();
  };

  const onSubmit = async () => {
    try {
      handleClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-[10%] ">
        <Typography
          sx={{ color: "black", mb: 2, fontWeight: 600 }}
          className="mb-20"
        >
          What is ITPV
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Box sx={{ mt: 1 }}>
              <Typography>{spiel?.itpv}</Typography>
            </Box>
            <Box sx={{ mt: 2 }} className="flex justify-end space-x-2">
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
