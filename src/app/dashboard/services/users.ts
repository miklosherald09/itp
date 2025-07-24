import { client } from "@/axios/client";
import { ItemT } from "@/types/item";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetUser = (id: number | null | undefined) => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => getUser(id),
  });
};

export const getUser = (
  id: number | null | undefined
): Promise<AxiosResponse<ItemT[]>> | null => {
  if (!id) return null;
  const url = `/dashboard/items/?email=${id}`;
  return client({
    url,
    method: "GET",
    data: {},
  });
};
