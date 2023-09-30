"use client";
import React from "react";
import { NavArrowRight } from "iconoir-react";
import { Navbar, Sidenav, Toc, Footer } from "@components";

export function Docs({ children }: { children: React.ReactNode }) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar />
      <div className="px-3 md:px-4">
        <div className="mx-auto max-w-7xl">
          <Sidenav />
          <div ref={contentRef} className="mx-60 mt-[105px] px-8">
            <div className="mb-8 mr-60 flex items-center gap-2 py-2 text-sm text-gray-500">
              <span className="cursor-pointer transition-colors duration-300 hover:text-gray-950">
                Components
              </span>
              <NavArrowRight className="h-4 w-4" />
              <span className="cursor-pointer transition-colors duration-300 hover:text-gray-950">
                Inputs
              </span>
              <NavArrowRight className="h-4 w-4" />
              <span className="text-gray-950">Button</span>
            </div>
            {children}
            <Toc
              contentRef={contentRef as React.MutableRefObject<HTMLDivElement>}
            />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}

export default Docs;
