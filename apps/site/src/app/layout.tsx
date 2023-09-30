import "./globals.css";
import React from "react";
import { Docs } from "@components";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="h-screen w-screen">
        <Docs>{children}</Docs>
      </body>
    </html>
  );
}
