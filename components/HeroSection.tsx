import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url('/assets/images/background.png')] relative bg-cover bg-center md:px-8 lg:px-60 w-full h-dvh flex flex-col items-center justify-center">
      <div className="text-center text-[#FAFAFA] flex flex-col items-center gap-4 md:gap-6">
        <h2 className="text-3xl md:text-4xl lg:text-[70px] leading-10 md:leading-12 lg:leading-20 capitalize font-medium ">
          Find the perfect furniture to complete your home
        </h2>
        <p className="text-base md:text-xl font-normal max-w-[340px] md:max-w-[600px] lg:max-w-[650px] ">
          We specialize in buying and selling high-quality, marketable
          furniture, each piece reflecting our unique aesthetic.
        </p>
        <button className="bg-[#FAFAFA] h-14 w-44 p-2.5 rounded-[50px] text-slate-950 text-xl font-medium mt-8 lg:mt-5">
          Shop Now
        </button>
      </div>
      <span className=" absolute bottom-8 flex items-center justify-center mt-10 border border-white rounded-full w-12 h-12 bg-transparent hover:bg-white/10  transition duration-300 ease-in-out animate-bounce motion-reduce:animate-none">
        <Image
          src={"/assets/icons/Arrow Down.svg"}
          height={50}
          width={50}
          alt="arrow right icon"
          className="h-6 w-6"
        />
      </span>
    </div>
  );
};

export default HeroSection;
