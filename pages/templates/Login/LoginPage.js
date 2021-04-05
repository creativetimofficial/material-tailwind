import React from "react";

export default function LoginPage({ children }) {
  const backgroundImage = require("assets/img/background-1920x1280.jpg");
  return (
    <div
      className="w-screen h-screen relative bg-position flex flex-col justify-between"
      style={{
        background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
