"use client";

import { useState } from "react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function CourseDetails({ params }) {
  const { id } = params;
  const [course, setCourse] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`/api/courses/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (id) {
      fetchCourse();
    }
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-600">By {course.author}</p>
      <p className="mt-2">{course.description}</p>
      <p className="mt-2">
        <strong>Skill Level:</strong> {course.skill}
      </p>
    </div>
  );
}
