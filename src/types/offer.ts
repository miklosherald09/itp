import { ItemT } from "./item";
import { UserT } from "./user";

export type OfferT = {
  id: number;
  itemId: number;
  userId: number;
  user?: UserT;
  item?: ItemT;
  status: OfferStatusT;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type AddOfferItemsInputT = {
  id: number;
  label: string;
};

export type AddOfferInputT = {
  notes: string;
  items: AddOfferItemsInputT[];
};

export type OfferStatusT = "PENDING" | "ACCEPTED";

export type AddOfferParamsT = {
  itemId: number;
  userId: number;
  status: OfferStatusT;
  notes: string;
};
