"use client";

import { countAtom } from "@/jotai/atoms/countAtoms";
import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { useFormContext } from "react-hook-form";

export const CancelButton = () => {
  const setOpen = useSetAtom(countAtom);
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
