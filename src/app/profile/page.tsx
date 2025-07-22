import { prisma } from "@/lib/prisma";
import Profile from "./Profile";
import { Box } from "@mui/material";
import { UsersT } from "@/types";

export default async function ProfilePage() {
  const users = await prisma.users.findMany();

  return (
    <div>
      {users?.map((item: UsersT, i: number) => {
        return (
          <Box key={i}>
            <p>{item?.id}</p>
            <p>{item?.name}</p>
            <p>{item?.email}</p>
          </Box>
        );
      })}
      <Profile />
    </div>
  );
}
