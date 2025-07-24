import { UserT } from "@/types/user";
import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage<UserT | null>("user2", null);
// export const user2Atom = atomWithStorage<UserT | null>("user", null);
