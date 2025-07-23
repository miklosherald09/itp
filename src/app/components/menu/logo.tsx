"use client";

import Link from "next/link";
import { Typography } from "@mui/material";

export default function Logo() {
  return (
    <Typography
      variant="h6"
      component={Link}
      href="/dashboard"
      sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
    >
      ITP
    </Typography>
  );
}
