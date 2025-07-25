"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { ItemT } from "@/types/item";
import { darkMode } from "@/utility/pallete";
import { useRouter } from "next/navigation";
import formatter from "@/utility/formatter";

type Props = {
  item: ItemT;
};

export default function Item(props: Props) {
  const { item } = props;
  const router = useRouter();

  const handleClick = () => {
    console.log("itemx", item);
    router.push(`/item/${item?.id}`);
  };

  return (
    <Grid>
      <Button onClick={handleClick} sx={{ width: "100%" }}>
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
