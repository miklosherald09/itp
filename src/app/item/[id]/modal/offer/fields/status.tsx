"use client";

import { userAtom } from "@/jotai/atoms/users";
import { useGetUserItems } from "@/services/items";
import { Autocomplete, TextField } from "@mui/material";
import { useAtomValue } from "jotai";
import { Controller, useFormContext } from "react-hook-form";

export const StatusField = () => {
  const { control } = useFormContext();

  const user = useAtomValue(userAtom);
  const { data: itemsData } = useGetUserItems(user?.id);
  const items = itemsData?.data ?? [];

  const options = items?.map((item) => {
    return { label: item?.name, id: item?.id };
  });

  return (
    <Controller
      name="items"
      control={control}
      rules={{ required: "Please select at least one film." }}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onChange={(event, value) => field.onChange(value)}
          options={options}
          multiple
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
