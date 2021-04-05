import React from "react";

export default function LandingHeader({ children }) {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      {children}
    </div>
  );
}
