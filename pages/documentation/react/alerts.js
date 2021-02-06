import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import AlertsCode from "components/Documentation/JavaScript/React/AlertsCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Alerts() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        <title>
          React Closing Alerts | Tailwind Starter Kit by Creative Tim
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
                title="React Alerts"
                description="Leave your user the choice to close the feedback message using React."
              />
              <SmallHeading
                title="Alert Examples"
                description={
                  <>
                    Alerts can have how many words you want, as well as an
                    optional close button. For styling, use one of the color
                    classes presented below. (e.g.,{" "}
                    <code className="text-pink-600 text-sm bg-gray-200">
                      .bg-red-500
                    </code>
                    ).
                  </>
                }
              />
              <AlertsCode
                copyText={copy === "Alerts" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Alerts" : "")}
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
