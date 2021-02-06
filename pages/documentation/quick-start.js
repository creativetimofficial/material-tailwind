import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { shadesOfPurple } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function QuickStart() {
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/quick-start"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/quick-start"
        />
        <title>Quick Start Guide | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="Quick Start"
                description="To get started without any installation, just copy one of the bellow links to our compiled version of Tailwindcss and add it into your project."
              />
              <SmallHeading
                title="All CSS unminified (7.2MB)"
                description={
                  <>
                    To get all the tailwindcss styles on which these components
                    are presented, include the following code inside your html
                    file:
                  </>
                }
              />
              <SyntaxHighlighter language="jsx" style={shadesOfPurple}>
                {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/tailwind.css">`}
              </SyntaxHighlighter>
              <SmallHeading
                title="All CSS minified (5.8MB)"
                description={
                  <>
                    To get all the tailwindcss styles, but minified, on which
                    these components are presented, include the following code
                    inside your html file:
                  </>
                }
              />
              <SyntaxHighlighter language="html" style={shadesOfPurple}>
                {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/tailwind.min.css">`}
              </SyntaxHighlighter>
              <SmallHeading
                title="Only used CSS unminified (40 KB)"
                description={
                  <>
                    To only get the tailwindcss styles for the presented
                    components, include the following code inside your html
                    file: file:
                  </>
                }
              />
              <SyntaxHighlighter language="html" style={shadesOfPurple}>
                {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.css">`}
              </SyntaxHighlighter>
              <SmallHeading
                title="Only used CSS minified (26 KB)"
                description={
                  <>
                    To only get the tailwindcss styles for the presented
                    components, but minified, include the following code inside
                    your html file:
                  </>
                }
              />
              <SyntaxHighlighter language="html" style={shadesOfPurple}>
                {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit/compiled-tailwind.min.css">`}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
