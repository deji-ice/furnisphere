import Image from "next/image";
import React from "react";

const Offers = () => {
  const offers = [
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
    <section className="my-14 px-3 space-y-6">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-5">
        <h2 className="text-3xl lg:text-5xl text-center font-medium">
          What We Can Offer You
        </h2>
        <p className="text-[15px] w-[395px] md:w-full px-2 text-center text-[#878787] lg:text-xl font-normal   lg:max-w-[650px] ">
          High-quality, stylish, and functional furniture designed to elevate
          your space with comfort and elegance.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:max-w[800px] max-w-[1300px] place-items-center mx-auto gap-5">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-[#F2F2F2] md:last:col-span-2 lg:last:col-span-1 border-[1.25px] border-[#EAEAEA] rounded-3xl flex flex-col justify-center items-center h-[335px] w-[368px] md:w-[348px]"
          >
            <Image height={72} width={72} src={offer.icon} alt="" />
            <h3 className="text-[40px] font-normal mt-5 text-[#1E1E1E]">
              {offer.title}
            </h3>
            <p className="text-[#5E5E5E] text-lg">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offers;
