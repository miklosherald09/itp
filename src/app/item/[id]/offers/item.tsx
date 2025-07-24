"use client";

import { Box, ButtonBase } from "@mui/material";
import { ItemT } from "@/types/item";
import { useRouter } from "next/navigation";

type Props = {
  item: ItemT;
};

export default function Item(props: Props) {
  const { item } = props;
  const router = useRouter();
  const handleClick = () => {
    router.push(`/item/${item?.id}`);
  };

  return (
    <Box>
      <ButtonBase onClick={handleClick}>
        <span className="underline">{item?.name} +</span>
      </ButtonBase>
    </Box>
  );
}
