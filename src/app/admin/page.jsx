"use client";

import AddCourse from "@/components/forms/AddCourse";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  return (
    <section className="flex">
      <MaxWidthWrapper>
        {session?.user?.email === "remisannpaul@gmail.com" && (
          <div>
            <h3 className="text-7xl">Welcome Back, {session.user.name}</h3>
            <div className="flex flex-row justify-between mt-8">
              <div className="">
                <h4 className="text-6xl">Sales</h4>
                <h5 className="text-lg">$$$$</h5>
              </div>

              <div className="">
                <h4 className="text-6xl">Active products</h4>
                <h5 className="text-lg">active products num</h5>
              </div>

              <div className="">
                <h4 className="text-6xl">customers</h4>
                <h5 className="text-lg">customer num</h5>
              </div>
            </div>

            <AddCourse />
          </div>
        )}
      </MaxWidthWrapper>
    </section>
  );
}
