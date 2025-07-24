import Divider from "../components/divider";
import ItemsAll from "./itemsAll";
import Items from "./items";
import TopMenu from "./menu";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box>
      <Divider />
      <TopMenu />
      <Items />
      <ItemsAll />
    </Box>
  );
}
