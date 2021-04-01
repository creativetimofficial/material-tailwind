import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import NavbarCode from "components/Documentation/JavaScript/React/Navbars/NavbarCode.js";
import NavbarIconLinkCode from "components/Documentation/JavaScript/React/Navbars/NavbarIconLinkCode.js";
import NavbarLinkCode from "components/Documentation/JavaScript/React/Navbars/NavbarLinkCode.js";
import NavbarIconCode from "components/Documentation/JavaScript/React/Navbars/NavbarIconCode.js";

export default function Navbars() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Navbars" />
      <Navbar />
      <Container>
        <Heading
          title="React Navbars"
          description="Responsive React navigation for your website. You can add in it links, icons, links with icons, search bars and a brand text."
        />

        <SmallHeading
          title="Navbar"
          description={
            <>A complete navbar with icon and text links and a search input.</>
          }
        />

        <NavbarCode
          copyText={copy === "IconsText" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "IconsText" : "")}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading
          title="Icons & Links"
          description={
            <>
              The most used navbar in real-life website, an naviagtion menu with
              icon and text links.
            </>
          }
        />
        <NavbarIconLinkCode
          copyText={copy === "IconsText" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "IconsText" : "")}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading
          title="Links"
          description={<>A simple navbar with text links..</>}
        />

        <NavbarLinkCode
          copyText={copy === "IconsText" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "IconsText" : "")}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading
          title="Icons"
          description={<>A simple navbar with icon links.</>}
        />

        <NavbarIconCode
          copyText={copy === "IconsText" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "IconsText" : "")}
        />
      </Container>
    </>
  );
}
