import { ItemFormModal } from "./modal/add-item";
import Divider from "../components/divider";
import TopMenu from "../components/menu";
import Items from "./items";
import { Box } from "@mui/material";

export default function Page() {
  return (
    <Box>
      <Divider />
      <TopMenu />
      {/* <ActiveItems /> */}
      <Items />
      <ItemFormModal />
    </Box>
  );
}
