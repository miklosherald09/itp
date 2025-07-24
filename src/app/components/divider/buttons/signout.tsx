import { userAtom } from "@/jotai/atoms/users";
import { Button } from "@mui/material";
import { useSetAtom } from "jotai";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  const setUser = useSetAtom(userAtom);

  const handleClick = () => {
    setUser(null);
    signOut();
  };

  return (
    <Button sx={{ fontSize: 12 }} onClick={handleClick}>
      Sign out
    </Button>
  );
}
