import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import TabTextCode from "components/Documentation/JavaScript/React/Tabs/TabTextCode";

export default function Tab() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Tabs" />
      <Navbar />
      <Container>
        <Heading
          title="React Tabs"
          description="Material Tailwind tab components with menu items and content."
        />

        <TabTextCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
        />
      </Container>
    </>
  );
}
