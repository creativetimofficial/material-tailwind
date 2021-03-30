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
        <SmallHeading
          title="All CSS unminified (7.2MB)"
          description={
            <>
              To get all the tailwindcss styles on which these components are
              presented, include the following code inside your html file:
            </>
          }
        />
        <div className="mb-12">
          <SyntaxHighlighter language="html" style={a11yDark}>
            {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/tailwind.css">`}
          </SyntaxHighlighter>
        </div>
        <SmallHeading
          title="Only used CSS minified (26 KB)"
          description={
            <>
              To only get the tailwindcss styles for the presented components,
              but minified, include the following code inside your html file:
            </>
          }
        />
        <SyntaxHighlighter language="html" style={a11yDark}>
          {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css">`}
        </SyntaxHighlighter>
      </Container>
    </>
  );
}
