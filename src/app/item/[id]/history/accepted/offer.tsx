"use client";

import { Box, ButtonBase, Typography } from "@mui/material";
import dayjs from "dayjs";
import { usePathname } from "next/navigation";
import { useGetOfferByItemId } from "@/services/offers";
import { OfferT } from "@/types/offer";
import Item from "./item";

type Props = {
  offer: OfferT;
};

export default function Offer(props: Props) {
  const { offer } = props;

  const createdDate = dayjs(offer?.createdAt).format("MMMM D, YYYY");
  const offerItems = offer?.offerItem ?? [];

  return (
    <Box sx={{ mt: 1 }}>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ fontSize: 12, mr: "4px" }}>Traded with</Typography>
        {offerItems?.map((offerItem, i) => {
          return (
            <Item
              key={i}
              count={i}
              length={offerItems?.length}
              offerItem={offerItem}
            />
          );
        })}
      </Box>
      <Typography sx={{ fontSize: 10 }}>{createdDate}</Typography>
    </Box>
  );
}
