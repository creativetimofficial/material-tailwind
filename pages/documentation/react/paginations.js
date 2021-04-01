import React, { useState } from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";
import PaginationCode from "components/Documentation/JavaScript/React/Paginations/PaginationCode";
import PaginationFirstLastCode from "components/Documentation/JavaScript/React/Paginations/PaginationFirstLastCode";

export default function Paginations() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Header title="React Paginations" />
      <Navbar />
      <Container>
        <Heading
          title="React Paginations"
          description="Material Tailwind pagination component consists of button-like styled links, that are arranged side by side in a horizontal list. Pagination is built with list HTML elements so screen readers can announce the number of available links."
        />
        <SmallHeading title="Simple Pagination" />
        <PaginationCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />

        <div className="h-20">&nbsp;</div>

        <SmallHeading title="Pagination with first & last buttons" />
        <PaginationFirstLastCode
          copyText={copy === "Buttons" ? "Copied" : "Copy"}
          onCopy={(text) => setCopy(text ? "Buttons" : "")}
        />
      </Container>
    </>
  );
}
