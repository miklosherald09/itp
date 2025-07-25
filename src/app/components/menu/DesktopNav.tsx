"use client";
import { Box, ButtonBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSetAtom } from "jotai";
import { addItemAtom } from "@/jotai/atoms/modal";

export default function DesktopNav() {
  const setShowAdd = useSetAtom(addItemAtom);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 4 }}>
      <ButtonBase onClick={() => setShowAdd(true)} sx={{}}>
        <AddIcon sx={{ fontWeight: 100, fontSize: 24 }} color="primary" />
      </ButtonBase>
    </Box>
  );
}
