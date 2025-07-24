import { ItemT } from "./item";
import { OfferItemT } from "./offerItem";
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
  offerItem?: OfferItemT[];
};

export type AddOfferItemsInputT = {
  id: number;
  label: string;
};

export type AddOfferInputT = {
  notes: string;
  items: AddOfferItemsInputT[];
};

export type OfferStatusT =
  | "PENDING"
  | "NEGOTIATING"
  | "THINKING"
  | "ACCEPTED"
  | "DECLINED";

export type AddOfferParamsT = {
  itemId: number;
  userId: number;
  status: OfferStatusT;
  notes: string;
};

export type AcceptOfferInputT = {
  status: { id: OfferStatusT; label: string } | null;
};

export type AcceptOfferParamsT = {
  status: OfferStatusT;
  offerId: number;
};
