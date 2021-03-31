import React from "react";
import Header from "components/Documentation/Header";
import Container from "components/Documentation/Container";
import Navbar from "components/Documentation/Navbar";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Heading from "components/Documentation/Heading";
import SmallHeading from "components/Documentation/SmallHeading";

export default function QuickStart() {
  return (
    <>
      <Header title="Quick Start Guide" />
      <Navbar />
      <Container>
        <Heading
          title="Quick Start"
          description="To get started without any installation, just copy one of the bellow links to our compiled version of Tailwindcss and add it into your project."
        />
        <Heading title="Installation" />
        <SmallHeading
          title="NPM"
          description={<>Install Material Tailwind via NPM</>}
        />
        <div className="mb-12">
          <SyntaxHighlighter language="html" style={a11yDark}>
            {`npm i -E @material-tailwind/react`}
          </SyntaxHighlighter>
        </div>
        <SmallHeading
          title="Yarn"
          description={<>Install Material Tailwind via Yarn</>}
        />
        <SyntaxHighlighter language="html" style={a11yDark}>
          {`npm i -E @material-tailwind/react`}
        </SyntaxHighlighter>
      </Container>
    </>
  );
}
