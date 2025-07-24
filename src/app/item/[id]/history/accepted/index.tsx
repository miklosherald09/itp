"use client";

import { Box, ButtonBase, Typography } from "@mui/material";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import { useGetOfferByItemId } from "@/services/offers";
import Offer from "./offer";

export default function Accepted() {
  const pathname = usePathname();
  const itemId = pathname.split("/")?.[2];

  const { data: dataoffers } = useGetOfferByItemId(Number(itemId));
  const offers = dataoffers?.data;

  return (
    <Box sx={{ mt: 0 }}>
      {offers?.map((offer, i) => {
        return <Offer key={i} offer={offer} />;
      })}
    </Box>
  );
}
