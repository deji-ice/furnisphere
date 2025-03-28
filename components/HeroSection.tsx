import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-dvh relative flex w-full flex-col items-center justify-center bg-[url('/assets/images/background.png')] bg-cover bg-center md:px-8 xl:px-40">
      <div className="flex flex-col items-center gap-4 text-center text-[#FAFAFA] md:gap-6">
        <h2 className="md:leading-12 lg:leading-20 text-3xl font-medium capitalize leading-10 md:text-4xl lg:text-[70px]">
          Find the perfect furniture to complete your home
        </h2>
        <p className="max-w-[340px] text-base font-normal md:max-w-[600px] md:text-xl lg:max-w-[650px]">
          We specialize in buying and selling high-quality, marketable
          furniture, each piece reflecting our unique aesthetic.
        </p>
        <button className="mt-8 h-14 w-44 rounded-[50px] bg-[#FAFAFA] p-2.5 text-xl font-medium text-slate-950 lg:mt-5">
          Shop Now
        </button>
      </div>
      <span className="absolute bottom-8 mt-10 flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white bg-transparent transition duration-300 ease-in-out hover:bg-white/10 motion-reduce:animate-none">
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
