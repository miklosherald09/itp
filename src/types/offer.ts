export type AddOfferInputT = {
  notes: string;
};

enum OfferStatus {
  PENDING,
  ACCEPTED,
}

export type AddOfferParamsT = {
  id: number;
  itemId: number;
  userId: number;
  status: OfferStatus;
  notes: string;
};
