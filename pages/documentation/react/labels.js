import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import LabelCode from "components/Documentation/JavaScript/React/Labels/LabelCode";
import ClosingLabelCode from "components/Documentation/JavaScript/React/Labels/ClosingLabelCode";

export default function Labels() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Lables" />
      <Navbar />
      <Container>
        <Heading
          title="React Labels"
          description="Simple and controlled Material Tailwind lables, let the user to choice to close the label using react."
        />
        <SmallHeading title="Simple Label" />
        <LabelCode
          copyText={copy === "Labels" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Labels" : "")}
        />

        <div className="my-36" />

        <SmallHeading title="Closing Label" />
        <ClosingLabelCode
          copyText={copy === "Labels" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Labels" : "")}
        />
      </Container>
    </>
  );
}
