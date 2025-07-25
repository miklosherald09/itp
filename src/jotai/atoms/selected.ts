import { ItemT } from "@/types/item";
import { OfferT } from "@/types/offer";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const offerAtom = atom<OfferT | null>();
export const activeItemsAtom = atomWithStorage<ItemT[]>("active", []);
