"use client";

import Image from "next/image";
import { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useGetItem } from "@/services/items";
import OfferButton from "./Offer";

type Props = {
  itemId: string;
};

export default function ItemDetails(props: Props) {
  const { itemId } = props;

  // Sample item data
  const item = {
    name: "Vintage Watch",
    description:
      "A classic 1960s mechanical wristwatch in excellent condition. Features a stainless steel case, leather strap, and original box.",
    image: "https://i.pravatar.cc/",
    offers: [
      {
        bidder: "User1",
        amount: "A classic 1960s mechanical wristwatch",
        date: "2025-07-22",
      },
      {
        bidder: "User2",
        amount: "A classic 1960s mechanical wristwatch",
        date: "2025-07-21",
      },
      {
        bidder: "User3",
        amount: "A classic 1960s mechanical wristwatch",
        date: "2025-07-20",
      },
    ],
  };

  const { data: itemData } = useGetItem(Number(itemId));
  const itemDetails = itemData?.data;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Item Image */}
        <Box sx={{ width: "100%" }}>
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              maxHeight: "400px",
            }}
          />
        </Box>

        <Box sx={{ mt: 2, width: "100%" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {itemDetails?.name}
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body1" color="text.secondary">
              {itemDetails?.description}
            </Typography>
          </Box>
          <Box>
            <OfferButton itemId={itemId} />
          </Box>
          {/* <Box sx={{ mb: 3 }}>
            <Typography variant="h6" sx={{ pb: 0 }} gutterBottom>
              Offers
            </Typography>
            {item.offers.length > 0 ? (
              <List sx={{ mb: 0, p: 0 }}>
                {item.offers.map((bid, index) => (
                  <ListItem key={index} disablePadding>
                    <Box>
                      <Typography>{`$${bid.amount} (${bid.date})`}</Typography>
                      <Typography>{`${bid.bidder}`}</Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary">
                No bids yet
              </Typography>
            )}
          </Box> */}
        </Box>
      </Box>
    </Container>
  );
}
