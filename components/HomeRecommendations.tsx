"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const HomeRecommendations = () => {
  return (
    <section className="my-14 px-3">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-5">
        <h2 className="text-3xl lg:text-5xl text-center font-medium">
          Most Recommend Product For You
        </h2>
        <p className="text-base text-center text-[#878787] md:text-xl font-normal  md:max-w-[600px] lg:max-w-[650px] ">
          Discover top-recommended furniture tailored to your style and needs.
          Elevate your home with pieces designed for comfort and elegance.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grod-rows-3 my-8 gap-[25px] lg:gap-5 max-w-[1300px] place-items-center mx-auto *:rounded-3xl">
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[url('/assets/images/LivingRoomFurnitures.png')] bg-cover bg-center lg:row-span-2 flex flex-col justify-end h-[549.7px] lg:h-[884px] w-full p-5 lg:p-6 overflow-hidden"
        >
          <div className="flex flex-col gap-2.5 lg:gap-5 items-start">
            <p className="text-[23px] lg:text-[32px] font-medium  text-white">
              Living Room Furnitures
            </p>
            <button className="flex justify-center gap-2.5 items-center bg-white font-medium text-xl rounded-[50px] lg:h-[58px] h-14 w-[228px] p-2.5 cursor-pointer">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className=" inline-flex "
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[url('/assets/images/BedroomFurnitures.png')]  bg-cover  bg-center flex flex-col justify-end h-[432px] w-full p-5 lg:p-6 transition-all duration-700 hover:bg-[length:120%_120%] overflow-hidden"
        >
          <div className="flex flex-col gap-2.5 items-start">
            <p className="text-[23px] lg:text-[32px] font-medium text-white">
              Bedroom Furnitures
            </p>
            <button className="flex justify-center gap-2.5 items-center bg-white font-medium text-xl rounded-[50px] lg:h-[58px] h-14 w-[228px] p-2.5 cursor-pointer">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className=" inline-flex "
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[url('/assets/images/DinningFurnitures.png')] bg-cover bg-center flex flex-col justify-end h-[432px] w-full p-5 lg:p-6 transition-all duration-700 hover:bg-[length:120%_120%] overflow-hidden"
        >
          <div className="flex flex-col gap-2.5 items-start">
            <p className="text-[23px] lg:text-[32px] font-medium text-white">
              Dinning Furnitures
            </p>
            <button className="flex justify-center gap-2.5 items-center bg-white font-medium text-xl rounded-[50px] lg:h-[58px] h-14 w-[228px] p-2.5 cursor-pointer">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className=" inline-flex "
              />
            </button>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ backgroundSize: "105% 105%" }}
          initial={{ opacity: 0, backgroundSize: "100% 100%" }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[url('/assets/images/OfficeFurnitures.png')] bg-cover bg-center lg:col-span-2  flex flex-col justify-end h-[520px] w-full p-5 lg:p-6 transition-all duration-700 hover:bg-[length:120%_120%] overflow-hidden"
        >
          <div className="flex flex-col gap-2.5 items-start">
            <p className="text-[23px] lg:text-[32px] font-medium text-white">
              Office Furnitures
            </p>
            <button className="flex justify-center gap-2.5 items-center bg-white font-medium text-xl rounded-[50px] lg:h-[58px] h-14 w-[228px] p-2.5 cursor-pointer">
              View all products
              <Image
                height={24}
                width={24}
                src="/assets/icons/arrow-up-right.svg"
                alt="arrow up right icon"
                className=" inline-flex "
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeRecommendations;
