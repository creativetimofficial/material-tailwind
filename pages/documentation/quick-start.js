import React from 'react';
import Header from 'components/Documentation/Header';
import Container from 'components/Documentation/Container';
import Navbar from 'components/Documentation/Navbar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Heading from 'components/Documentation/Heading';
import SmallHeading from 'components/Documentation/SmallHeading';
import Button from 'components/Button/Button';

export default function QuickStart() {
    return (
        <>
            <Header title="Quick Start Guide" />
            <Navbar />
            <Container>
                <Heading
                    title="Quick Start"
                    description="Learn how to use Material Tailwind components from this documentation to quickly and easily create elegant and flexible pages."
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
                <div className="mb-12">
                    <SyntaxHighlighter language="html" style={a11yDark}>
                        {`yarn add @material-tailwind/react -E`}
                    </SyntaxHighlighter>
                </div>

                <SmallHeading
                    title="Import Style Sheets"
                    description={
                        <>
                            Import the{' '}
                            <code className="text-light-blue-500">
                                tailwind.css
                            </code>{' '}
                            and{' '}
                            <code className="text-light-blue-500">
                                material-icons.min.css
                            </code>{' '}
                            into your{' '}
                            <code className="text-light-blue-500">app.js</code>{' '}
                            file. Make sure to import the{' '}
                            <code className="text-light-blue-500">
                                tailwind.css
                            </code>{' '}
                            style sheet after all other style sheets.
                        </>
                    }
                />
                <div className="mb-12">
                    <SyntaxHighlighter language="jsx" style={a11yDark}>
                        {`import "material-icons/css/material-icons.min.css";
import "@material-tailwind/react/tailwind.css";`}
                    </SyntaxHighlighter>
                </div>

                <SmallHeading
                    title="Example"
                    description={<>Import the components you need</>}
                />
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
            </Container>
        </>
    );
}
