"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Popup from "@/components/Popup";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const { data: session, status } = useSession();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("/api/courses");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto">
        <div className="text-center">Loading...</div> {/* Loading message */}
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="border p-4 rounded shadow"
            onClick={() => {
              if (status === "authenticated") {
                window.location.href = `/courses/${course._id}`;
              } else {
                handleOpenPopup();
              }
            }}
          >
            {course.image && (
              <img
                src={course.image}
                alt={course.title}
                className="mt-4 w-full h-48 object-cover rounded"
              />
            )}
            <h2 className="text-2xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">By {course.author}</p>
            <p className="mt-2">{course.description}</p>
            <p className="mt-2">
              <strong>Category:</strong> {course.skill}
            </p>
          </div>
        ))}

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
    </div>
  );
}
