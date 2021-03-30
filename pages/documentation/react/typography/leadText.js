import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import LeadTextCode from "components/Documentation/JavaScript/React/Typography/LeadTextCode";

export default function LeadText() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Lead Text" />
      <Navbar />
      <Container>
        <Heading
          title="React Lead Text"
          description="Show important content using Material Tailwind lead text."
        />
        <LeadTextCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />
      </Container>
    </>
  );
}
