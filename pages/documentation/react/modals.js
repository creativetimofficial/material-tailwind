import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import ModalCode from "components/Documentation/JavaScript/React/ModalCode.js";

export default function Modals() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Modals" />
      <Navbar />
      <Container>
        <Heading
          title="React Modals"
          description="React plugin that opens on top of the page content for extra details, notifications to the user or any other new content."
        />

        <SmallHeading title="Small Modal" />
        <ModalCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          size="sm"
          modalSize="small"
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Regular Modal" />
        <ModalCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          size="regular"
          modalSize="regular"
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Large Modal" />
        <ModalCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          size="lg"
          modalSize="large"
        />
      </Container>
    </>
  );
}
