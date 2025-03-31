"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <SmoothScrolling>{children}</SmoothScrolling>
      <Footer />
    </main>
  );
}
