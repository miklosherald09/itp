import { UserT } from "@/types/user";
import { Box, ButtonBase, Typography } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import dayjs from "dayjs";

type Props = {
  user: UserT | undefined;
  createdAt: string | undefined;
};

export default function UserInfo(props: Props) {
  const { user, createdAt } = props;

  const date = dayjs(createdAt).format("MMMM D, YYYY");

  return (
    <Box sx={{ display: "flex", justifyContent: "row" }}>
      <ButtonBase>
        <PermContactCalendarIcon fontSize="medium" />
        <Typography sx={{ ml: 1 }}>{user?.name}</Typography>
      </ButtonBase>
      <span className="mx-2">•</span>
      <Typography>Created: {date}</Typography>
    </Box>
  );
}
