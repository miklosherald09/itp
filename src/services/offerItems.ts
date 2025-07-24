import { client } from "@/axios/client";
import { AddOfferItemParamsT, OfferItemT } from "@/types/offerItem";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAddOfferItem = () => {
  return useMutation({
    mutationFn: (params: AddOfferItemParamsT[]) => addOfferItem(params),
  });
};

const addOfferItem = (
  params: AddOfferItemParamsT[]
): Promise<AxiosResponse<OfferItemT[]>> => {
  const url = `/api/offerItem`;
  return client({
    url,
    method: "POST",
    data: params,
  });
};

/*--------------------------------------------------*/
