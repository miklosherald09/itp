import { ItemFormModal } from "./modal/add-item";
import Divider from "./divider";
import TopMenu from "./menu";
import Items from "./items";
import { Box } from "@mui/material";
import ActiveItems from "./active";

export default function Page() {
  return (
    <Box>
      <Divider />
      <TopMenu />
      <ActiveItems />
      <Items />
      <ItemFormModal />
    </Box>
  );
}
