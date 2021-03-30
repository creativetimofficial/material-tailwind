import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import Heading1Code from "components/Documentation/JavaScript/React/Typography/Heading1Code";
import Heading2Code from "components/Documentation/JavaScript/React/Typography/Heading2Code";
import Heading3Code from "components/Documentation/JavaScript/React/Typography/Heading3Code";
import Heading4Code from "components/Documentation/JavaScript/React/Typography/Heading4Code";
import Heading5Code from "components/Documentation/JavaScript/React/Typography/Heading5Code";
import Heading6Code from "components/Documentation/JavaScript/React/Typography/Heading6Code";

export default function Headings() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Headings" />
      <Navbar />
      <Container>
        <Heading
          title="React Headings"
          description="Different levels of headings for creating titles."
        />
        <SmallHeading title="Heading 1" />
        <Heading1Code
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />

        <div className="my-36" />

        <SmallHeading title="Heading 2" />
        <Heading2Code
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />

        <div className="my-36" />

        <SmallHeading title="Heading 3" />
        <Heading3Code
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />

        <div className="my-36" />

        <SmallHeading title="Heading 4" />
        <Heading4Code
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />

        <div className="my-36" />

        <SmallHeading title="Heading 5" />
        <Heading5Code
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />

        <div className="my-36" />

        <SmallHeading title="Heading 6" />
        <Heading6Code
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />
      </Container>
    </>
  );
}
