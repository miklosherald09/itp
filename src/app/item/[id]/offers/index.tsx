"use client";

import { Box, Container, Typography } from "@mui/material";
import Offer from "./offer";
import { useGetItemOffers } from "@/services/offers";

type Props = {
  itemId: string;
};

export default function Offers(props: Props) {
  const { itemId } = props;
  const { data: offerData } = useGetItemOffers(Number(itemId));
  const offers = offerData?.data;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant={"h6"} sx={{ mb: 2, textDecoration: "underline" }}>
        Offers
      </Typography>
      <Box>
        {offers?.map((offer, i) => {
          return <Offer offer={offer} key={`offer-${i}`} />;
        })}
      </Box>
    </Container>
  );
}
