"use client";

import { createContext, useContext, useState, useEffect } from "react";
import gsap from "gsap";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

// Add useLoading hook
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading)

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      if (!isLoading) {
        gsap.to(mainContent, {
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
        });
      } else {
        mainContent.style.opacity = "0";
      }
    }
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
