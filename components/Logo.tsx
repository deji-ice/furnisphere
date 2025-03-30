import Image from "next/image";
import React from "react";

type LogoProps = {
  isOpen?: boolean;
  scrolled?: boolean;
  zIndex?: number;
};
const Logo = ({ isOpen, scrolled, zIndex }: LogoProps) => {
  return (
    <div className={`relative z-${zIndex} flex items-center gap-2.5`}>
      {isOpen ? (
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/icons/Logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-10 [filter:brightness(0.12)_saturate(0%)]"
          />
          <h3 className={`text-2xl font-medium text-black`}>FurniSphere</h3>
        </div>
      ) : (
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/icons/Logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className={`h-10 w-10 ${
              scrolled && "[filter:brightness(0.12)_saturate(0%)]"
            }`}
          />
          <h3
            className={`text-2xl font-medium ${
              scrolled ? "text-slate-950" : "text-white"
            }`}
          >
            FurniSphere
          </h3>
        </div>
      )}
    </div>
  );
};

export default Logo;
