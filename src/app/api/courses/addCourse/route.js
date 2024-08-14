// src/app/api/courses/addCourse/route.js
import { connectMongoDB } from "@/lib/mongodb";
import Course from "@/models/course";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs"; // Specify runtime if needed for Next.js

export async function POST(req) {
  try {
    await connectMongoDB();

    // Ensure the Content-Type is multipart/form-data
    if (!req.headers.get("content-type")?.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    // Use the native `FormData` API to parse the incoming request
    const formData = await req.formData();
    const title = formData.get("title");
    const author = formData.get("author");
    const description = formData.get("description");
    const skill = formData.get("skill");
    const image = formData.get("image");

    // Validate fields
    if (!title || !author || !description || !skill || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Save the image file
    const imageBuffer = Buffer.from(await image.arrayBuffer());
    const imagePath = path.join(process.cwd(), "public/uploads", image.name);
    fs.writeFileSync(imagePath, imageBuffer);

    // Save course details to MongoDB
    const newCourse = new Course({
      title,
      author,
      description,
      skill,
      image: `/uploads/${image.name}`,
    });

    await newCourse.save();

    return NextResponse.json(
      { message: "Course added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
