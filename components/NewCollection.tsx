import React from "react";
import ProductCard from "./ProductCard";

const NewCollection = () => {
  return (
    <section className="h-full flex flex-col  items-center my-10 px-3  ">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl lg:text-5xl font-medium">Our New Collections</h2>
        <p className="text-base text-center text-[#878787] md:text-xl font-normal  md:max-w-[600px] lg:max-w-[650px] ">
          These products are crafted using wood sourced from responsibly
          certified forests
        </p>
      </div>
      <div className=" mt-8 grid grid-cols-1 place-items-center mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1300px]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className="bg-white mt-10  lg:mt-12 font-medium text-lg w-60 h-14 rounded-[50px] border border-[#1E1E1E]">
        See More Collections
      </button>
    </section>
  );
};

export default NewCollection;
