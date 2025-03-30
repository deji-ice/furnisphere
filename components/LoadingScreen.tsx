"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    let timeline: gsap.core.Timeline;

    const animate = () => {
      timeline = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "visible";
          }, 300);
        },
      });

      // Initial setup
      gsap.set(logoRef.current, { x: -100, rotation: -180, opacity: 0 });
      gsap.set(textRef.current, { x: 100, opacity: 0 });
      gsap.set(progressRef.current, { opacity: 0 });
      gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left" });

      // Animation sequence
      timeline
        .to(containerRef.current, { opacity: 1, duration: 0.3 })
        .to(logoRef.current, {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        })
        .to(
          textRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .to(progressRef.current, {
          opacity: 1,
          duration: 0.3,
        })
        .to(progressBarRef.current, {
          scaleX: 1,
          duration: 1.5,
          ease: "power1.inOut",
        });
    };

    animate();

    // Cleanup function
    return () => {
      if (timeline) {
        timeline.kill();
      }
      document.body.style.overflow = "visible";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#FAFAFA]"
      style={{ opacity: 0 }}
    >
      <div className="flex items-center gap-3">
        <div ref={logoRef} className="relative h-12 w-12">
          <Image
            src="/assets/icons/Logo.svg"
            alt="FurniSphere Logo"
            fill
            className="object-contain filter-[brightness(0)]"
          />
        </div>

        <h1 ref={textRef} className="text-2xl font-medium text-slate-900">
          FurniSphere
        </h1>
      </div>

      {/* Progress Bar */}
      <div
        ref={progressRef}
        className="absolute bottom-20 h-0.5 w-48 overflow-hidden rounded-full bg-gray-200"
      >
        <div ref={progressBarRef} className="h-full w-full bg-slate-900" />
      </div>
    </div>
  );
};

export default LoadingScreen;
