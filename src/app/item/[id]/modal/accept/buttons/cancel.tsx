"use client";

import { tradeAtom } from "@/jotai/atoms/modal";
import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { useFormContext } from "react-hook-form";

export const CancelButton = () => {
  const setOpen = useSetAtom(tradeAtom);
  const { reset } = useFormContext();

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  return (
    <Button
      variant="outlined"
      onClick={handleClose}
      className="text-gray-500 border-gray-500"
    >
      Cancel
    </Button>
  );
};
