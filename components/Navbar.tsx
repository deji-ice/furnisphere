"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import HamburgerIcon from "./HamburgerIcon";

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

const MobileMenu = ({ isOpen, links, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 left-0 z-40 max-h-screen w-full overflow-y-auto bg-white shadow-lg lg:hidden"
        >
          <div className="flex items-center justify-end p-4">
            <HamburgerIcon isOpen={true} isDark={true} onClick={onClose} />
          </div>
          <nav className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={onClose}
                className="rounded-md px-4 py-2 text-gray-800 transition-colors hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onClose}
              className="mt-2 w-full rounded border-2 border-slate-900 px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            >
              Login
            </button>
          </nav>
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
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
        boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={`fixed z-50 flex w-full items-center justify-between px-2 py-3 md:px-6 md:py-5 lg:px-[70px] ${
        scrolled
          ? "bg-white/50 text-slate-900 shadow-sm backdrop-blur-md"
          : "bg-transparent text-white"
      }`}
    >
      <Logo scrolled={scrolled} isOpen={isMenuOpen} zIndex={51} />

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
                className={`absolute -bottom-1 left-0 h-[1px] ${
                  scrolled ? "bg-slate-900" : "bg-white"
                }`}
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

      <div className="relative z-40 flex items-center gap-2 sm:gap-4 lg:gap-6">
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
            height={24}
            width={24}
            alt="search icon"
            className={`h-5 w-5 cursor-pointer transition-all duration-300 sm:h-6 sm:w-6 ${
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
            height={24}
            width={24}
            alt="shopping bag icon"
            className={`h-5 w-5 cursor-pointer transition-all duration-300 sm:h-6 sm:w-6 ${
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

        <HamburgerIcon
          isOpen={isMenuOpen}
          isDark={scrolled || isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
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
