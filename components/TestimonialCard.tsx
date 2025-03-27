import Image from "next/image";
import React from "react";

type TestimonialCardProps = {
  review: {
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
  };
};

const TestimonialCard = ({ review }: TestimonialCardProps) => {
  return (
    <div className="h-[510px] w-full max-w-[398px] min-w-[320px] rounded-3xl bg-[#FAFAFA] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            alt={review.user.name + "avatar"}
            width={50}
            height={50}
            src={review.user.avatar}
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
    </div>
  );
};

export default TestimonialCard;
