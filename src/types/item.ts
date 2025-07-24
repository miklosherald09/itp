import { UserT } from "./user";

export type ItemT = {
  id: number;
  userId: number;
  type: string;
  name: string;
  description?: string;
  price?: number;
  duration?: number;
  level?: number;
  user: UserT;
  createdAt: string;
  updatedAt: string;
};

export type AddItemInputT = {
  type: string;
  name: string;
  description?: string;
  price: string;
  duration: string;
};

export type AddItemsParamsT = {
  type: string;
  userId: number;
  name: string;
  description?: string;
  price?: number;
  duration?: number;
};

export type TradeInputT = {
  coins: string;
  notes: string;
  items?: string;
};

export type TradeParamT = {
  coins: string;
  notes: string;
  items?: string;
  userId: number;
  itemId: number;
};
