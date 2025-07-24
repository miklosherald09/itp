"use client";

import { Box, Container, Typography } from "@mui/material";
import Offer from "./offer";
import { useGetOfferItemByItemId } from "@/services/offerItems";
import Accepted from "./accepted";
import { usePathname } from "next/navigation";

export default function History() {
  const pathname = usePathname();
  const itemId = pathname.split("/")?.[2];

  const { data: offerItemData } = useGetOfferItemByItemId(Number(itemId));
  const offersItems = offerItemData?.data;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {offersItems?.length ? (
        <Typography variant={"h6"} sx={{ mb: 0, textDecoration: "underline" }}>
          History
        </Typography>
      ) : null}
      <Box>
        {offersItems?.map((offersItem, i) => {
          return <Offer offersItem={offersItem} key={`offer-${i}`} />;
        })}
      </Box>
      <Accepted />
    </Container>
  );
}
