"use client"; // Required if using client-side features like ThemeProvider

import { montserrat } from "@/utility/font";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  // ...other theme configurations
});

export default theme;
