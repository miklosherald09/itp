"use client";

import { OfferStatusT } from "@/types/offer";
import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const StatusField = () => {
  const { control } = useFormContext();

  const options: { id: OfferStatusT; label: string }[] = [
    { id: "NEGOTIATING", label: "Negotiating" },
    { id: "THINKING", label: "I'll think about it" },
    { id: "DECLINED", label: "Decline" },
  ];

  return (
    <Controller
      name="status"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onChange={(event, value) => field.onChange(value)}
          options={options}
          getOptionLabel={(option) => option.label || ""}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          disablePortal
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Item"
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : null}
              inputRef={field.ref}
            />
          )}
        />
      )}
    />
  );
};
