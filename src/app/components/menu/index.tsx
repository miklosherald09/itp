"use client";

import { AppBar, Toolbar } from "@mui/material";
import MobileNav from "./mobileNav";
import DesktopNav from "./DesktopNav";
import Logo from "./logo";
import UserInfo from "./UserInfo";
import SearchBar from "./SearchBar";

export default function TopMenu() {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "white", color: "gray.800", boxShadow: "sm" }}
    >
      <Toolbar className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />
        <MobileNav />
        <DesktopNav />
        <SearchBar />
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
}
