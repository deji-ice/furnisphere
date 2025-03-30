import React from "react";
import Logo from "./Logo";

const Footer = () => {
  const socialMedia = [
    { name: "Twitter", icon: "/assets/icons/X.svg" },
    { name: "Facebook", icon: "/assets/icons/Facebook.svg" },
    { name: "Instagram", icon: "/assets/icons/Instagram.svg" },
    { name: "LinkedIn", icon: "/assets/icons/LinkedIn.svg" },
  ];

  return (
    <footer className="flex w-full flex-col gap-8 xl:gap-5 bg-[rgba(30,30,30,1)] p-3 py-5 md:p-5 lg:p-8 xl:space-y-16 xl:p-12">
      <div className="*flex-wrap flex flex-col items-start gap-3 md:flex-row lg:justify-between">
        <div className="flex flex-col items-start gap-5 md:flex-1 lg:w-full lg:max-w-[400px] xl:max-w-[600px] xl:gap-8">
          <Logo zIndex={5} />
          <p className="text-[rgba(255,255,255,0.4)] md:text-base xl:text-xl">
            We specialize in buying and selling high-quality, marketable
            furniture, each piece reflecting our unique aesthetic.
          </p>
          <form className="flex flex-col items-start gap-4">
            <label
              htmlFor="newletter"
              className="text-xl font-medium text-white"
            >
              Subscribe to newsletter
            </label>
            <span className="flex h-[58px] w-full items-center rounded-[40px] border border-[rgba(255,255,255,0.4)] bg-[rgba(40,40,40,1)] p-1 pl-5 md:max-w-[300px] lg:max-w-[499px] xl:min-w-[500px]">
              <img
                src="/assets/icons/message.svg"
                className="h-6 w-6"
                alt="message"
              />
              <input
                type="email"
                id="newsletter"
                className="h-full w-full px-2 text-white outline-none placeholder:font-normal placeholder:text-[rgba(194,194,194,1)] xl:placeholder:text-base"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="W-full h-fit rounded-[50px] bg-[rgba(255,255,255,1)] px-3.5 py-2.5 text-lg font-medium text-black md:text-base lg:text-xl"
              >
                Subscribe
              </button>
            </span>
          </form>
        </div>
        <div className="grid-cols-3 md:grid md:flex-1 lg:justify-items-end">
          <div className="flex flex-col items-start gap-2 py-3 text-lg text-[rgba(255,255,255,0.4)] md:text-base lg:text-lg">
            <h6 className="mb-2 text-xl font-bold text-white md:text-lg lg:text-xl">
              Quick Menu
            </h6>
            <p>Home</p>
            <p>About us</p>
            <p>Products</p>
            <p>Collection</p>
            <p>Contact us</p>
          </div>
          <div className="flex flex-col items-start gap-2 py-3 text-lg text-[rgba(255,255,255,0.4)] md:text-base lg:text-lg">
            <h6 className="mb-2 text-xl font-bold text-white md:text-lg lg:text-xl">
              Legal
            </h6>
            <p>Privacy policy</p>
            <p>Term and condition</p>
            <p>Cookies policy</p>
          </div>
          <div className="flex flex-col items-start gap-2 py-3 text-lg text-[rgba(255,255,255,0.4)] md:text-base not-last:lg:text-lg">
            <h6 className="mb-2 text-xl font-bold text-white md:text-lg lg:text-xl">
              Resources
            </h6>
            <p>Documentaion</p>
            <p>Blog</p>
            <p>Papers</p>
          </div>
        </div>
      </div>
      <div className="w-full border border-[rgba(255,255,255,0.08)]" />
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
        <span className="text-xl text-[rgba(255,255,255,0.4)] md:flex-1">
          © 2025 Copyright by FurniSphere
        </span>
        <div className="mt-4 flex flex-wrap gap-3 md:mt-0 md:flex-1">
          {socialMedia.map((social) => (
            <span
              key={social.name}
              className="flex h-[56px] w-fit cursor-pointer items-center justify-center gap-2 rounded-[60px] border border-[rgba(159,158,158,0.3)] bg-[rgba(40,40,40,1)] p-4 text-lg text-white transition-colors hover:bg-[rgba(60,60,60,1)]"
            >
              <img
                src={social.icon}
                alt={`${social.name} icon`}
                className="h-6 w-6"
              />
              {social.name}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
