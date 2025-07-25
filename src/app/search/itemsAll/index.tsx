"use client";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "../items/item";
import { useGetItems } from "@/services/items";
import { useSearchParams } from "next/navigation";

export default function ItemsAll() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const { data, isLoading } = useGetItems();
  const items = data?.data ?? [];

  if (search) return <></>;
  if (isLoading) return <></>;

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Grid container sx={{ height: "120px" }}>
        {items?.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </Grid>
    </Container>
  );
}
