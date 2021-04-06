import React from "react";
import H5 from "components/Typography/Heading5";
import H6 from "components/Typography/Heading6";
import Paragraph from "components/Typography/Paragraph";
import Button from "components/Button/Button";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function PresentationInstallation() {
  return (
    <section className="bg-white" id="how-to-use">
      <div className="container max-w-7xl mx-auto px-4">
        <H5 color="gray">Installation</H5>
        <hr className="border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 my-4" />

        <div className="mt-16">
          <div className="mb-16">
            <H6 color="gray">NPM</H6>
            <Paragraph color="gray">
              Install Material Tailwind via NPM
            </Paragraph>

            <SyntaxHighlighter language="html" style={a11yDark}>
              npm i -E @material-tailwind/react
            </SyntaxHighlighter>
          </div>

          <div className="mb-16">
            <H6 color="gray">Yarn</H6>
            <Paragraph color="gray">
              Install Material Tailwind via Yarn
            </Paragraph>

            <SyntaxHighlighter language="html" style={a11yDark}>
              yarn add @materia-tailwind/react -E
            </SyntaxHighlighter>
          </div>

          <div className="mb-16">
            <H6 color="gray">Import Style Sheets</H6>
            <Paragraph color="gray">
              Import the{" "}
              <code className="text-light-blue-500">tailwind.css</code> and{" "}
              <code className="text-light-blue-500">material-icons.css</code>{" "}
              into your <code className="text-light-blue-500">app.js</code>{" "}
              file. Make sure to import the{" "}
              <code className="text-light-blue-500">tailwind.css</code> style
              sheet after all other style sheets.
            </Paragraph>

            <SyntaxHighlighter language="jsx" style={a11yDark}>
              {`import "material-design-icons/iconfont/material-icons.css";
import "@material-tailwind/react/tailwind.css";`}
            </SyntaxHighlighter>
          </div>

          <div>
            <H6 color="gray">Example</H6>
            <Paragraph color="gray">Import the components you need</Paragraph>

            <div className="border border-solid border-gray-300 rounded-lg my-4 p-4 pt-6 relative">
              <div className="pb-4">
                <Button color="lightBlue" ripple="light">
                  Button
                </Button>
              </div>

              <SyntaxHighlighter language="jsx" style={a11yDark}>
                {`import React from "react";
import Button from "@material-tailwind/react/Button";

export default function Example() {
return (
<Button
  color="lightBlue"
  ripple="light"
>
  Button
</Button>
)
}`}
                ;
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
