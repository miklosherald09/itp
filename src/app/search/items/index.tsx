"use client";

import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "./item";
import { useSearchItems } from "@/services/items";
import { useSearchParams } from "next/navigation";

export default function ItemsAll() {
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const { data, isLoading } = useSearchItems(search ?? "");
  const items = data?.data ?? [];
  console.log("isLoadingx", isLoading);
  if (isLoading)
    return <Typography sx={{ m: 1 }}>Searching items..</Typography>;

  if (!items?.length && search)
    return <Typography sx={{ m: 1 }}>No results found..</Typography>;

  if (!items?.length) return <></>;

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
