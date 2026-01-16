"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const path = "/" + pathname.split("/")[1];

  const navitems = [
    { name: "RECIPES", href: "/recipes" },
    { name: "NEWS", href: "/news" },
    { name: "ABOUT US", href: "/about" },
  ];

  return (
    <footer className="flex bg-[#222222] text-center items-center py-4 px-8">
      <div className="space-y-2 max-w-md mx-auto text-left text-gray-500">
        <p className="text-xl text-white font-semibold">Recipe<span className="text-[#ffcf60]">Hub</span></p>
        <p>A modern recipe catalog app that helps users discover, explore, and manage curated recipes through a seamless, intuitive experience.</p>
        <p className="text-sm mt-12">
          © {new Date().getFullYear()} RecipeHub
        </p>
      </div>

      <div className="max-w-md mx-auto text-left text-gray-500">
        <ul>
          {navitems.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='text-sm transition text-gray-500 hover:text-[#ffcf60] font-semibold'
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="max-w-md mx-auto text-left text-gray-500">
        <ul>
          {navitems.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='text-sm transition text-gray-500 hover:text-[#ffcf60] font-semibold'
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
