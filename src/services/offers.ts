import { client } from "@/axios/client";
import { AddOfferParamsT, OfferT } from "@/types/offer";
import { OfferItemT } from "@/types/offerItem";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useAddOffer = () => {
  return useMutation({
    mutationFn: (params: AddOfferParamsT) => addOffer(params),
  });
};

export const addOffer = (
  params: AddOfferParamsT
): Promise<AxiosResponse<OfferItemT>> => {
  const url = `/api/offer`;
  return client({
    url,
    method: "POST",
    data: params,
  });
};

/*--------------------------------------------------*/

export const useGetItemOffers = (itemId: number) => {
  return useQuery({
    queryKey: ["get-item-offers", itemId],
    queryFn: () => getItemOffers(itemId),
  });
};

const getItemOffers = (itemId: number): Promise<AxiosResponse<OfferT[]>> => {
  const url = `/api/offer/item/${itemId}`;
  return client({
    url,
    method: "GET",
  });
};
