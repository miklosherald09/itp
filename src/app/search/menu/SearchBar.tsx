"use client";

import { useState } from "react";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const [searchQuery, setSearchQuery] = useState(search ?? "");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 400, mx: 2 }}>
      <form onSubmit={handleSearch}>
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
  );
}
