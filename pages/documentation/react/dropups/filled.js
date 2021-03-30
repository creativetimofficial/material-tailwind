import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import DropdownCode from "components/Documentation/JavaScript/React/DropdownCode";

export default function Dropups() {
  const [copy, setCopy] = useState(null);

  return (
    <>
      <Header title="React Dropups" />
      <Navbar />
      <Container>
        <Heading
          title="React Dropups"
          description="Toggle contextual overlays for displaying lists of links and more with the Material Tailwind dropup plugin."
        />
        <SmallHeading title="Dropup" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          placement="top-end"
          size="regular"
          rounded={false}
          buttonText="Dropup"
          rippleEffect='ripple="light"'
          ripple="light"
        />

        <div className="my-36" />

        <SmallHeading title="Rounded Dropup" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="filled"
          placement="top-end"
          size="regular"
          rounded={true}
          buttonText="Rounded Dropup"
          rippleEffect='ripple="light"'
          ripple="light"
        />

        <div className="my-36" />

        <SmallHeading title="Small Dropup" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placement="top-end"
          buttonType="filled"
          size="sm"
          rounded={false}
          buttonText="Small Dropup"
          rippleEffect='ripple="light"'
          ripple="light"
        />

        <div className="my-36" />

        <SmallHeading title="Regular Dropup" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placement="top-end"
          buttonType="filled"
          size="regular"
          rounded={false}
          buttonText="Regular Dropup"
          rippleEffect='ripple="light"'
          ripple="light"
        />

        <div className="my-36" />

        <SmallHeading title="Large Dropup" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placement="top-end"
          buttonType="filled"
          size="lg"
          rounded={false}
          buttonText="Large Dropup"
          rippleEffect='ripple="light"'
          ripple="light"
        />
      </Container>
    </>
  );
}
