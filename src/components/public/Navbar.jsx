"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  IoSearch,
  IoPersonOutline,
  IoChevronDown,
  IoChevronUp,
  IoHeartOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Navbar() {
  const store = useSelector((state) => state);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isLoggedIn = store.auth.isAuthenticated;
  const user = store.auth.user;

  const path = "/" + pathname.split("/")[1];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navitems = [
    { name: "RECIPES", href: "/recipes" },
    { name: "NEWS", href: "#" },
    { name: "ABOUT US", href: "#" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between px-6 py-4 lg:px-8 shadow-md bg-white"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <p className="font-bold text-xl">
              Recipe<span className="text-[#ffcf60]">Hub</span>
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            command="show-modal"
            commandfor="mobile-menu"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          ></button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navitems.map((item) => {
            const isActive = path === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition text-[#222222] hover:text-[#ffcf60] font-semibold
                  ${isActive ? "text-[#ffcf60]" : "text-[#222222]"}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-1 justify-end">
          <div className="relative w-64 mr-4">
            <input
              className="w-full rounded-lg bg-[#f3f3f5] border border-[#afafaf] pt-2 pb-1.5 pl-4 pr-10 text-sm placeholder:text-[#afafaf] focus:outline-[#ffcf60]"
              id="search"
              type="text"
              name="search"
              placeholder="Search recipes..."
            />
            <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#afafaf]" />
          </div>

          <div className="relative" ref={dropdownRef}>
            <div
              className="flex group items-center hover:cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="text-white p-2 mr-2 rounded-2xl group-hover:text-[#ffcf60] hover:cursor-pointer transition bg-[#222222]">
                <IoPersonOutline size={18} />
              </div>
              {open ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
            </div>

            {!isLoggedIn && open && (
              <div
                className="absolute right-0 mt-2 w-50 p-2
                          rounded-lg bg-white shadow-lg"
              >
                <button
                  onClick={() => (window.location.href = "/login")}
                  className="block w-full px-4 pt-3 pb-1 text-left text-sm
                         hover:bg-[#ffce5f] hover:cursor-pointer"
                >
                  Login
                </button>
                <div className="my-1 h-px bg-gray-200" />
                <button
                  onClick={() => (window.location.href = "/register")}
                  className="block w-full px-4 py-2 text-left text-sm
                         hover:bg-[#ffce5f] hover:cursor-pointer"
                >
                  Register
                </button>
              </div>
            )}
            {isLoggedIn && open && (
              <div
                className="absolute right-0 mt-2 w-60 p-2
                          rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center w-full px-4 py-2">
                  <div className="p-3 mr-3 bg-[#222222] rounded-4xl">
                    <IoPersonOutline size={20} className="text-white " />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#222222]">
                      {user.firstname}
                    </p>
                    <p className="text-xs font-medium text-gray-600">
                      {user.role}
                    </p>
                  </div>
                </div>
                <hr className="text-[#ffce5f]" />
                <button
                  className="flex w-full px-4 pt-3 pb-1 text-left text-sm
                         hover:bg-[#ffce5f] hover:cursor-pointer"
                >
                  <IoPersonOutline className="mr-3" />
                  Profile
                </button>
                <button
                  className="flex w-full px-4 pt-3 pb-1 text-left text-sm
                         hover:bg-[#ffce5f] hover:cursor-pointer"
                >
                  <IoHeartOutline className="mr-3" />
                  Favourites
                </button>
                <hr className="text-[#ffce5f]" />
                <button
                  className="flex w-full px-4 pt-4 pb-2 text-left text-sm
                         hover:bg-[#ffce5f] hover:cursor-pointer"
                >
                  <IoLogOutOutline className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
