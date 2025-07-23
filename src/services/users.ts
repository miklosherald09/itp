import { client } from "@/axios/client";
import { UserT } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

/*--------- useGetUserByEmail ---------*/

export const useGetUserByEmail = (email: string) => {
  return useQuery({
    queryKey: ["get-user-by-email"],
    queryFn: () => getUserByEmail(email),
    enabled: false,
  });
};

export const getUserByEmail = (
  email: string
): Promise<AxiosResponse<UserT>> => {
  const url = `/api/user/?email=${email}`;
  return client({
    url,
    method: "GET",
  });
};
