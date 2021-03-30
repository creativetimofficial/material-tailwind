import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading";
import CardCode from "components/Documentation/JavaScript/React/Cards/CardCode";

export default function Cards() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Cards" />
      <Navbar />
      <Container>
        <div className="w-10/12">
          <Heading
            title="React Cards"
            description="Material Tailwind cards provide a flexible and extensible content container with multiple variants and options, more cards coming soon."
          />
          <SmallHeading title="Blog Card" />
          <CardCode
            copyText={copy === "Alerts" ? "Copied" : "Copy"}
            onCopy={(text) => setCopy(text ? "Alerts" : "")}
          />
        </div>
      </Container>
    </>
  );
}
