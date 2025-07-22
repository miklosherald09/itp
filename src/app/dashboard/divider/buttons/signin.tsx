import { Button, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";

export function SignInButton() {
  return (
    <Button onClick={() => signIn("google")}>
      <GoogleIcon />
      <Typography sx={{ ml: 1, textTransform: "none" }}>
        Sign in with Google
      </Typography>
    </Button>
  );
}
