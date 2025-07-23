"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const NotesField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="notes"
      control={control}
      rules={{ required: false }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Notes"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState?.error?.message}
        />
      )}
    />
  );
};
