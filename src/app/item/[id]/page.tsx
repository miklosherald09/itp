import Divider from "../../components/divider";
import { Box } from "@mui/material";
import TopMenu from "../../components/menu";
import Details from "./details";
import { OfferModal } from "./modal/offer";
import Offers from "./offers";
import { AcceptModal } from "./modal/accept";
import History from "./history";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <Box sx={{ mb: 20 }}>
      <Divider />
      <TopMenu />
      <Details itemId={id} />
      <Offers itemId={id} />
      <History />
      <OfferModal />
      <AcceptModal />
    </Box>
  );
}
