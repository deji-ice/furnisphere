import Image from "next/image";
import React from "react";

type LogoProps = {
  isOpen: boolean;
};
const Logo = ({ isOpen }: LogoProps) => {
  return (
    <div className={`flex items-center relative z-42 gap-2.5`}>
      {isOpen ? (
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/icons/Logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-10 [filter:brightness(0.12)_saturate(0%)]"
          />
          <h3 className="font-medium text-2xl  text-black">FurniSphere</h3>
        </div>
      ) : (
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/icons/Logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-10 w-10"
          />
          <h3 className="font-medium text-2xl text-white">FurniSphere</h3>
        </div>
      )}
    </div>
  );
};

export default Logo;
