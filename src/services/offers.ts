import { client } from "@/axios/client";
import { AcceptOfferParamsT, AddOfferParamsT, OfferT } from "@/types/offer";
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

export const useGetOfferByItemId = (itemId: number) => {
  return useQuery({
    queryKey: ["get-item-offers", itemId],
    queryFn: () => getOfferByItemId(itemId),
  });
};

const getOfferByItemId = (itemId: number): Promise<AxiosResponse<OfferT[]>> => {
  const url = `/api/offer/item/${itemId}`;
  return client({
    url,
    method: "GET",
  });
};

/*--------------------------------------------------*/

export const useAcceptOffer = () => {
  return useMutation({
    mutationFn: (params: AcceptOfferParamsT) => acceptOffer(params),
  });
};

const acceptOffer = (
  params: AcceptOfferParamsT
): Promise<AxiosResponse<OfferItemT>> => {
  const url = `/api/offer/accept`;
  return client({
    url,
    method: "PUT",
    data: params,
  });
};
