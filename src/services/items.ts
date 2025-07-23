import { client } from "@/axios/client";
import { ItemT } from "@/types/items";
import { Items } from "@prisma/client";
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

export const useGetUserItems = (id: number | null) => {
  return useQuery({
    queryKey: ["get-user-items", id],
    queryFn: () => getUserItems(id),
  });
};

export const getUserItems = (
  id: number | null
): Promise<AxiosResponse<ItemT[]>> | null => {
  if (!id) return null;

  const url = `/api/items/user/${id}`;
  return client({
    url,
    method: "GET",
  });
};
