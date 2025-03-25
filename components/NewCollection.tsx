import React from "react";
import ProductCard from "./ProductCard";

const NewCollection = () => {
  return (
    <div className="h-full flex flex-col  items-center mt-10 px-3  ">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-medium">Our New Collections</h2>
        <p className="text-base text-center text-[#878787] md:text-xl font-normal  md:max-w-[600px] lg:max-w-[650px] ">
          These products are crafted using wood sourced from responsibly
          certified forests
        </p>
      </div>
      <div className=" mt-8 grid grid-cols-1 place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default NewCollection;
