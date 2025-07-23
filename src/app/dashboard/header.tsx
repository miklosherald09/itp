"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  InputBase,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useAtom } from "jotai";
import { countAtom } from "@/jotai/atoms/modal";

export default function DashboardHeader() {
  const { data: session } = useSession();
  // const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navItems = [
    { name: "add", path: "/dashboard" },
    // { name: "Analytics", path: "/dashboard/analytics" },
    // { name: "Settings", path: "/dashboard/settings" },
  ];

  // const handleSearch = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (searchQuery.trim()) {
  //     router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
  //   }
  // };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [showAdd, setShowAdd] = useAtom(countAtom);

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", color: "gray.800", boxShadow: "sm" }}
    >
      <Toolbar className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          href="/dashboard"
          sx={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
        >
          ITP
        </Typography>

        {/* Mobile Navigation Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" }, ml: 2 }}>
          <IconButton
            size="large"
            aria-label="navigation menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {navItems.map((item) => (
              <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  href={item.path}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Desktop Navigation Links */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 4 }}>
          <Button
            onClick={() => setShowAdd(true)}
            sx={{
              color: "gray.600",
              mx: 1,
              fontWeight: "bold",
              fontSize: 18,
              "&:hover": { color: "blue.500" },
              textTransform: "none",
            }}
          >
            <AddIcon />
            Add
          </Button>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: 400, mx: 2 }}>
          <form onSubmit={() => {}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "gray.100",
                borderRadius: "9999px",
                px: 2,
                py: 1,
              }}
            >
              <SearchIcon sx={{ color: "gray.400", mr: 1 }} />
              <InputBase
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ width: "100%", color: "gray.700" }}
              />
            </Box>
          </form>
        </Box>

        {/* User Info */}
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
            <Button
              component={Link}
              href="/login"
              sx={{ color: "gray.600", "&:hover": { color: "blue.500" } }}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
