import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading";
import SmallHeading from "components/Documentation/SmallHeading";
import AlertCode from "components/Documentation/JavaScript/React/Alerts/AlertCode";
import ClosingAlertCode from "components/Documentation/JavaScript/React/Alerts/ClosingAlertCode";

export default function Alerts() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Alerts" />
      <Navbar />
      <Container>
        <Heading
          title="React Alerts"
          description="Provide contextual feedback messages for typical user actions with
          the handful of available and flexible Material Tailwind alerts."
        />
        <SmallHeading title="Simple Alert" />
        <AlertCode
          copyText={copy === "Alerts" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Alerts" : "")}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Closing Alert" />
        <ClosingAlertCode
          copyText={copy === "Alerts" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Alerts" : "")}
        />
      </Container>
    </>
  );
}
