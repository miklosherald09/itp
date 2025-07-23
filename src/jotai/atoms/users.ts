import { UserT } from "@/types/user";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage<UserT | null>("user", null);
