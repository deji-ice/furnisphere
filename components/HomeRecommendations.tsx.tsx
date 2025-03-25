import React from "react";

const HomeRecommendations = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-3xl text-center font-medium">Most Recommend Product For You</h2>
        <p className="text-base text-center text-[#878787] md:text-xl font-normal  md:max-w-[600px] lg:max-w-[650px] ">
          Discover top-recommended furniture tailored to your style and needs.
          Elevate your home with pieces designed for comfort and elegance.
        </p>
      </div>
    </div>
  );
};

export default HomeRecommendations;
