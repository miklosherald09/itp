"use client";

import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "./item";
import { useSearchItems } from "@/services/items";
import { useSearchParams } from "next/navigation";

export default function Items() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const { data, isLoading } = useSearchItems(search ?? "");
  const items = data?.data ?? [];

  if (isLoading)
    return <Typography sx={{ m: 1 }}>Searching items..</Typography>;
  if (!items?.length)
    return <Typography sx={{ m: 1 }}>No results found..</Typography>;

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid container sx={{ height: "120px" }}>
        {items?.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </Grid>
    </Container>
  );
}
