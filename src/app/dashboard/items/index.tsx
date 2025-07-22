"use client";

import { Container } from "@mui/material";
import { useGetItems } from "../services/items";
import Grid from "@mui/material/Grid";
import Item from "./item";

export default function Items() {
  const { data } = useGetItems();
  const items = data?.data ?? [];

  return (
    <Container maxWidth="xl" sx={{ mt: 0 }}>
      <Grid container sx={{ height: "120px" }}>
        {items?.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </Grid>
    </Container>
  );
}
