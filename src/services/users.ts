import { client } from "@/axios/client";
import { UserT } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetUserByEmail = (email: string | null | undefined) => {
  return useQuery({
    queryKey: ["get-user-by-email", email],
    queryFn: () => getUserByEmail(email),
  });
};

export const getUserByEmail = (
  email: string | null | undefined
): Promise<AxiosResponse<UserT>> | null => {
  if (!email) return null;

  const url = `/api/user/?email=${email}`;
  return client({
    url,
    method: "GET",
  });
};

/*-------------------------------------------*/
