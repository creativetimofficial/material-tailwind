import React from "react";

export default function LandingHeaderImage() {
  return (
    <div
      className="absolute top-0 w-full h-full"
      style={{
        background:
          "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
}
