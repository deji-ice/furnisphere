"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const HomeRecommendations = () => {
  return (
    <section className="my-14 px-3">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-5">
        <h2 className="text-center text-3xl font-medium lg:text-5xl">
          Most Recommend Product For You
        </h2>
        <p className="text-center text-base font-normal text-[#878787] md:max-w-[600px] md:text-xl lg:max-w-[650px]">
          Discover top-recommended furniture tailored to your style and needs.
          Elevate your home with pieces designed for comfort and elegance.
        </p>
      </div>
      <div className="lg:grod-rows-3 *:rounded-3xl mx-auto my-8 grid max-w-[1300px] grid-cols-1 place-items-center gap-[25px] lg:grid-cols-2 lg:gap-5">
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-[549.7px] w-full flex-col justify-end overflow-hidden bg-[url('/assets/images/LivingRoomFurnitures.png')] bg-cover bg-center p-5 lg:row-span-2 lg:h-[884px] lg:p-6"
        >
          <div className="flex flex-col items-start gap-2.5 lg:gap-5">
            <p className="text-[23px] font-medium text-white lg:text-[32px]">
              Living Room Furnitures
            </p>
            <button className="flex h-14 w-[228px] cursor-pointer items-center justify-center gap-2.5 rounded-[50px] bg-white p-2.5 text-xl font-medium lg:h-[58px]">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className="inline-flex"
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-[432px] w-full flex-col justify-end overflow-hidden bg-[url('/assets/images/BedroomFurnitures.png')] bg-cover bg-center p-5 transition-all duration-700 hover:bg-[length:120%_120%] lg:p-6"
        >
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-[23px] font-medium text-white lg:text-[32px]">
              Bedroom Furnitures
            </p>
            <button className="flex h-14 w-[228px] cursor-pointer items-center justify-center gap-2.5 rounded-[50px] bg-white p-2.5 text-xl font-medium lg:h-[58px]">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className="inline-flex"
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-[432px] w-full flex-col justify-end overflow-hidden bg-[url('/assets/images/DinningFurnitures.png')] bg-cover bg-center p-5 transition-all duration-700 hover:bg-[length:120%_120%] lg:p-6"
        >
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-[23px] font-medium text-white lg:text-[32px]">
              Dinning Furnitures
            </p>
            <button className="flex h-14 w-[228px] cursor-pointer items-center justify-center gap-2.5 rounded-[50px] bg-white p-2.5 text-xl font-medium lg:h-[58px]">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className="inline-flex"
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-[520px] w-full flex-col justify-end overflow-hidden bg-[url('/assets/images/OfficeFurnitures.png')] bg-cover bg-center p-5 transition-all duration-700 hover:bg-[length:120%_120%] lg:col-span-2 lg:p-6"
        >
          <div className="flex flex-col items-start gap-2.5">
            <p className="text-[23px] font-medium text-white lg:text-[32px]">
              Office Furnitures
            </p>
            <button className="flex h-14 w-[228px] cursor-pointer items-center justify-center gap-2.5 rounded-[50px] bg-white p-2.5 text-xl font-medium lg:h-[58px]">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className="inline-flex"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeRecommendations;
