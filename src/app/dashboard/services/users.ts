import { client } from "@/axios/client";
import { ItemT } from "@/types/item";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetUser = (email: string) => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => getUser(email),
  });
};

export const getUser = (email: string): Promise<AxiosResponse<ItemT[]>> => {
  const url = `/dashboard/items/?email=${email}`;
  return client({
    url,
    method: "GET",
    data: {},
  });
};
