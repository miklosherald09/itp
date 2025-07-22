import { client } from "@/axios/client";
import { useMutation } from "@tanstack/react-query";

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
