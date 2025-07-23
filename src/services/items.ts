import { client } from "@/axios/client";
import { AddItemsParamsT, ItemT } from "@/types/items";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

/*--------------------------------------------------*/

export const useAddItem = () => {
  return useMutation({
    mutationFn: (params: AddItemsParamsT) => addItem(params),
  });
};

export const addItem = (params: AddItemsParamsT) => {
  const url = `/api/item`;
  return client({
    url,
    method: "POST",
    data: params,
  });
};

/*--------------------------------------------------*/

export const useGetUserItems = (id: number | null | undefined) => {
  return useQuery({
    queryKey: ["get-user-items", id],
    queryFn: () => getUserItems(id),
  });
};

export const getUserItems = (
  id: number | null | undefined
): Promise<AxiosResponse<ItemT[]>> | null => {
  if (!id) return null;

  const url = `/api/item/user/${id}`;
  return client({
    url,
    method: "GET",
  });
};

/*--------------------------------------------------*/

export const useSearchItems = (search: string) => {
  return useQuery({
    queryKey: ["get-search-items", search],
    queryFn: () => getSearchItems(search),
  });
};

export const getSearchItems = (
  search: string
): Promise<AxiosResponse<ItemT[]>> | null => {
  const url = `/api/item/search/${search}`;
  return client({
    url,
    method: "GET",
  });
};

/*--------------------------------------------------*/

export const useGetItem = (id: number) => {
  return useQuery({
    queryKey: ["get-item", id],
    queryFn: () => getItem(id),
  });
};

export const getItem = (id: number): Promise<AxiosResponse<ItemT>> | null => {
  const url = `/api/item/${id}`;
  return client({
    url,
    method: "GET",
  });
};
