// components/Navbar.js
"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import SignOutButton from "./buttons/SignOutButton";
import { useSession } from "next-auth/react";
import LoginButton from "./buttons/LoginButton";
import AdminButton from "./buttons/AdminButton";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-800">
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0">
                <Link
                  className="text-white text-lg font-bold text-4xl flex items-center justify-center"
                  href="/"
                >
                  Influence
                </Link>
              </div>
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/courses"
                  >
                    Courses
                  </Link>
                  <Link
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/ourmission"
                  >
                    Our Mission
                  </Link>
                  {status === "authenticated" &&
                    session?.user?.email ===
                      process.env.NEXT_PUBLIC_SECRET_EMAIL && <AdminButton />}
                  {status === "unauthenticated" && <LoginButton />}
                  {status === "authenticated" && <SignOutButton />}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/courses"
            >
              Courses
            </Link>
            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/ourmission"
            >
              Our Mission
            </Link>

            <Link
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
