import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Collections", path: "/collections" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <div
      className={`px-4 py-5 md:px-6 lg:px-[70px] flex items-center bg-transparent fixed w-full justify-between z-40`}
    >
      <Logo />

      <div className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-base font-normal text-white hover:text-gray-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex  items-center gap-4 lg:gap-6">
        <Image
          src={"/assets/icons/Search.svg"}
          height={50}
          width={50}
          alt="search icon"
          className="h-6 w-6"
        />
        <Image
          src={"/assets/icons/Shopping bag.svg"}
          height={50}
          width={50}
          alt="shopping bag icon"
          className="h-6 w-6"
        />
        <div className="w-0.5 h-8 bg-white hidden md:block" />
        <button className=" hidden md:block">Login</button>
        <Image
          src={"/assets/icons/Hamburger menu.svg"}
          height={50}
          width={50}
          alt="user icon"
          className="h-6 w-6 lg:hidden"
        />
      </div>
    </div>
  );
};

export default Navbar;
