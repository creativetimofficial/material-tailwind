"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { Navbar, Sidenav, Footer } from "@components";

export function Docs({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Navbar />
      <div className="px-3 md:px-4">
        <div className="mx-auto flex w-full max-w-7xl gap-0 lg:gap-8">
          <Sidenav />
          {children}
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Docs;
