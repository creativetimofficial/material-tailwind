import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import TooltipsCode from "components/Documentation/JavaScript/React/TooltipsCode.js";

export default function Tooltips() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Tooltips" />
      <Navbar />
      <Container>
        <Heading
          title="React Tooltips"
          description="Material Tailwind tooltip plugin is a small pop-up element that appears while the user moves the mouse pointer over an element."
        />

        <SmallHeading title="Tooltip Left" />
        <TooltipsCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="left"
        />

        <div className="my-36" />

        <SmallHeading title="Tooltip Right" />
        <TooltipsCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="right"
        />

        <div className="my-36" />

        <SmallHeading title="Tooltip Top" />
        <TooltipsCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="top"
        />

        <div className="my-36" />

        <SmallHeading title="Tooltip Bottom" />
        <TooltipsCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="bottom"
        />
      </Container>
    </>
  );
}
