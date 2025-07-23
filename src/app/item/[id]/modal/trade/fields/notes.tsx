"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const NotesField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="notes"
      control={control}
      rules={{ required: "Name is required" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Name"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState?.error?.message}
        />
      )}
    />
  );
};
