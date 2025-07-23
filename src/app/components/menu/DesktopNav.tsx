"use client";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSetAtom } from "jotai";
import { addItemAtom } from "@/jotai/atoms/modal";

export default function DesktopNav() {
  const setShowAdd = useSetAtom(addItemAtom);

  return (
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
  );
}
