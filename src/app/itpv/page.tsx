import Divider from "../components/divider";
import { Box } from "@mui/material";
import TopMenu from "../components/menu";
import Total from "./total";

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
      <Total />
    </Box>
  );
}
