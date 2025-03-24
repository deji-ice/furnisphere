"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Collections", path: "/collections" },
  { name: "Contact", path: "/contact" },
];

type MobileMenuProps = {
  isOpen: boolean;
  links: { name: string; path: string }[];
  onClose: () => void;
};

const MobileMenu = ({ isOpen, links, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50, right: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute  bg-white w-full top-0 pt-20 z-41 shadow-lg rounded-lg p-4.5 md:p-7 md:pt-24 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="flex flex-col py-2.5 md:text-lg text-gray-800 hover:bg-gray-200 rounded"
            >
              {link.name}
            </Link>
          ))}
          <button className="border-2 border-slate-900 w-full px-2 py-2 text-slate-950 text-lg font-medium rounded-sm mt-3 md:hidden">
            Login
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`px-4 py-5 md:px-6 lg:px-[70px] flex items-center bg-transparent fixed w-full justify-between z-40`}
    >
      <Logo isOpen={isMenuOpen} />

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

      <div className="flex  items-center relative   z-42  gap-4 lg:gap-6">
        <Image
          src={"/assets/icons/Search.svg"}
          height={50}
          width={50}
          alt="search icon"
          className={`h-6 w-6 ${
            isMenuOpen &&
            "[filter:brightness(0.12)_saturate(0%)] dark:[filter:brightness(10)_saturate(100%)]"
          }`}
        />
        <Image
          src={"/assets/icons/Shopping bag.svg"}
          height={50}
          width={50}
          alt="shopping bag icon"
          className={`h-6 w-6  ${
            isMenuOpen &&
            "[filter:brightness(0.12)_saturate(0%)] dark:[filter:brightness(10)_saturate(100%)]"
          }`}
        />
        <div
          className={`w-0.5 h-8 hidden md:block ${
            isMenuOpen ? "bg-[#1e1e1e]" : "bg-white"
          }
          `}
        />
        <button
          className={` hidden md:block ${
            isMenuOpen &&
            "[filter:brightness(0.12)_saturate(0%)] dark:[filter:brightness(10)_saturate(100%)] "
          }
          `}
        >
          Login
        </button>
        <Image
          src={"/assets/icons/Hamburger menu.svg"}
          height={50}
          width={50}
          alt="user icon"
          className={`h-6 w-6 lg:hidden ${
            isMenuOpen && "[filter:brightness(0.12)_saturate(0%)] "
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        links={links}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;
