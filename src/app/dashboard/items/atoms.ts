import { ItemT } from "@/types/item";
import { atomWithStorage } from "jotai/utils";

export const activeAtom = atomWithStorage<ItemT[]>("active", []);
