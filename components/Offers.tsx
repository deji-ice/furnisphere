import Image from "next/image";
import React from "react";

type OffersType = {
  icon: string;
  title: string;
  description: string;
}[];
const Offers = () => {
  const offers: OffersType = [
    {
      icon: "/assets/icons/package.svg",
      title: "Made Your Order",
      description: "All pieces made to order for you",
    },
    {
      icon: "/assets/icons/truck-delivery.svg",
      title: "Free Delivery",
      description: "Free delivery for order world-wide",
    },
    {
      icon: "/assets/icons/exchange-01.svg",
      title: "Free Exchange",
      description: "Free exchange on all products",
    },
  ];
  return (
    <section className="my-16 space-y-6 px-3 xl:space-y-14">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-5">
        <h2 className="text-center text-3xl font-medium lg:text-5xl">
          What We Can Offer You
        </h2>
        <p className="w-full max-w-[395px] px-2 text-center text-[15px] font-normal text-[#878787] md:w-full lg:max-w-[680px] lg:text-xl">
          High-quality, stylish, and functional furniture designed to elevate
          your space with comfort and elegance.
        </p>
      </div>
      <div className="md:max-w[800px] mx-auto grid max-w-[1300px] grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex h-[335px] w-full max-w-[368px] flex-col items-center justify-center rounded-3xl border-[1.25px] border-[#EAEAEA] bg-[#F2F2F2] text-center md:w-[348px] md:last:col-span-2 lg:w-[300px] lg:last:col-span-1 xl:w-[420px]"
          >
            <Image height={72} width={72} src={offer.icon} loading="lazy" alt="" />
            <h3 className="mt-5 text-[40px] font-normal text-[#1E1E1E] lg:text-4xl">
              {offer.title}
            </h3>
            <p className="text-lg text-[#5E5E5E] lg:mt-3">
              {offer.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
