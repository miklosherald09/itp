"use client";
import { Box, ButtonBase } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSetAtom } from "jotai";
import { addItemAtom } from "@/jotai/atoms/modal";

export default function DesktopNav() {
  const setShowAdd = useSetAtom(addItemAtom);

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: "2px",
        display: { xs: "none", md: "flex" },
        ml: 4,
      }}
    >
      <ButtonBase onClick={() => setShowAdd(true)} sx={{}}>
        <AddIcon fontSize="medium" sx={{ fontWeight: 100 }} color="primary" />
      </ButtonBase>
    </Box>
  );
}
