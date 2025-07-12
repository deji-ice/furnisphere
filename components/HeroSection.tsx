"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="relative flex h-dvh w-full flex-col items-center justify-center md:px-8 xl:px-40">
      <Image
        src="/assets/images/background.png"
        alt="Hero background"
        fill
        priority
        fetchPriority={"high"}
        quality={85} // Add quality control
        placeholder="blur" // Add blur placeholder
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..." 
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="relative z-10 flex flex-col items-center gap-4 text-center text-[#FAFAFA] md:gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-3xl leading-10 font-medium capitalize md:text-4xl md:leading-12 lg:text-[70px] lg:leading-20"
        >
          Find the perfect furniture to complete your home
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="max-w-[340px] text-base font-normal md:max-w-[600px] md:text-xl lg:max-w-[650px]"
        >
          We specialize in buying and selling high-quality, marketable
          furniture, each piece reflecting our unique aesthetic.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.6,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#f8f8f8",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.98 }}
          aria-label="Shop now for furniture"
          className="mt-8 h-14 w-44 cursor-pointer rounded-[50px] bg-[#FAFAFA] p-2.5 text-xl font-medium text-slate-950 lg:mt-5"
        >
          Shop Now
        </motion.button>
      </div>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white bg-transparent hover:bg-white/10"
      >
        <Image
          src="/assets/icons/Arrow Down.svg"
          height={50}
          width={50}
          alt="Arrow down icon"
          className="h-6 w-6"
        />
      </motion.span>
    </section>
  );
};

export default HeroSection;
