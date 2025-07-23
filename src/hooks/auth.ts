"use client";

import { userAtom } from "@/jotai/atoms/users";
import { useGetUserByEmail } from "@/services/users";
import { useSetAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function useAuthHandler() {
  const { data: session, status } = useSession();
  const { data: userData, refetch } = useGetUserByEmail(
    session?.user?.email ?? ""
  );
  const user = userData?.data;
  const setUser = useSetAtom(userAtom);

  useEffect(() => {
    if (!session) return;
    refetch();
  }, [session]);

  useEffect(() => {
    if (status === "authenticated") {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }

    if (status === "unauthenticated") {
      localStorage.removeItem("user");
    }
  }, [status, user]);

  return null;
}
