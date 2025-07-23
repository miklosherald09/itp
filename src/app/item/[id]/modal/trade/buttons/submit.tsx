"use client";

import { Button } from "@mui/material";

export const SubmitButton = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      className="bg-blue-500 hover:bg-blue-700"
    >
      Submit
    </Button>
  );
};
