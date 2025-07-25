"use client";

import spiel from "@/spiels";
import { Box, Container, Typography } from "@mui/material";
import PieChartComponent from "./chart2";

export default function Total() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant={"h6"} sx={{ mb: 1, textDecoration: "underline" }}>
        Total Global ITPV
      </Typography>
      <Typography sx={{ mb: 1, fontSize: 12 }}>{spiel.itpv}</Typography>
      <Box>
        <PieChartComponent />
      </Box>
    </Container>
  );
}
