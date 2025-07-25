import { whatIsItpvtAtom } from "@/jotai/atoms/modal";
import { ItemT } from "@/types/item";
import formatter from "@/utility/formatter";
import { Box, ButtonBase, Typography } from "@mui/material";
import { useSetAtom } from "jotai";

type Props = {
  item: ItemT | undefined;
};

export default function ItpvPrice(props: Props) {
  const { item } = props;

  const setWhatIsItpvt = useSetAtom(whatIsItpvtAtom);

  const handleClick = () => {
    setWhatIsItpvt(true);
  };

  const itpv = formatter.toNumber(item?.price);

  if (!itpv) return null;

  return (
    <Box sx={{ display: "flex", justifyContent: "row" }}>
      <Typography sx={{ ml: "4px" }}>{itpv}</Typography>
      <ButtonBase onClick={handleClick}>
        <Typography className="shiny-gold-text" sx={{ ml: 1, color: "#" }}>
          ITPV
        </Typography>
      </ButtonBase>
    </Box>
  );
}
