import { OfferT } from "@/types/offer";
import { atom } from "jotai";

export const offerAtom = atom<OfferT | null>();
