"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";


type FaqCardProps = {
  isOpen: boolean;
  faq: {
    question: string;
    answer: string;
  };
  onClick: () => void;
};

const FaqCard = ({ isOpen, faq, onClick }: FaqCardProps) => {
  console.log(isOpen);
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center gap-3.5 self-start rounded-[20px] border border-[rgba(220,220,220,1)] p-5.5 lg:gap-5 lg:p-8"
    >
      <div className="flex w-full max-w-[315px] items-baseline justify-between md:min-w-[640px] lg:w-full lg:min-w-[400px] xl:w-full xl:min-w-[590px]">
        <p className="w-[290px] text-lg font-medium text-[#181818] md:w-full md:text-xl">
          {faq.question}
        </p>
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0, opacity: isOpen ? 1 : 0.7 }}
          transition={{ duration: 0.2 }}
          src="/assets/icons/line.svg"
          width={18}
          height={10}
          className={`h-2.5 w-4.5 transition-transform`}
          alt="Expand/collapse"
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center overflow-hidden`}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.p
              key="answer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.06 }}
              className="w-full max-w-[315px] text-sm text-[rgba(102,102,102,1)] md:w-full md:min-w-[640px] md:text-base lg:w-full lg:min-w-[400px] xl:w-full xl:max-w-[580px]"
            >
              {faq.answer}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqCard;
