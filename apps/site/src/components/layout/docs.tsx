"use client";

import React from "react";
import { Navbar, Sidenav, Footer } from "@components";

export function Docs({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="px-3 md:px-4">
        <div className="mx-auto flex w-full max-w-7xl gap-0 lg:gap-8">
          <Sidenav />
          <div className="ml-[280px]">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Docs;
