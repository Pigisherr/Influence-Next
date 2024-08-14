"use client";

import Link from "next/link";
import React from "react";

export default function SignUpButton() {
  return (
    <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl ">
      <Link href="/signup">SIgn Up</Link>
    </button>
  );
}
