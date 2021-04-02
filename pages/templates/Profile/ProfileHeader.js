import React from "react";

export default function ProfileHeader() {
  const backgroundImage = require("../../../assets/img/background-1920x1080.jpg");
  return (
    <section className="relative block" style={{ height: "500px" }}>
      <div
        className="absolute top-0 w-full h-full"
        style={{
          background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${backgroundImage})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}
