"use client";

import SignOutButton from "@/components/buttons/SignOutButton";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function testPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>You are not signed in.</p>;
  }

  // Debugging: Log the session object
  console.log("Session object:", session);

  return (
    <>
      <p>Signed In as {session.user.name}</p>
      <p>Your email is {session.user.email}</p>
      <SignOutButton />
    </>
  );
}
