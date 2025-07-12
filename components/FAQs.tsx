"use client";
import React, { useState } from "react";
import FaqCard from "./FaqCard";
import Image from "next/image";

export type FAQ = {
  question: string;
  answer: string;
}[];

export const faqData: FAQ = [
  {
    question: "What is your return and exchange policy?",
    answer:
      "We offer a hassle-free return and exchange policy within 14 days of delivery. The item must be in its original condition and packaging.",
  },
  {
    question: "Do you offer furniture assembly services?",
    answer:
      "Yes, we provide assembly services for an additional fee. You can select this option during checkout.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Please check our shipping policy for more details.",
  },

  {
    question: "Do you offer customization options for furniture?",
    answer:
      " Yes, we offer customization options for certain furniture pieces. Please contact our customer service for more information.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to monitor your shipment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including  paystack, credit/debit cards, and bank transfers.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="my-16 flex flex-col items-center space-y-6 px-3 xl:px-10">
      <div className="flex flex-col items-center justify-center gap-2.5 lg:w-[620px] lg:gap-5">
        <h2 className="text-center text-3xl font-medium lg:text-5xl">
          You’ve Got Questions & We’ve Got Answers!
        </h2>
        <p className="mt-1 w-full max-w-[395px] px-2 text-center text-[15px] font-normal text-[#878787] lg:w-[400px] lg:max-w-[400px] lg:text-xl">
          Still have a questions in mind?
        </p>
        <button className="flex h-[58px] w-[170px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1E1E1E] px-4 text-white transition duration-300 ease-in-out hover:bg-[#333333] lg:w-[200px] lg:text-lg">
          Contact Us{" "}
          <Image
            src="/assets/icons/arrow-up-right.svg"
            alt=""
            className="h-5"
            width={20}
            height={20}
             loading="lazy"
            style={{ filter: "invert(1)" }}
          />
        </button>
      </div>
      <div className="mt-5 grid grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 lg:gap-8">
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            isOpen={index === activeIndex}
            faq={faq}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
