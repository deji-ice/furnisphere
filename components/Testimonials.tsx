"use client";
import { Lenis, ReactLenis } from "lenis/react";
import React, { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

type ReviewData = {
  user: {
    name: string;
    jobTitle: string;
    company: string;
    avatar: string;
  };
  rating: number;
  product: {
    name: string;
    image: string;
  };
  review: {
    title: string;
    description: string;
  };
}[];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lenisRef = useRef<any>(null);

  const reviewData: ReviewData = [
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "/assets/images/Ellipse 109jenny.png",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "/assets/images/image 260.png",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "/assets/images/Ellipse 109jenny.png",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "/assets/images/image 260.png",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "/assets/images/Ellipse 109jenny.png",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "/assets/images/image 260.png",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "/assets/images/Ellipse 109jenny.png",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "/assets/images/image 260.png",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "/assets/images/Ellipse 109jenny.png",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "/assets/images/image 260.png",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
    {
      user: {
        name: "Esther Howard",
        jobTitle: "CEO",
        company: "Wells Fargo",
        avatar: "/assets/images/Ellipse 109jenny.png",
      },
      rating: 4.5,
      product: {
        name: "Dining Set",
        image: "/assets/images/image 260.png",
      },
      review: {
        title: "Stylish and durable furniture",
        description:
          "I bought a dining set, and it looks even better in person. Highly recommend!",
      },
    },
  ];

  const handleContainerScroll = (e: React.UIEvent<HTMLDivElement>) => {
    // 1. Get the current scroll position from the event's target element
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    console.log("scrollLeft:", scrollLeft);

    // 2. Calculate the effective width of each card (including gap)
    const cardWidth = 345 + 16; // card width + gap

    // 3. Calculate which card is most visible by dividing scroll position by card width
    const newIndex = Math.round(scrollLeft / cardWidth);

    // 4. Ensure the calculated index stays within valid bounds
    const boundedIndex = Math.max(0, Math.min(newIndex, reviewData.length - 1));
    console.log("boundedIndex", boundedIndex);
    // 5. Update the active index state to reflect the current card
    setActiveIndex(boundedIndex);
  };

  return (
    <section className="my-16 space-y-6 px-3">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:gap-5">
        <h2 className="text-center text-3xl font-medium lg:text-5xl">
          Word From Our Happy Customers
        </h2>
        <p className="w-[395px] px-2 text-center text-[15px] font-normal text-[#878787] lg:w-[400px] lg:max-w-[550px] lg:text-xl xl:w-full">
          Hear from our clients as they share how FurniSphere furniture
          transforms their homes
        </p>
      </div>
      {/* Mobile Carousel with Lenis for smooth horizontal scrolling */}
      <ReactLenis
        ref={lenisRef}
        className="md:hidden"
        options={{
          orientation: "horizontal",
          smoothWheel: true,
          lerp: 0.1,
          duration: 1.5,
          gestureOrientation: "horizontal",
        }}
      >
        <div
          className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
          onScroll={handleContainerScroll}
        >
          {reviewData.map((review, index) => (
            <div
              key={index}
              className="w-[345px] flex-none snap-center"
              onPointerDown={() => setActiveIndex(index)}
            >
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2 lg:hidden">
          {reviewData.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-colors duration-200 ${
                index === activeIndex ? "w-3 bg-black" : "w-2 bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </ReactLenis>

      {/* Desktop Grid Layout */}
      <div className="hidden md:mx-auto md:grid md:grid-cols-2 lg:mt-8 lg:max-w-[1300px] lg:grid-cols-3 lg:gap-4 xl:gap-y-10">
        {reviewData.map((review, index) => (
          <TestimonialCard key={index} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
