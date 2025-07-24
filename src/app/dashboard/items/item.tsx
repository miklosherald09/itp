"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ItemT } from "@/types/item";
import { useAtom } from "jotai";
import { activeAtom } from "./atoms";
import { darkMode } from "@/utility/pallete";
import { useRouter } from "next/navigation";

type Props = {
  item: ItemT;
};

export default function Item(props: Props) {
  const { item } = props;

  const [items, setItem] = useAtom(activeAtom);
  const router = useRouter();

  const handleClick = () => {
    router.push(`item/${item?.id}`);
    setItem([...items, item]);
  };

  return (
    <Grid size={{ xs: 3, sm: 2, md: 1, lg: 1 }}>
      <Button onClick={handleClick} sx={{ width: "100%" }}>
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
