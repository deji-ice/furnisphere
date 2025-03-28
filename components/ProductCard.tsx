import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="flex h-[375px] w-[365px] flex-col items-center justify-between rounded-3xl bg-[#F2F2F2] p-5 lg:h-[340px] lg:w-[300px] xl:h-[420px] xl:w-[410px]">
      <div className="flex w-full items-center justify-between">
        <span className="flex h-[47.3px] w-[113.7px] items-center justify-center rounded-4xl bg-white text-lg font-medium">
          Best Sale
        </span>
        <div className="relative h-[30px] w-fit bg-black">
          <div className="absolute right-[50px] z-10 h-5.5 w-5.5 rounded-full bg-[#1E1E1E]" />
          <div className="absolute right-[34px] z-20 h-5.5 w-5.5 rounded-full bg-[#585453]" />
          <div className="absolute right-[16px] z-30 h-5.5 w-5.5 rounded-full bg-[#CE9606]" />
          <div className="absolute right-0 z-40 h-5.5 w-5.5 rounded-full bg-[#c8c0bd]" />
        </div>
      </div>
      <Image
        alt="chair"
        src={`/assets/images/image.png`}
        height={300}
        width={300}
        className="lg:w-[420px]"
        loading="lazy"
      />
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="text-base font-normal">Infiniti Swivel Chair</p>
          <h6 className="text-xl font-medium text-[#1E1E1E]">$180.00</h6>
        </div>
        <Image
          src={"/assets/icons/Shopping bag-dark.svg"}
          height={50}
          width={50}
          alt="shopping bag icon"
          loading="lazy"
          className={`h-12 w-12 rounded-xl bg-white p-3`}
        />
      </div>
    </div>
  );
};

export default ProductCard;
