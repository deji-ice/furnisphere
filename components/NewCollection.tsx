import React from "react";
import ProductCard from "./ProductCard";
import data from "@/lib/data.json";
import { NewCollection as NewCollections } from "@/types/index";

const NewCollection = () => {
  const newCollection: NewCollections[] = data.newCollections;

  return (
    <section className="my-10 flex h-full flex-col items-center px-3">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl font-medium lg:text-5xl">
          Our New Collections
        </h2>
        <p className="text-center text-base font-normal text-[#878787] md:max-w-[600px] md:text-xl lg:max-w-[650px]">
          These products are crafted using wood sourced from responsibly
          certified forests
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-[1300px] grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {newCollection.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button  className="mt-10 h-14 w-60 hover:cursor-not-allowed rounded-[50px] border border-[#1E1E1E] bg-white text-lg font-medium lg:mt-12">
        See More Collections
      </button>
    </section>
  );
};

export default NewCollection;
