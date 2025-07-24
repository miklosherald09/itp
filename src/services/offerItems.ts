import { client } from "@/axios/client";
import { AddOfferItemParamsT, OfferItemT } from "@/types/offerItem";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAddOfferItem = () => {
  return useMutation({
    mutationFn: (params: AddOfferItemParamsT[]) => addOfferItem(params),
  });
};

const addOfferItem = (
  params: AddOfferItemParamsT[]
): Promise<AxiosResponse<OfferItemT[]>> => {
  const url = `/api/offer-item`;
  return client({
    url,
    method: "POST",
    data: params,
  });
};

/*--------------------------------------------------*/

export const useGetOfferItem = (offerId: number | null | undefined) => {
  return useQuery({
    queryKey: ["get-user-items", offerId],
    queryFn: () => getOfferItem(offerId),
  });
};

const getOfferItem = (
  offerId: number | null | undefined
): Promise<AxiosResponse<OfferItemT[]>> | null => {
  if (!offerId) return null;

  const url = `/api/offer-item/offer/${offerId}`;
  return client({
    url,
    method: "GET",
  });
};
