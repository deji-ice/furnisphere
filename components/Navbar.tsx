"use client";
import React, { useEffect, useState } from "react";
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
  scrolled?: boolean;
};

const MobileMenu = ({ isOpen, links, onClose, scrolled }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50, right: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 z-8 w-full rounded-b-lg bg-white p-4.5 pt-20 shadow-lg md:p-7 md:pt-24 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="flex flex-col rounded py-2.5 text-gray-800 hover:bg-gray-200 md:text-lg"
            >
              {link.name}
            </Link>
          ))}
          <button className="mt-3 w-full rounded-sm border-2 border-slate-900 px-2 py-2 text-lg font-medium text-slate-950 md:hidden">
            Login
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          : "0 0px 0px 0px rgba(0, 0, 0, 0)",
        color: scrolled ? "#1e1e1e" : "#ffffff",
      }}
      transition={{
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
        backdropFilter: { duration: 0.3 },
        backgroundColor: { duration: 0.3 },
      }}
      className={`fixed z-8 flex w-full items-center justify-between py-5 md:px-6 lg:px-[70px] ${
        scrolled
          ? "bg-background/50 rounded-b-xl px-2 text-slate-900 shadow-sm backdrop-blur-[2px] lg:rounded-none"
          : "bg-transparent px-4 text-white"
      }`}
    >
      <Logo scrolled={scrolled} isOpen={isMenuOpen} zIndex={10} />

      <div className="hidden items-center gap-8 lg:flex">
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.15,
              delay: index * 0.05,
            }}
          >
            <Link
              href={link.path}
              className={`relative cursor-pointer text-base transition-all duration-300 ease-in-out ${
                scrolled
                  ? "text-slate-900 hover:font-medium hover:text-slate-700"
                  : "text-white hover:text-white/80"
              }`}
            >
              {link.name}
              <motion.span
                className={`absolute -bottom-1 left-0 h-[1px] ${scrolled ? "bg-slate-900" : "bg-white"}`}
                initial={{ width: 0 }}
                whileHover={{
                  width: "100%",
                  opacity: scrolled ? 0.7 : 0.9,
                }}
                transition={{
                  duration: scrolled ? 0.2 : 0.3,
                  ease: "easeInOut",
                }}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="relative z-42 flex items-center gap-4 lg:gap-6">
        <motion.div
          whileHover={{
            filter: "brightness(1) saturate(100%)",
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <Image
            src={"/assets/icons/Search.svg"}
            height={50}
            width={50}
            alt="search icon"
            className={`h-6 w-6 cursor-pointer transition-all duration-300 ${
              scrolled ? "[filter:brightness(0.12)_saturate(0%)]" : ""
            } ${isMenuOpen ? "[filter:brightness(0.12)_saturate(0%)]" : ""}`}
          />
        </motion.div>

        <motion.div
          whileHover={{
            filter: "brightness(1) saturate(100%)",
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <Image
            src={"/assets/icons/Shopping bag.svg"}
            height={50}
            width={50}
            alt="shopping bag icon"
            className={`h-6 w-6 cursor-pointer transition-all duration-300 ${
              scrolled ? "[filter:brightness(0.12)_saturate(0%)]" : ""
            } ${isMenuOpen ? "[filter:brightness(0.12)_saturate(0%)]" : ""}`}
          />
        </motion.div>

        <div
          className={`hidden h-8 w-0.5 md:block ${
            scrolled || isMenuOpen ? "bg-[#1e1e1e]" : "bg-white"
          } `}
        />

        <motion.button
          whileHover={{
            color: "#FFFFFF",
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
          className={`hidden cursor-pointer transition-all duration-300 md:block ${
            scrolled ? "text-[#1e1e1e] hover:text-white" : "text-white"
          }`}
        >
          Login
        </motion.button>

        <motion.div
          whileHover={{
            filter: "brightness(1) saturate(100%)",
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
          className="relative lg:hidden"
        >
          <Image
            src={"/assets/icons/Hamburger menu.svg"}
            height={50}
            width={50}
            alt="menu icon"
            className={`h-6 w-6 cursor-pointer transition-all duration-300 ${
              scrolled ? "[filter:brightness(0.12)_saturate(0%)]" : ""
            } ${isMenuOpen ? "[filter:brightness(0.12)_saturate(0%)]" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </motion.div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        links={links}
        scrolled={scrolled}
        onClose={() => setIsMenuOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;
