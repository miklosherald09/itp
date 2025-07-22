export type ItemT = {
  type: string;
  name: string;
  description?: string;
  price?: number;
  duration?: number;
  level?: number;
};

export type AddItemInputT = {
  type: string;
  name: string;
  description?: string;
  price: string;
  duration: string;
};

export type AddParamsT = {
  type: string;
  userId: number;
  name: string;
  description?: string;
  price?: number;
  duration?: number;
};
