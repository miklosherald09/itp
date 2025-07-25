"use client";

import { Box, Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import { SignOutButton } from "./buttons/signout";
import useAuthHandler from "@/hooks/auth";
import Itpv from "./itpv";
export default function Divider() {
  const { data: session } = useSession();

  useAuthHandler();

  if (!session) return <></>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        px: 1,
        py: "3px",
      }}
    >
      <Box>
        <Itpv />
        <Typography sx={{ fontSize: 12 }}>
          Signed in as {session.user?.name}
        </Typography>
      </Box>
      <Box>
        <SignOutButton />
      </Box>
    </Box>
  );
}
