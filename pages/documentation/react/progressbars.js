import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import ProgressCode from "components/Documentation/JavaScript/React/ProgressCode.js";

export default function Progressbars() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Progressbars" />
      <Navbar />
      <Container>
        <Heading
          title="React Progressbars"
          description="Material Tailwind progressbars components can be used to show a user how far along he/she is in a process."
        />

        <SmallHeading title="Simple Progressbar" />
        <ProgressCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          value="50"
        />

        <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

        <SmallHeading title="Progressbar with Percentage" />
        <ProgressCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          value="75"
          percentage
        />
      </Container>
    </>
  );
}
