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

export const useGetUserItpvTotal = (id: number | null | undefined) => {
  return useQuery({
    queryKey: ["get-user-by-email", id],
    queryFn: () => getUserItpvTotal(id),
  });
};

const getUserItpvTotal = (
  id: number | null | undefined
): Promise<AxiosResponse<{ total: number }>> | null => {
  if (!id) return null;

  const url = `/api/user/${id}/itpv-value`;
  return client({
    url,
    method: "GET",
  });
};
