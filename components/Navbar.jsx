"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "Home" },
  { path: "/fields", name: "Fields" },
  { path: "/resume", name: "Resume" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];

function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="space-x-6">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName ? "text-accent" : ""
          } text-xl hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
