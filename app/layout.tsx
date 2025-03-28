import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { aeonikFont } from "./fonts";
import SmoothScrolling from "@/components/SmoothScrolling";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const dmSans = DM_Sans({
//   variable: "--font-dm-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "FurniSphere",
  description: "A furniture e-commerce platform",
  icons: {
    icon: "/assets/icons/Logo.svg",
    shortcut: "/assets/icons/Logo.svg",
    apple: "/assets/icons/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aeonikFont.variable} antialiased bg-[#fafafa]`}>
        <Navbar />
        {/* <SmoothScrolling>{children}</SmoothScrolling> */}
        {children}
      </body>
    </html>
  );
}
