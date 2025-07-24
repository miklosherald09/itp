import { client } from "@/axios/client";
import { AddOfferParamsT } from "@/types/offer";
import { OfferItemT } from "@/types/offerItem";
import { useMutation } from "@tanstack/react-query";
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
