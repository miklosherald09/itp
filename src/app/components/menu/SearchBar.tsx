"use client";

import { useState } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 400, mx: 2 }}>
      <form onSubmit={handleSearch}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "gray.100",
            borderRadius: "20px",
            px: 0,
            py: "4px",
            width: 300,
            border: "solid 1px #D1D5DB",
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
  );
}
