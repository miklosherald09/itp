import Divider from "../components/divider";
import ItemsAll from "./itemsAll";
import Items from "./items";
import { Box } from "@mui/material";
import TopMenu from "../components/menu";

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
