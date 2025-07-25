"use client";

import Link from "next/link";
import { ButtonBase, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Value from "./value";

export default function Itpv() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/itpv");
  };

  return (
    <ButtonBase onClick={handleClick}>
      <AccountBalanceIcon fontSize="small" />
      <Typography
        variant="h6"
        component={Link}
        href="/dashboard"
        sx={{
          ml: 1,
          fontSize: 18,
          textDecoration: "none",
          color: "black",
          fontWeight: "bold",
        }}
      >
        ITP
      </Typography>
      <Value />
    </ButtonBase>
  );
}
