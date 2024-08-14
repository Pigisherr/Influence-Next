"use client";

import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <form className="relative ml-5" action="">
      <input
        type="text"
        name="search"
        placeholder="Search courses"
        autocomplete="off"
        aria-label="search talk"
        className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
      />

      <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4  rounded-full">
        <FaSearch />
      </button>
    </form>
  );
}
