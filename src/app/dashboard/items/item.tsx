"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ItemT } from "@/types/item";
import { useAtom } from "jotai";
import { activeItemsAtom } from "@/jotai/atoms/selected";
import { useRouter } from "next/navigation";
import formatter from "@/utility/formatter";

type Props = {
  item: ItemT;
};

export default function Item(props: Props) {
  const { item } = props;

  const [items, setItem] = useAtom(activeItemsAtom);
  const router = useRouter();

  const handleClick = () => {
    router.push(`item/${item?.id}`);
    setItem([...items, item]);
  };

  return (
    <Grid>
      <Button onClick={handleClick} sx={{ pt: 0, pb: 1, px: 1, width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Image
            src={"https://i.pravatar.cc/"}
            width={200}
            height={200}
            alt="Picture of the author"
            style={{
              width: `200px`,
              height: `200px`,
              objectFit: "cover",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          />
          <Box>
            <Typography
              color="textPrimary"
              sx={{
                fontSize: 14,
                textTransform: "none",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              color="textPrimary"
              sx={{
                fontSize: 12,
                textTransform: "none",
              }}
            >
              {formatter.toNumber(item.price)} ITPV
            </Typography>
          </Box>
        </Box>
      </Button>
    </Grid>
  );
}
