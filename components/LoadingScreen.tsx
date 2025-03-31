"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const LoadingScreen = () => {
 
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);


  const initialLogoStyle = {
    transform: "translateX(-100vw) rotate(-180deg)",
    opacity: 0,
  };

  const initialTextStyle = {
    transform: "translateX(100vw)",
    opacity: 0,
  };

  const initialProgressStyle = {
    opacity: 0,
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Single timeline for better performance
    const timeline = gsap.timeline({
      paused: true,
      onComplete: () => {
        document.body.style.overflow = "visible";
      },
    });

    // Combined animations for better performance
    timeline
      .to(logoRef.current, {
        x: 0,
        rotation: 360,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      })
      .to(
        textRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        [progressRef.current, progressBarRef.current],
        {
          opacity: 1,
          scaleX: 1,
          duration: 1,
          ease: "none",
          stagger: 0.1,
        },
        0
      );

    // Play timeline immediately
    timeline.play();

    return () => {
      timeline.kill();
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#FAFAFA]"
    >
      <div className="flex items-center gap-3">
        <div
          ref={logoRef}
          className="relative h-12 w-12"
          style={initialLogoStyle}
        >
          <Image
            src="/assets/icons/Logo.svg"
            alt="FurniSphere Logo"
            fill
            priority
            loading="eager"
            className="object-contain filter-[brightness(0)]"
          />
        </div>

        <h1
          ref={textRef}
          className="text-2xl font-medium text-slate-900"
          style={initialTextStyle}
        >
          FurniSphere
        </h1>
      </div>

      <div
        ref={progressRef}
        className="absolute bottom-20 h-0.5 w-48 overflow-hidden rounded-full bg-gray-200"
        style={initialProgressStyle}
      >
        <div
          ref={progressBarRef}
          className="h-full w-full bg-slate-900"
          style={{ transform: "scaleX(0)", transformOrigin: "left" }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
