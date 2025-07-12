import "./globals.css";
import { aeonikFont } from "./fonts";
import { metadata } from "./metadata";
import ClientLayout from "@/components/ClientLayout";

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/images/background.png"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${aeonikFont.variable} overflow-x-hidden bg-[#fafafa] antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
