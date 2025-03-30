import Image from "next/image";
import React from "react";

type LogoProps = {
  isOpen?: boolean;
  scrolled?: boolean;
  zIndex?: number;
};

const Logo = ({ isOpen, scrolled, zIndex = 10 }: LogoProps) => {
  // Determine text color based on scroll/menu state
  const textColor = isOpen || scrolled ? "text-slate-900" : "text-white";

  // Apply filter only when scrolled or menu is open
  const logoFilter = isOpen || scrolled ? "brightness-0" : "brightness-100";

  return (
    <div className="relative flex items-center gap-2.5" style={{ zIndex }}>
      <div className="flex items-center gap-2.5">
        <Image
          src="/assets/icons/Logo.svg"
          alt="Logo"
          width={100}
          height={100}
          priority
          className={`h-10 w-10 transition-all duration-300 ${
            isOpen || scrolled ? "filter-[brightness(0)]" : ""
          }`}
        />
        <h3
          className={`text-2xl font-medium transition-colors duration-300 ${textColor}`}
        >
          FurniSphere
        </h3>
      </div>
    </div>
  );
};

export default Logo;
