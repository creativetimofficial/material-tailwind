import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import DropdownCode from "components/Documentation/JavaScript/React/DropdownCode";

export default function Dropdowns() {
  const [copy, setCopy] = useState(null);

  return (
    <>
      <Header title="React Dropdowns" />
      <Navbar />
      <Container>
        <Heading
          title="React Dropdowns"
          description="Toggle contextual overlays for displaying lists of links and more with the Material Tailwind dropdown plugin."
        />
        <SmallHeading title="Dropdown" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="outline"
          placement="bottom-start"
          size="regular"
          rounded={false}
          buttonText="Dropdown"
          rippleEffect='ripple="dark"'
          ripple="dark"
        />

        <div className="my-36" />

        <SmallHeading title="Rounded Dropdown" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          buttonType="outline"
          placement="bottom-start"
          size="regular"
          rounded={true}
          buttonText="Rounded Dropdown"
          rippleEffect='ripple="dark"'
          ripple="dark"
        />

        <div className="my-36" />

        <SmallHeading title="Small Dropdown" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placement="bottom-start"
          buttonType="outline"
          size="sm"
          rounded={false}
          buttonText="Small Dropdown"
          rippleEffect='ripple="dark"'
          ripple="dark"
        />

        <div className="my-36" />

        <SmallHeading title="Regular Dropdown" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placement="bottom-start"
          buttonType="outline"
          size="regular"
          rounded={false}
          buttonText="Regular Dropdown"
          rippleEffect='ripple="dark"'
          ripple="dark"
        />

        <div className="my-36" />

        <SmallHeading title="Large Dropdown" />
        <DropdownCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
          placement="bottom-start"
          buttonType="outline"
          size="lg"
          rounded={false}
          buttonText="Large Dropdown"
          rippleEffect='ripple="dark"'
          ripple="dark"
        />
      </Container>
    </>
  );
}
