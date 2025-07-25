"use client";

import Link from "next/link";
import { ButtonBase, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Itpv() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/itpv");
  };

  return (
    <ButtonBase onClick={handleClick}>
      <Typography
        variant="h6"
        component={Link}
        href="/dashboard"
        sx={{
          fontSize: 18,
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        ITPV
      </Typography>
    </ButtonBase>
  );
}
