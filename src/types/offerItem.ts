import { ItemT } from "./item";

export type AddOfferItemInputT = {
  itemId: number;
};

export type AddOfferItemParamsT = {
  itemId: number;
  offerId: number;
};

export type OfferItemT = {
  id: number;
  offerId: number;
  itemId: number;
  createdAt: string;
  updatedAt: string;
  item: ItemT;
};
