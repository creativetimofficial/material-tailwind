import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import DropdownsCode from "components/Documentation/JavaScript/React/DropdownsCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Dropdown() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/dropdown"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/dropdown"
        />
        <title>
          React Dropdown Variation | Tailwind Starter Kit by Creative Tim
        </title>
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
                title="React Dropdown"
                description="An interactive menu that opens to the bottom of a button using React."
              />
              <SmallHeading
                title="Dropdown Examples"
                description={
                  <>
                    For this component to properly work, you will need to
                    install <code>popper.js</code> into your project. Please run
                    the following:
                    <br />
                    <code className="text-red-500">
                      npm i -E popper.js@1.15.0
                    </code>
                  </>
                }
              />
              <DropdownsCode
                copyText={copy === "Dropdown" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Dropdown" : "")}
                placement="bottom-start"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
