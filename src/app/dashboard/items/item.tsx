"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ItemT } from "@/types/items";
import { useAtom } from "jotai";
import { activeAtom } from "./atoms";
import { darkMode } from "@/utility/pallete";

type Props = {
  item: ItemT;
};

export default function Item(props: Props) {
  const { item } = props;

  const [items, setItem] = useAtom(activeAtom);

  return (
    <Grid size={{ xs: 4, sm: 3, md: 2, lg: 1 }}>
      <Button
        onClick={() => {
          setItem([...items, item]);
        }}
        sx={{ width: "100%" }}
      >
        <Box
          sx={{
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Image
            src="/file.svg"
            width={60}
            height={60}
            alt="Picture of the author"
            style={{
              width: `100%`,
              height: `100%`,
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          />
          <Typography
            sx={{
              color: darkMode?.primary,
              fontSize: 12,
              textTransform: "none",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              color: darkMode?.primary,
              fontSize: 12,
              textTransform: "none",
            }}
          >
            {item.price}
          </Typography>
        </Box>
      </Button>
    </Grid>
  );
}
