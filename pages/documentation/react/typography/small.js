import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallCode from "components/Documentation/JavaScript/React/Typography/SmallCode";

export default function Small() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Small Text" />
      <Navbar />
      <Container>
        <Heading
          title="React Small Text"
          description="Display small text and content by using Material Tailwind small component."
        />

        <SmallCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />
      </Container>
    </>
  );
}
