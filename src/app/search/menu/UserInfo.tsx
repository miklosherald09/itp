"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";
import { SignInButton } from "./buttons/signin";

export default function UserInfo() {
  const { data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      {session ? (
        <>
          <Typography
            sx={{
              display: { xs: "none", sm: "inline" },
              mr: 2,
              color: "gray.600",
            }}
          >
            {session.user?.name || session.user?.email}
          </Typography>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt={session.user?.name || "User"}
              src={session.user?.image || "/default-avatar.png"}
            />
          </IconButton>
          <Menu
            id="user-menu"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            sx={{ mt: "45px" }}
          >
            <MenuItem
              onClick={handleCloseUserMenu}
              component={Link}
              href="/profile"
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseUserMenu();
                signOut({ callbackUrl: "/login" });
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <SignInButton />
      )}
    </Box>
  );
}
