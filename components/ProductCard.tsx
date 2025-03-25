import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-between items-center h-[375px] w-[365px] bg-[#F2F2F2] rounded-3xl p-5">
      <div className="flex justify-between items-center w-full">
        <span className="w-[113.7px] h-[47.3px] bg-white rounded-4xl flex items-center justify-center font-medium text-lg">
          Best Sale
        </span>
        <div className="relative bg-black w-fit h-[30px]">
          <div className="absolute right-[50px] z-10 h-5.5 w-5.5 rounded-full bg-[#1E1E1E]" />
          <div className="absolute  right-[34px] z-20 h-5.5 w-5.5 rounded-full bg-[#585453]" />
          <div className="absolute  right-[16px] z-30 h-5.5 w-5.5 rounded-full bg-[#CE9606]" />
          <div className="absolute  right-0 z-40 h-5.5 w-5.5 rounded-full bg-[#c8c0bd]" />
        </div>
      </div>
      <Image
        alt="chair"
        src={`/assets/images/image.png`}
        height={300}
        width={300}
        className=""
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="text-base font-normal">Infiniti Swivel Chair</p>
          <h6 className="text-xl font-medium text-[#1E1E1E]">$180.00</h6>
        </div>
        <Image
          src={"/assets/icons/Shopping bag-dark.svg"}
          height={50}
          width={50}
          alt="shopping bag icon"
          className={`h-12 w-12 bg-white  rounded-xl p-3`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
