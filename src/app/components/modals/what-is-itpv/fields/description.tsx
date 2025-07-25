"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const DescriptionField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="description"
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label="Description"
          fullWidth
          multiline
          rows={3}
        />
      )}
    />
  );
};
