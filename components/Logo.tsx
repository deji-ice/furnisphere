import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className={`flex items-center gap-2.5`}>
      <div>
        <Image
          src="/assets/icons/Logo.svg"
          alt="Logo"
          width={100}
          height={100}
          className=" h-10 w-10"
        />
      </div>

      <h3 className="font-medium text-2xl">FurniSphere</h3>
    </div>
  );
};

export default Logo;
