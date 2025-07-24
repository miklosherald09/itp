"use client";

import { Box, Typography } from "@mui/material";
import AcceptButton from "./button/accept";
import Image from "next/image";
import { OfferT } from "@/types/offer";
import { useGetOfferItem } from "@/services/offerItems";
import Item from "./item";

type Props = {
  offer: OfferT;
};

export default function Offer(props: Props) {
  const { offer } = props;
  const { data: offerItem } = useGetOfferItem(offer?.id);

  const items = offerItem?.data;

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ width: "100%", bgcolor: "#F8FAFC" }}>
        <Image
          src={"https://i.pravatar.cc/"}
          alt={"https://i.pravatar.cc/"}
          width={150}
          height={150}
          style={{
            width: "150px",
            maxHeight: "100px",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <Typography variant={"h6"} sx={{ fontSize: 18 }}>
          {items?.map((item, i) => {
            return <Item key={i} item={item?.item} />;
          })}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: 12 }}>{offer?.user?.name}</Typography>
      <Typography sx={{ fontSize: 10 }}>{offer?.createdAt}</Typography>
      <AcceptButton />
    </Box>
  );
}
