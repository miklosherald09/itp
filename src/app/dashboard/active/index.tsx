"use client"; // This component uses client-side interactivity (scrolling)

import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useAtomValue } from "jotai";
import { activeAtom } from "../../dashboard/items/atoms";

// const items: ListItem[] = [
//   { id: 1, name: "T-Shirts", imageUrl: "https://i.pravatar.cc/150?img=1" },
//   { id: 2, name: "Hoodies", imageUrl: "https://i.pravatar.cc/150?img=2" },
//   { id: 3, name: "Jeans", imageUrl: "https://i.pravatar.cc/150?img=3" },
//   { id: 4, name: "Sneakers", imageUrl: "https://i.pravatar.cc/150?img=4" },
//   { id: 5, name: "Hats", imageUrl: "https://i.pravatar.cc/150?img=5" },
//   { id: 6, name: "Jackets", imageUrl: "https://i.pravatar.cc/150?img=6" },
//   { id: 7, name: "Socks", imageUrl: "https://i.pravatar.cc/150?img=7" },
// ];

export default function ActiveItems() {
  const items = useAtomValue(activeAtom);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          overflowX: "auto", // Enable horizontal scrolling
          padding: 2,
          // Hide scrollbar for a cleaner look
          "&::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
        }}
      >
        <Stack direction="row" spacing={3}>
          {items.map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                minWidth: 80, // Ensure items don't get too squished
              }}
            >
              <Avatar
                alt={item.name}
                src={"https://i.pravatar.cc/150?img=1"}
                sx={{ width: 64, height: 64, marginBottom: 1 }}
              />
              <Typography variant="caption">{item.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
