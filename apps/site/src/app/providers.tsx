"use client";

import * as React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#6028ff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
