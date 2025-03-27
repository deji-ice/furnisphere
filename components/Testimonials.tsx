import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const reviewData = [
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "path/to/esther-avatar.jpg",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "path/to/chair-image.jpg",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
  ];
  return (
    <div className="my-16 space-y-6 px-3">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-5">
        <h2 className="text-center text-3xl font-medium lg:text-5xl">
          Word From Our Happy Customers
        </h2>
        <p className="w-[395px] px-2 text-center text-[15px] font-normal text-[#878787] md:w-full lg:max-w-[680px] lg:text-xl">
          Hear from our clients as they share how FurniSphere furniture
          transforms their homes
        </p>
      </div>
      <div>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
