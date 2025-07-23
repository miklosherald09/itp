import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button sx={{ fontSize: 12 }} onClick={() => signOut()}>
      Sign out
    </Button>
  );
}
