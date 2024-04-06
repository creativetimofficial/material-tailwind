import "./globals.css";
import "@docsearch/css";
import * as React from "react";
import { Docs } from "@components";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="h-screen w-screen bg-background">
        <Docs>{children}</Docs>
      </body>
    </html>
  );
}