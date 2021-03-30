import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import PopoverCode from "components/Documentation/JavaScript/React/PopoverCode.js";

export default function Popovers() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Popovers" />
      <Navbar />
      <Container>
        <Heading
          title="React Popovers"
          description="Material Tailwind popovers are a small overlay of content that is used to demonstrate secondary information of any component when it is clicked by a user."
        />

        <SmallHeading title="Popover Left" />
        <PopoverCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="left"
        />

        <div className="my-36" />

        <SmallHeading title="Popover Right" />
        <PopoverCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="right"
        />

        <div className="my-36" />

        <SmallHeading title="Popover Top" />
        <PopoverCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="top"
        />

        <div className="my-36" />

        <SmallHeading title="Popover Bottom" />
        <PopoverCode
          copyText={copy === "Modal" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Modal" : "")}
          placement="bottom"
        />
      </Container>
    </>
  );
}
