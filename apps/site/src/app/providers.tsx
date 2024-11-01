"use client";

import * as React from "react";

// @components
import { ThemeProvider } from "next-themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
      <ProgressBar
        height="3px"
        color="#f97315"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ThemeProvider>
  );
}
