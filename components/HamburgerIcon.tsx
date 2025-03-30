import { motion } from "motion/react";

type HamburgerIconProps = {
  isOpen: boolean;
  isDark: boolean;
  onClick: () => void;
};

const HamburgerIcon = ({ isOpen, isDark, onClick }: HamburgerIconProps) => {
  const lineClass = `absolute left-0 h-[2px] w-6 rounded-full transition-colors ${
    isDark ? "bg-slate-900" : "bg-white"
  }`;

  return (
    <button
      className="relative h-6 w-6 cursor-pointer lg:hidden"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          top: isOpen ? "50%" : "25%",
          rotate: isOpen ? 45 : 0,
          y: isOpen ? "-50%" : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
          top: "50%",
          y: "-50%",
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className={lineClass}
        initial={false}
        animate={{
          bottom: isOpen ? "50%" : "25%",
          rotate: isOpen ? -45 : 0,
          y: isOpen ? "50%" : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </button>
  );
};

export default HamburgerIcon;
