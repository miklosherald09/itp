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
