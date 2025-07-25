"use client";

import { whatIsItpvtAtom } from "@/jotai/atoms/modal";
import { Box, ButtonBase, Typography } from "@mui/material";
import { useSetAtom } from "jotai";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

export const ItpvInfoButton = () => {
  const setOpen = useSetAtom(whatIsItpvtAtom);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <ButtonBase
      type="button"
      onClick={handleClick}
      className="text-gray-500 border-gray-500"
    >
      <Box sx={{ minWidth: 80 }}>
        <InfoOutlineIcon />
        <Typography sx={{ fontSize: 12 }}>What is?</Typography>
      </Box>
    </ButtonBase>
  );
};
