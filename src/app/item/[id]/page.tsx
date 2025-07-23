import Divider from "../../components/divider";
import { Box } from "@mui/material";
import TopMenu from "../../components/menu";
import Details from "./details";
import { TradeModal } from "./modal/trade";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <Box>
      <Divider />
      <TopMenu />
      <Details itemId={id} />
      <TradeModal />
    </Box>
  );
}
