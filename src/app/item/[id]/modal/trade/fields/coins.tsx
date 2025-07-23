"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const CoinsField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="coins"
      control={control}
      rules={{
        validate: (value) =>
          !value || !isNaN(Number(value)) || "Price must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Price"
          type="number"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState?.error?.message}
        />
      )}
    />
  );
};
