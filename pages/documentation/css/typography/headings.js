import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import H1Code from "components/Documentation/CSS/Code/H1Code.js";
import H2Code from "components/Documentation/CSS/Code/H2Code.js";
import H3Code from "components/Documentation/CSS/Code/H3Code.js";
import H4Code from "components/Documentation/CSS/Code/H4Code.js";
import H5Code from "components/Documentation/CSS/Code/H5Code.js";
import H6Code from "components/Documentation/CSS/Code/H6Code.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Headings() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/typography/headings"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/typography/headings"
        />
        <title>
          Headings Typography | Tailwind Starter Kit by Creative Tim
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
                title="Headings"
                description="Customizable headings to add more glance to your website and make a powerful SEO."
              />
              <SmallHeading title="H1" description="" />
              <H1Code
                copyText={copy === "H1" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "H1" : "")}
              />
              <SmallHeading title="H2" description="" />
              <H2Code
                copyText={copy === "H2" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "H2" : "")}
              />
              <SmallHeading title="H3" description="" />
              <H3Code
                copyText={copy === "H3" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "H3" : "")}
              />
              <SmallHeading title="H4" description="" />
              <H4Code
                copyText={copy === "H4" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "H4" : "")}
              />
              <SmallHeading title="H5" description="" />
              <H5Code
                copyText={copy === "H5" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "H5" : "")}
              />
              <SmallHeading title="H6" description="" />
              <H6Code
                copyText={copy === "H6" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "H6" : "")}
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
