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
                    title="Import Material Tailwind Style Sheet"
                    description={
                        <>
                            Import the{' '}
                            <code className="text-light-blue-500">
                                tailwind.css
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
                        {`import "@material-tailwind/react/tailwind.css";`}
                    </SyntaxHighlighter>
                </div>

                <SmallHeading
                    title="Link Material Icons Fonts to your project"
                    description={
                        <>
                            Add a link for the material icons fonts inside the
                            head of your project, so to use the material icons
                            with material tailwind components. You can also use
                            font awesome font family for the project just add a
                            link for it inside the head of your project.
                        </>
                    }
                />
                <div className="mb-12">
                    <SyntaxHighlighter language="jsx" style={a11yDark}>
                        {`// Material Icons Link
<link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
/>

// Font Awesome Link
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
    integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
    crossOrigin="anonymous"
/>`}
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
        <Button color="lightBlue" ripple="light">Button</Button>
    )
}`}
                        ;
                    </SyntaxHighlighter>
                </div>
            </Container>
        </>
    );
}
