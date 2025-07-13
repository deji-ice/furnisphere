import Image from "next/image";
import React from "react";
import {NewCollection} from "@/types/index"

interface ProductCardProps {
  product: NewCollection;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex h-[375px] w-[365px] flex-col items-center justify-between rounded-3xl bg-[#F2F2F2] p-5 lg:h-[340px] lg:w-[300px] xl:h-[420px] xl:w-[410px]">
      <div className="flex w-full items-center justify-between">
        <span className="flex h-[47.3px] w-[113.7px] items-center justify-center rounded-4xl bg-white text-lg font-medium">
          {product.category}
        </span>
        <div className="relative h-[30px] w-fit">
          {product.colors.map((color, index) => {
            const positions = [50, 34, 16, 0];
            return (
              <div
                key={index}
                className="absolute h-5.5 w-5.5 rounded-full"
                style={{
                  right: `${positions[index]}px`,
                  backgroundColor: color,
                  zIndex: (index + 1) * 1,
                }}
              />
            );
          })}
        </div>
      </div>
      <Image
        alt={product.title}
        src={product.image}
        height={300}
        width={300}
        className="lg:w-[420px]"
        loading="lazy"
      />
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="text-base font-normal">{product.title}</p>
          <h6 className="text-xl font-medium text-[#1E1E1E]">
            ${product.price.toFixed(2)}
          </h6>
        </div>
        <Image
          src={"/assets/icons/Shopping bag-dark.svg"}
          height={50}
          width={50}
          alt="shopping bag icon"
          loading="lazy"
          className="h-12 w-12 rounded-xl cursor-pointer bg-white p-3"
        />
      </div>
    </div>
  );
};

export default ProductCard;
