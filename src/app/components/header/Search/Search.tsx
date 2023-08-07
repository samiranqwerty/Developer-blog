import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <>
      <label className="relative block">
        <MagnifyingGlassIcon
          className="absolute inset-y-0 pt-2 left-0 flex items-center pl-2 w-8 h-8 z-10 "
          fill="#009FB7"
        />
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 pl-10 text-sm text-[#05DDFB] border-2 bg-[#15191F] border-[#009FB7] rounded-lg backdrop-brightness-150 hover:border-[#124047] focus:outline-none"
          placeholder="Search..."
        />
      </label>
    </>
  );
};

export default SearchBar;
