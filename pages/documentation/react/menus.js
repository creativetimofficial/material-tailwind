import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import MenuCode from "components/Documentation/JavaScript/React/Menus/MenuCode.js";
import MenuLinkCode from "components/Documentation/JavaScript/React/Menus/MenuLinkCode.js";
import MenuIconCode from "components/Documentation/JavaScript/React/Menus/MenuIconCode.js";

export default function Menus() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Menus" />
      <Navbar />
      <Container>
        <Heading
          title="React Menus"
          description="Responsive React vertical navigations, that can go anywhere on your page."
        />
        <SmallHeading
          title="Icons & Links"
          description="A complete menu with icon and text links."
        />
        <MenuCode
          copyText={copy === "Text" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Text" : "")}
        />

        <div className="my-36" />

        <SmallHeading
          title="Links"
          description="A simple menu with text links."
        />
        <MenuLinkCode
          copyText={copy === "Icons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Icons" : "")}
        />

        <div className="my-36" />

        <SmallHeading
          title="Icons"
          description="A simple menu with icon links."
        />
        <MenuIconCode
          copyText={copy === "Icons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Icons" : "")}
        />
      </Container>
    </>
  );
}
