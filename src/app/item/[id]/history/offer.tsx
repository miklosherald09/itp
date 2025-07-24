"use client";

import { Box, ButtonBase, Typography } from "@mui/material";
import dayjs from "dayjs";
import { OfferItemT } from "@/types/offerItem";
import { useRouter } from "next/navigation";

type Props = {
  offersItem: OfferItemT;
};

export default function Offer(props: Props) {
  const { offersItem } = props;

  const createdDate = dayjs(offersItem?.createdAt).format("MMMM D, YYYY");
  const name = offersItem?.offer?.item?.name;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/item/${offersItem?.offer?.itemId}`);
  };

  if (offersItem?.offer?.status !== "ACCEPTED") return null;

  return (
    <Box sx={{ mt: 0 }}>
      <ButtonBase onClick={handleClick}>
        <Typography sx={{ fontSize: 12 }}>
          Traded with <span className="underline">{name}</span>
        </Typography>
      </ButtonBase>
      <Typography sx={{ fontSize: 10 }}>{createdDate}</Typography>
    </Box>
  );
}
