"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import "./globals.css";

export default function Page() {
  return (
    <>
      <MaxWidthWrapper>
        <section className=" flex m-auto mt-[3rem] py-[4rem] flex-col">
          <div className="justify-center items-center">
            {" "}
            <h1 className="text-9xl">To Unify Online Creators</h1>
            <p className="text-2xl mt-1">
              One Influencer at a time, we hope to empower the next generation
              of content creators
            </p>
          </div>
          <div className="mt-[20rem] flex justify-between border-b border-gray-800">
            <h2 className="text-7xl">300,000+</h2>
            <h4 className="text-3xl">
              Total Number of Students
              <br />
              transformed trough our programs
            </h4>
          </div>
        </section>

        <section className="flex m-auto mt-[3rem] py-[4rem] flex-col">
          <h3 className="text-xl ml-6">Leon Edwards</h3>
          <h1 className="text-5xl mt-[2rem]">OUR FOUNDER</h1>
          <img
            className="h-[30rem] mt-5"
            src="https://cdn.vox-cdn.com/thumbor/LdnGucZZ2b1YSGyTWokBIRP3h7w=/0x0:4776x3184/920x613/filters:focal(1917x561:2681x1325):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71366309/1416170281.0.jpg"
            alt="leon edwards founder image"
          ></img>
          <p className="mt-5">
            this is why leon edwards has the best physique this is why leon
            edwards has the best physiquethis is why leon edwards has the best
            physiquethis is why leon edwards has the best physiquethis is why
            leon edwards has the best physiquethis is why leon edwards has the
            best physiquethis is why leon edwards has the best physiquethis is
            why leon edwards has the best physiquethis is why leon edwards has
            the best physiquethis is why leon edwards has the best physiquethis
            is why leon edwards has the best physiquethis is why leon edwards
            has the best physiquethis is why leon edwards has the best
            physiquethis is why leon edwards has
          </p>
        </section>
      </MaxWidthWrapper>
    </>
  );
}
