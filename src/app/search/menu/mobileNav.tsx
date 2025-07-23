"use client";

import { useState } from "react";
import Link from "next/link";
import { Typography, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function MobileNav() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const navItems = [{ name: "add", path: "/dashboard" }];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
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
  );
}
