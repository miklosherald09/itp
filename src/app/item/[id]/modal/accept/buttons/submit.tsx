"use client";

import { Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

type Props = {
  isLoading: boolean;
};

export const SubmitButton = (props: Props) => {
  const { isLoading } = props;
  const { watch } = useFormContext();

  let label = "Accept Offer";
  const status = watch("status");

  if (status) label = "Submit";

  return (
    <Button
      type="submit"
      variant="contained"
      className="bg-blue-500 hover:bg-blue-700"
      disabled={isLoading}
    >
      {isLoading ? "Submiting.." : label}
    </Button>
  );
};
