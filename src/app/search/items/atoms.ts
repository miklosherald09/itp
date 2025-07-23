import { ItemT } from "@/types/items";
import { atomWithStorage } from "jotai/utils";

export const activeAtom = atomWithStorage<ItemT[]>("active", []);
