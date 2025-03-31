"use client";
import type { Metadata } from "next";
import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { aeonikFont } from "./fonts";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "FurniSphere",
  description:
    "Discover exquisite furniture collections for your living room, bedroom, dining & office. Premium quality, sustainable designs with nationwide delivery and easy returns.",
  keywords: [
    "premium furniture",
    "home decor",
    "modern furniture",
    "sustainable furniture",
    "living room furniture",
    "bedroom sets",
    "dining tables",
    "office furniture",
    "interior design solutions",
    "furniture delivery",
    "affordable luxury furniture",
    "home makeover",
  ],
  authors: [{ name: "FurniSphere Design Team" }],
  icons: {
    icon: "/assets/icons/Logo.svg",
    shortcut: "/assets/icons/Logo.svg",
    apple: "/assets/icons/Logo.svg",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",

  openGraph: {
    title: "FurniSphere",
    description:
      "Explore our curated furniture collections designed for comfort, style and durability. Free shipping on orders over $500.",
    url: "https://www.furnisphere.com",
    siteName: "FurniSphere",
    images: [
      {
        url: "/assets/images/background.png",
        width: 1200,
        height: 630,
        alt: "FurniSphere Premium Furniture Collection",
      },
      {
        url: "/assets/images/LivingRoomFurnitures.png",
        width: 1200,
        height: 630,
        alt: "Modern Living Room Furniture Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FurniSphere",
    description:
      "Elevate your home with our designer furniture. Sustainable materials, timeless designs, exceptional comfort.",

    creator: "@FurniSphereDesign",
    images: ["/assets/images/twitter-card-image.png"],
  },

  category: "Furniture & Home Decor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${aeonikFont.variable} overflow-x-hidden bg-[#fafafa] antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

("use client");
function ClientLayout({ children }: { children: React.ReactNode }) {
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
