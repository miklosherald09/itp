"use client";

import { Box, Container, Typography } from "@mui/material";
import { useGetItems } from "../services/items";

export default function Items() {
  const { data } = useGetItems();
  const items = data?.data ?? [];

  console.log("itemsxx", items);
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "red" }}>
      <Box>
        {items?.map((item, i) => {
          return (
            <Box sx={{ width: "200px", height: "300px" }} key={i}>
              <Typography>{item.name}</Typography>
              <Typography>{item.price}</Typography>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
