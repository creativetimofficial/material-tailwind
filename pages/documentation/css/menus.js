import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import MenusCode from "components/Documentation/CSS/MenusCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Menus() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/menus"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/menus"
        />
        <title>CSS Menu | Tailwind Starter Kit by Creative Tim</title>
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
                title="Menus"
                description="Simple vertical navigations, that can go anywhere on your page."
              />
              <SmallHeading
                title="Links"
                description="This is a simple menu only with text links."
              />
              <MenusCode
                copyText={copy === "Text" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Text" : "")}
              />
              <SmallHeading
                title="Icon links"
                description="If you want, you can leave the text, and only give your user an ituitive icon."
              />
              <MenusCode
                copyText={copy === "Icons" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Icons" : "")}
                icons
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
