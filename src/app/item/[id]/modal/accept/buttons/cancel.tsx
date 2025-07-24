"use client";

import { acceptAtom } from "@/jotai/atoms/modal";
import { offerAtom } from "@/jotai/atoms/selected";
import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { useFormContext } from "react-hook-form";

export const CancelButton = () => {
  const setOpen = useSetAtom(acceptAtom);
  const setOffer = useSetAtom(offerAtom);
  const { reset } = useFormContext();

  const handleClose = () => {
    setOpen(false);
    setOffer(null);
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
