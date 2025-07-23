import { client } from "@/axios/client";
import { UsersT, UserT } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAddItem = () => {
  return useMutation({
    mutationFn: (params: any) => addItem(params),
  });
};

export const addItem = (params) => {
  const url = `/api/items`;
  return client({
    url,
    method: "POST",
    data: params,
  });
};

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
  const url = `/api/users/?email=${email}`;
  return client({
    url,
    method: "GET",
  });
};
