import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import ImageCode from "components/Documentation/JavaScript/React/ImageCode";

export default function Images() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Images" />
      <Navbar />
      <Container>
        <Heading
          title="React Images"
          description="Material Tailwind images for display different images in different forms."
        />
        <SmallHeading title="Image" />
        <ImageCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          src={require("assets/img/team-1-800x800.jpg")}
          raised={false}
          rounded={false}
          alt="Image"
        />

        <div className="my-36" />

        <SmallHeading title="Rounded Image" />
        <ImageCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          src={require("assets/img/team-2-800x800.jpg")}
          raised={false}
          rounded={true}
          alt="Rounded Image"
        />

        <div className="my-36" />

        <SmallHeading title="Raised Image" />
        <ImageCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          src={require("assets/img/team-3-800x800.jpg")}
          raised={true}
          rounded={false}
          alt="Raised Image"
        />

        <div className="my-36" />

        <SmallHeading title="Rounded Raised Image" />
        <ImageCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          src={require("assets/img/team-4-470x470.png")}
          raised={true}
          rounded={true}
          alt="Rounded Raised Image"
        />
      </Container>
    </>
  );
}
