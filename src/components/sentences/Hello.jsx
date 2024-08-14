"use client";

import { useSession } from "next-auth/react";

export default function Hello() {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "authenticated" && (
        <h3 className="mt-8 ml-6 text-6xl">
          Welcome back, {session.user.name}!{" "}
        </h3>
      )}
    </>
  );
}
