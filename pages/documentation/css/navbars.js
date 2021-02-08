import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import NavbarsCode from "components/Documentation/CSS/NavbarsCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Navbars() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/navbars"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/navbars"
        />
        <title>CSS Navbar | Tailwind Starter Kit by Creative Tim</title>
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
                title="Navbars"
                description="This the upper navigation of your website. You can add in it links, icons, links with icons, search bars and a brand text."
              />
              <SmallHeading
                title="Text"
                description="The following example features a brand on the left and some text links on the right."
              />
              <NavbarsCode
                copyText={copy === "Text" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Text" : "")}
                navbarsType="text"
              />
              <SmallHeading
                title="Icons"
                description="You can leave the text, and only give your users some intuitive icon links."
              />
              <NavbarsCode
                copyText={copy === "Icons" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Icons" : "")}
                navbarsType="icons"
              />
              <SmallHeading
                title="Icons and Text"
                description="The following example features a brand on the left and some text and icon links on the right."
              />
              <NavbarsCode
                copyText={copy === "IconsText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "IconsText" : "")}
                navbarsType="icons-text"
              />
              <SmallHeading
                title="Search bar"
                description="You can also have a search bar inside your navigation menu. On the left you can keep your brand text with some links, and on the right you can have a search for your website."
              />
              <NavbarsCode
                copyText={copy === "IconsTextSearch" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "IconsTextSearch" : "")}
                navbarsType="search"
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
