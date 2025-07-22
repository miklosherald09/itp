import { prisma } from "@/lib/prisma";
import { Box, Typography } from "@mui/material";

export default async function Items() {
  const items = await prisma.items.findMany();

  return (
    <Box id="items-init">
      {items?.map((item, i) => {
        return (
          <Box key={i}>
            <Typography>{item.name}</Typography>
            <Typography>{item.price}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}
