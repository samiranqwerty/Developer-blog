"use client";
import Link from "next/link";
import React from "react";

import SearchBar from "./Search/Search";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";

const Header = () => {
  let pathname = usePathname() || "/";
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex justify-between h-24 text-[#009FB7] text-xl lg:text-2xl">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <SearchBar />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-2 md:space-x-8 sm:items-center">
                  <Link
                    href="/Blog"
                    prefetch
                    className={`${
                      pathname === "/Blog"
                        ? "border-[#009FB7] h-full inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                        : "hover:bg-[#005E6B] hover:text-[#CDC7E5] h-full inline-flex items-center px-1 pt-1"
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/"
                    prefetch
                    className={`${
                      pathname === "/"
                        ? "border-[#009FB7] h-full inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                        : "hover:bg-[#005E6B] hover:text-[#CDC7E5] h-full inline-flex items-center px-1 pt-1"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/documentation"
                    prefetch
                    className={`${
                      pathname === "/documentation"
                        ? "border-[#009FB7] h-full inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                        : "hover:bg-[#005E6B] hover:text-[#CDC7E5] h-full inline-flex items-center px-1 pt-1"
                    }`}
                  >
                    Docs
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/About"
                    prefetch
                    className={`${
                      pathname === "/About"
                        ? "border-[#009FB7] h-full inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                        : "hover:bg-[#005E6B] hover:text-[#CDC7E5] h-full inline-flex items-center px-1 pt-1"
                    }`}
                  >
                    About Us
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <Link
              href="/"
              prefetch
              className={`${
                pathname == "/"
                  ? "bg-[#00454F] text-[#009FB7] block pl-3 pr-4 py-2 border-l-4 text-base"
                  : "border-transparent text-[#005E6B] hover:bg-[#005E6B] hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base"
              }`}
            >
              Home
            </Link>
            <Link
              href="/Blog"
              prefetch
              className={`${
                pathname == "/Blog"
                  ? "bg-[#00454F] text-[#009FB7] block pl-3 pr-4 py-2 border-l-4 text-base"
                  : "border-transparent text-[#005E6B] hover:bg-[#005E6B] hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/documentation"
              prefetch
              className={`${
                pathname == "/documentation"
                  ? "bg-[#00454F] text-[#009FB7] block pl-3 pr-4 py-2 border-l-4 text-base"
                  : "border-transparent hover:bg-[#005E6B] hover:border-gray-300 hover:text-white text-[#005E6B] block pl-3 pr-4 py-2 border-l-4 text-base"
              }`}
            >
              Docs
            </Link>
            <Link
              href="/About"
              prefetch
              className={`${
                pathname == "/About"
                  ? "bg-[#00454F] text-[#009FB7] block pl-3 pr-4 py-2 border-l-4 text-base"
                  : "border-transparent text-[#005E6B] hover:bg-[#005E6B] hover:border-gray-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base"
              }`}
            >
              About Us
            </Link>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
