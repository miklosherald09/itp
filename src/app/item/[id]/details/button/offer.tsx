"use client";

import { Typography, Button } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useAtomValue, useSetAtom } from "jotai";
import { tradeAtom } from "@/jotai/atoms/modal";
import { usePathname } from "next/navigation";
import { useGetUserItems } from "@/services/items";
import { userAtom } from "@/jotai/atoms/users";

export default function OfferButton() {
  const setOpen = useSetAtom(tradeAtom);
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const user = useAtomValue(userAtom);
  const { data, isLoading } = useGetUserItems(user?.id);
  const items = data?.data;
  const ids = items?.map((item) => item.id);

  const ownItem = ids?.includes(Number(pathnames?.[2]));

  if (isLoading) return <></>;
  if (ownItem) return <></>;

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
