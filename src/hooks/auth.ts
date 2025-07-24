"use client";

import { userAtom } from "@/jotai/atoms/users";
import { useGetUserByEmail } from "@/services/users";
import { useSetAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function useAuthHandler() {
  const { data: session } = useSession();

  console.log("session?.user?.email", session?.user?.email);

  const { data: userData } = useGetUserByEmail(session?.user?.email);
  const user = userData?.data;
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (!user) return;
    console.log("setting up user..", user);
    // localStorage.setItem("user", "{ haha:}");
    setUser(user);
  }, [user]);

  return null;
}
