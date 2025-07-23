"use client";

import { Autocomplete, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const ItemsField = () => {
  const { control } = useFormContext();

  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
  ];

  return (
    <Controller
      name="items" // The name of the field in your form data
      control={control} // The control object from useForm
      rules={{ required: "Please select at least one film." }} // Validation rules
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field} // Spread field props (value, onChange, onBlur, ref)
          multiple // <--- Added this prop to enable multiple selections
          // Autocomplete's onChange signature is (event, value)
          // We need to pass the 'value' (selected option(s)) to RHF's field.onChange
          onChange={(event, value) => field.onChange(value)}
          options={options} // Your data source
          getOptionLabel={(option) => option.label || ""} // How to display each option
          isOptionEqualToValue={(option, value) => option.label === value.label} // How to compare options
          disablePortal // Prevents the dropdown from rendering in a new portal
          renderInput={(params) => (
            <TextField
              {...params} // Spread params from Autocomplete for TextField
              label="Select Films" // Updated label
              variant="outlined"
              error={!!error} // Show error state if there's an error
              helperText={error ? error.message : null} // Display error message
              inputRef={field.ref} // Pass the ref from RHF to the input element
            />
          )}
        />
      )}
    />
  );
};
