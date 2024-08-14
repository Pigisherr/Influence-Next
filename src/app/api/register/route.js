// src/app/api/register/route.js
import { connectMongoDB } from "@/lib/mongodb"; // Ensure this is only imported once
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, hashedPassword });
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    console.error("Error registering user:", error); // Improved logging
    return NextResponse.json(
      { message: "Error registering user", error: error.message },
      { status: 500 }
    );
  }
}
