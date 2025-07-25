"use client";

import { MenuItem, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const TypeField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="type"
      control={control}
      rules={{ required: "Type is required" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          select
          label="Type"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState?.error?.message}
        >
          {["Product", "Service"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
