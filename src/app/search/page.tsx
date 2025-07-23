import Divider from "../components/divider";
import Items from "./items";
import TopMenu from "./menu";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box>
      <Divider />
      <TopMenu />
      <Items />
    </Box>
  );
}
