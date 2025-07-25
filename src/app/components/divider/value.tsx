import Link from "next/link";
import { Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { userAtom } from "@/jotai/atoms/users";
import { useGetUserItpvTotal } from "@/services/users";

export default function Value() {
  const user = useAtomValue(userAtom);
  const { data: totalData } = useGetUserItpvTotal(user?.id);
  const total = totalData?.data?.total;

  if (!total) return null;

  return (
    <Typography
      variant="h6"
      component={Link}
      href="/dashboard"
      sx={{
        ml: 1,
        fontSize: 18,
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
      }}
    >
      {total}
    </Typography>
  );
}
