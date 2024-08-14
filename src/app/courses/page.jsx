"use client";

import { useState } from "react";
import SearchBar from "@/components/inputs/SearchBar";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hello from "@/components/sentences/Hello";
import dynamic from "next/dynamic";
import courses from "../../../testingData/courses";
import CourseList from "@/components/listings/CourseList";
import Popup from "@/components/Popup";
import { useSession } from "next-auth/react";

import LoginButton from "@/components/buttons/LoginButton";

export default function Page() {
  const SignUpButton2 = dynamic(
    () => import("../../components/buttons/SignUpButton2"),
    { ssr: false }
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="flex">
      <MaxWidthWrapper>
        <Hello />
        <div className="flex justify-between mt-4 mr-6">
          <div className="flex gap-4">
            <button className="rounded bg-gray-700 px-4 py-2 text-white ml-5">
              Category
            </button>
            <button className="rounded bg-gray-700 px-4 py-2 text-white">
              Author
            </button>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-5 ml-4">
          {courses.map((course, index) => (
            <div
              className="max-w-[22rem] flex flex-col w-1/3 p-4 border rounded-lg bg-gray-100 cursor-pointer"
              key={index}
              onClick={() => {
                if (status === "authenticated") {
                  window.location.href = `/courses/${course._id}`;
                } else {
                  handleOpenPopup();
                }
              }}
            >
              <img
                src={course.image}
                className="h-[12rem]"
                alt="course image"
              />
              <h3 className="font-semibold">{course.title}</h3>
              <p className="text-gray-700">{course.author}</p>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-gray-500">{course.category}</p>
            </div>
          ))}

          <CourseList />
          <Popup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            content={
              <>
                <p>You need to be logged in to access courses</p>
              </>
            }
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
