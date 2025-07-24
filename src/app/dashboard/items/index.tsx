"use client";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Item from "./item";
import { useGetUserItems } from "@/services/items";
import { useAtomValue } from "jotai";
import { userAtom } from "@/jotai/atoms/users";

export default function Items() {
  const user = useAtomValue(userAtom);
  const { data } = useGetUserItems(user?.id ?? 0);
  const items = data?.data ?? [];

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container sx={{ height: "120px" }}>
        {items?.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </Grid>
    </Container>
  );
}
