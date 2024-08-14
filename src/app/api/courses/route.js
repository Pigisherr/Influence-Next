// src/app/api/courses/route.js
import { connectMongoDB } from "@/lib/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const courses = await Course.find(); // Fetch all courses from the database
    return NextResponse.json(courses, { status: 200 });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      { error: "Failed to fetch courses" },
      { status: 500 }
    );
  }
}
