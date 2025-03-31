"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex h-dvh w-full flex-col items-center justify-center md:px-8 xl:px-40">
      <Image
        src="/assets/images/background.png"
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="relative z-10 flex flex-col items-center gap-4 text-center text-[#FAFAFA] md:gap-6">
        <h2 className="text-3xl leading-10 font-medium capitalize md:text-4xl md:leading-12 lg:text-[70px] lg:leading-20">
          Find the perfect furniture to complete your home
        </h2>
        <p className="max-w-[340px] text-base font-normal md:max-w-[600px] md:text-xl lg:max-w-[650px]">
          We specialize in buying and selling high-quality, marketable
          furniture, each piece reflecting our unique aesthetic.
        </p>
        <button
          aria-label="Shop now for furniture"
          className="mt-8 h-14 w-44 cursor-pointer rounded-[50px] bg-[#FAFAFA] p-2.5 text-xl font-medium text-slate-950 lg:mt-5"
        >
          Shop Now
        </button>
      </div>
      <span className="absolute bottom-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-transparent hover:bg-white/10">
        <Image
          src="/assets/icons/Arrow Down.svg"
          height={50}
          width={50}
          alt="Arrow down icon"
          className="h-6 w-6"
        />
      </span>
    </section>
  );
};

export default HeroSection;
