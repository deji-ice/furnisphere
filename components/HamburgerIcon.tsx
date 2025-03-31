"use client";
import { motion } from "motion/react";

type HamburgerIconProps = {
  isOpen: boolean;
  isDark: boolean;
  onClick: () => void;
};

const HamburgerIcon = ({ isOpen, isDark, onClick }: HamburgerIconProps) => {
  const lineClass = `absolute left-0 h-[2px] top-2.5 w-6 rounded-full transition-colors ${
    isDark ? "bg-slate-900" : "bg-white"
  }`;

  const topLineVariants = {
    closed: { rotate: 0, y: -4 },
    open: { rotate: 45, y: 5 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 4 },
    open: { rotate: -45, y: 5 },
  };

  return (
    <button
      className="relative h-6 w-6 cursor-pointer lg:hidden"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="absolute inset-0">
        <motion.span
          className={lineClass}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={topLineVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <motion.span
          className={lineClass}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={bottomLineVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </button>
  );
};

export default HamburgerIcon;
