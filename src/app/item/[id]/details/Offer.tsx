"use client";

import { Typography, Button } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useSetAtom } from "jotai";
import { tradeAtom } from "@/jotai/atoms/modal";

type Props = {
  itemId: string;
};

export default function OfferButton(props: Props) {
  const setOpen = useSetAtom(tradeAtom);

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{ pl: 2, pr: 3 }}
      onClick={() => setOpen(true)}
    >
      <HandshakeIcon />
      <Typography sx={{ textTransform: "none", fontWeight: 500, ml: 1 }}>
        Offer a trade
      </Typography>
    </Button>
  );
}
