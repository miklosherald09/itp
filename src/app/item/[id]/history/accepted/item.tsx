"use client";

import { Box, ButtonBase, Typography } from "@mui/material";
import dayjs from "dayjs";
import { usePathname, useRouter } from "next/navigation";
import { useGetOfferByItemId } from "@/services/offers";
import { OfferT } from "@/types/offer";
import { OfferItem } from "@prisma/client";
import { OfferItemT } from "@/types/offerItem";

type Props = {
  offerItem: OfferItemT;
  length: number;
  count: number;
};

export default function Item(props: Props) {
  const { offerItem, count, length } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/item/${offerItem?.itemId}`);
  };

  return (
    <ButtonBase sx={{ p: 0, mt: "-4px" }} onClick={handleClick}>
      <Typography sx={{ fontSize: 12, textDecoration: "underline" }}>
        {offerItem?.item?.name}
      </Typography>
      <span className="mx-2">{count < length - 1 ? " • " : ""}</span>
    </ButtonBase>
  );
}
