"use client";

import { SignInButton, SignOutButton } from "@/components/AuthButton";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return <SignInButton />;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
