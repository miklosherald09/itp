import { client } from "@/axios/client";
import { ItemT } from "@/types/items";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useGetItems = () => {
  return useQuery({
    queryKey: ["get-items"],
    queryFn: () => getItems(),
  });
};

export const getItems = (): Promise<AxiosResponse<ItemT[]>> => {
  const url = `/dashboard/items`;
  return client({
    url,
    method: "GET",
    data: {},
  });
};
