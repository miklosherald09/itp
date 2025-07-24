"use client";

import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";
import { useGetItem } from "@/services/items";
import OfferButton from "./button/offer";
import UserInfo from "./user-info";

type Props = {
  itemId: string;
};

export default function ItemDetails(props: Props) {
  const { itemId } = props;

  const { data: itemData } = useGetItem(Number(itemId));
  const item = itemData?.data;

  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ width: "100%", bgcolor: "#F8FAFC" }}>
          <Image
            src={"https://i.pravatar.cc/"}
            alt={"https://i.pravatar.cc/"}
            width={200}
            height={200}
            style={{
              width: "200px",
              height: "auto",
              objectFit: "cover",
              maxHeight: "400px",
            }}
          />
        </Box>
        <Box sx={{ mt: 2, width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            {item?.name}
          </Typography>
          <Box sx={{ mb: 1 }}>
            <Typography variant="body1" color="text.secondary">
              {item?.description}
            </Typography>
          </Box>
          <UserInfo user={item?.user} createdAt={item?.createdAt} />
          <Box sx={{ mt: 2 }}>
            <OfferButton />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
