import Image from "next/image";
import React from "react";
import { ReviewData } from "@/types/index";

type TestimonialCardProps = {
  review: ReviewData;
};

const TestimonialCard = ({ review }: TestimonialCardProps) => {
  return (
    <div className="md:w-max-[300px] flex h-fit w-full max-w-[398px] min-w-[320px] flex-col justify-between gap-4 rounded-3xl bg-[#ffffff] p-6 shadow-xs lg:max-w-[420px] xl:max-w-[415px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            alt={review.user.name + "avatar"}
            width={50}
            height={50}
            src={review.user.avatar}
            loading="lazy"
          />
          <div>
            <p className="font-medium text-black">{review.user.name}</p>
            <p className="text-[#878787]">
              {review.user.jobTitle}, {review.user.company}
            </p>
          </div>
        </div>
        <span className="flex items-center gap-3">
          <img src="/assets/icons/Star 2.svg" alt="" />
          <p className="text-lg text-[#F0A111]"> {review.rating}</p>
        </span>
      </div>
      <div className="mt-6 flex h-[200px] w-full items-center justify-center rounded-3xl bg-[#F2F2F2]">
        <Image
          src={review.product.image}
          alt={review.product.name}
          height={200}
          width={200}
          className="w-full rounded-3xl object-contain"
        />
      </div>
      <div className="mt-4 flex flex-col items-start justify-between gap-2.5 text-lg">
        <p className="font-medium text-black">{review.review.title}</p>
        <p className="text-[#878787]">{review.review.description}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
