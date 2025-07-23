"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
