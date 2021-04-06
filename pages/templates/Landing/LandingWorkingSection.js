import React from "react";

export default function LandingWorkingSection({ children }) {
  return (
    <section className="pb-20 bg-gray-50 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">{children}</div>
    </section>
  );
}
