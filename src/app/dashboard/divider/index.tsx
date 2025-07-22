"use client";

import { Box, Typography } from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { SignOutButton } from "./buttons/signout";
export default function Divider() {
  const { data: session } = useSession();

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
      <Typography sx={{ fontSize: 12 }}>
        Signed in as {session.user?.name}
      </Typography>
      <Box>
        <SignOutButton />
      </Box>
    </Box>
  );
}
