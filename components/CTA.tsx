import React from "react";

const CTA = () => {
  return (
    <section className="mx-auto my-16 flex h-[520px] w-full max-w-[370px] flex-col items-center justify-center gap-7.5 rounded-3xl bg-red-500 bg-[url('/assets/images/parlor-mobile.png')] bg-cover bg-center bg-no-repeat bg-origin-border p-2.5 text-center text-[rgba(250,250,250,1)] md:min-w-[650px] md:gap-10 md:bg-[url('/assets/images/Parlor.png')] md:px-10 lg:min-w-[950px] lg:px-10 xl:px-20 xl:w-full xl:max-w-[1300px] xl:min-w-7xl xl:bg-[url('/assets/images/Parlor.png')] ">
      <h3 className="w-full text-[28px] font-medium capitalize lg:text-5xl xl:text-[58px] xl:leading-[140%]">
        Build your home with a comfortable room by using our interior
      </h3>
      <p className="text-base lg:text-xl xl:mx-44">
        Looking for quality design furniture? then your choice is right have
        visited our website. We have furniture with reverse quality ready to be
        sent to you
      </p>
      <button className="px-auto h-[58px] w-[200px] rounded-[50px] bg-[rgba(250,250,250,1)] text-xl font-medium text-[rgba(30,30,30,1)] lg:text-2xl">
        Shop Now
      </button>
    </section>
  );
};

export default CTA;
