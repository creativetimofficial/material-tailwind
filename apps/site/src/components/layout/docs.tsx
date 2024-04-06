"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { NavArrowRight } from "iconoir-react";
import { Navbar, Sidenav, Toc, Footer } from "@components";

export function Docs({ children }: { children: React.ReactNode }) {
  const contentRef = React.useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <div className="px-3 md:px-4">
        <div className="mx-auto max-w-7xl">
          <Sidenav />
          <div ref={contentRef} className="mt-[105px] px-4 lg:mx-60 lg:px-8">
            <div className="mb-8 mr-60 flex items-center gap-2 py-2 text-sm text-foreground">
              <span className="cursor-pointer transition-colors duration-300 hover:text-primary">
                Components
              </span>
              <NavArrowRight className="h-4 w-4" />
              <span className="cursor-pointer transition-colors duration-300 hover:text-primary">
                Inputs
              </span>
              <NavArrowRight className="h-4 w-4" />
              <span className="text-primary">Button</span>
            </div>
            {children}
            <Toc
              contentRef={contentRef as React.MutableRefObject<HTMLDivElement>}
            />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Docs;