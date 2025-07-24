"use client";

import { Box, Container, Typography } from "@mui/material";
import Offer from "./offer";
import { useGetOfferByItemId } from "@/services/offers";
import { OfferStatusT } from "@/types/offer";

type Props = {
  itemId: string;
};

export default function Offers(props: Props) {
  const { itemId } = props;
  const { data: offerData } = useGetOfferByItemId(Number(itemId));
  const offers = offerData?.data;
  const allowed: OfferStatusT[] = ["ACCEPTED", "DECLINED"];
  const ongoing = offers?.filter((offer) => !allowed?.includes(offer?.status));

  if (!ongoing?.length) return null;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {offers?.length ? (
        <Typography variant={"h6"} sx={{ mb: 1, textDecoration: "underline" }}>
          Offers
        </Typography>
      ) : null}
      <Box>
        {ongoing?.map((offer, i) => {
          return <Offer offer={offer} key={`offer-${i}`} />;
        })}
      </Box>
    </Container>
  );
}
