import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import QuoteCode from "components/Documentation/JavaScript/React/Typography/QuoteCode";

export default function Quote() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Quote" />
      <Navbar />
      <Container>
        <Heading
          title="React Quote"
          description="Easily create quotes by using Material Tailwind quote component."
        />

        <QuoteCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />
      </Container>
    </>
  );
}
