"use client";

import { Typography, Button } from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useAtomValue, useSetAtom } from "jotai";
import { acceptAtom } from "@/jotai/atoms/modal";
import { usePathname } from "next/navigation";
import { useGetUserItems } from "@/services/items";
import { userAtom } from "@/jotai/atoms/users";
import { OfferT } from "@/types/offer";
import { offerAtom } from "@/jotai/atoms/selected";

type Props = {
  offer: OfferT;
};

export default function AcceptButton(props: Props) {
  const { offer } = props;

  const setOpen = useSetAtom(acceptAtom);
  const pathname = usePathname();
  const pathnames = pathname.split("/");
  const user = useAtomValue(userAtom);
  const { data, isLoading } = useGetUserItems(user?.id);
  const items = data?.data;
  const ids = items?.map((item) => item.id);

  const setOffer = useSetAtom(offerAtom);
  const ownItem = ids?.includes(Number(pathnames?.[2]));

  const handleClick = () => {
    setOffer(offer);
    setOpen(true);
  };

  if (isLoading) return <></>;
  if (!ownItem) return <></>;

  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      sx={{ pl: 2, pr: 3 }}
      onClick={handleClick}
    >
      <HandshakeIcon />
      <Typography sx={{ textTransform: "none", fontWeight: 500, ml: 1 }}>
        Accept Offer - {offer.status}
      </Typography>
    </Button>
  );
}
