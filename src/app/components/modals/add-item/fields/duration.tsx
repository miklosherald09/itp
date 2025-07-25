"use client";

import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const DurationField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="duration"
      control={control}
      rules={{
        validate: (value) =>
          !value || !isNaN(Number(value)) || "Duration must be a number",
      }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label="Duration (minutes)"
          type="number"
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState?.error?.message}
        />
      )}
    />
  );
};
