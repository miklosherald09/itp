"use client";

import { AppBar, Toolbar } from "@mui/material";
import MobileNav from "./mobileNav";
import SearchBar from "./SearchBar";
import Logo from "./logo";
import UserInfo from "./UserInfo";

export default function TopMenu() {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "white", color: "gray.800", boxShadow: "sm" }}
    >
      <Toolbar className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />
        <MobileNav />
        <SearchBar />
        <UserInfo />
      </Toolbar>
    </AppBar>
  );
}
