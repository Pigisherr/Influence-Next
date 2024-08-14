"use client";

import Link from "next/link";

const SignUpButton2 = () => {
  return (
    <Link href="signup">
      <button className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl w-[10rem] h-[5rem]">
        Sign Up
      </button>
    </Link>
  );
};

export default SignUpButton2;
