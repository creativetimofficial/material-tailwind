import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import ParagraphCode from "components/Documentation/JavaScript/React/Typography/ParagraphCode";

export default function Paragraph() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Paragraph" />
      <Navbar />
      <Container>
        <Heading
          title="React Paragraph"
          description="Material Tailwind paragraph for displaying long text."
        />

        <ParagraphCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />
      </Container>
    </>
  );
}
