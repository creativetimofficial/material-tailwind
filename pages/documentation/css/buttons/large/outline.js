import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import ButtonsCode from "components/Documentation/CSS/ButtonsCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function LargeOutline() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/buttons/large/outline"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/buttons/large/outline"
        />
        <title>
          Large Outline Buttons | Tailwind Starter Kit by Creative Tim
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
                title="Large Outline Buttons"
                description="Large outline buttons in different styles and colors can be used for call to actions in forms and more."
              />
              <SmallHeading
                title="Only Text"
                description="Choose this basic button, only with text."
              />
              <ButtonsCode
                copyText={copy === "OnlyText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "OnlyText" : "")}
                buttonType="px-8 py-3 rounded"
                buttonText="Large"
                icon={false}
                outline
              />
              <SmallHeading
                title="Icon and Text"
                description="Or, you can go with an icon alongside your text."
              />
              <ButtonsCode
                copyText={copy === "IconAndText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "IconAndText" : "")}
                buttonType="px-8 py-3 rounded"
                buttonText=" Large"
                icon={true}
                outline
              />
              <SmallHeading
                title="Just Icon"
                description="Icons are enough so your users will know what the button does."
              />
              <ButtonsCode
                copyText={copy === "JustIcon" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "JustIcon" : "")}
                buttonType="px-8 py-3 rounded"
                buttonText=""
                icon={true}
                outline
              />
              <SmallHeading
                title="Round with text"
                description="Choose to go with a basic more rounded button."
              />
              <ButtonsCode
                copyText={copy === "RoundWithText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "RoundWithText" : "")}
                buttonType="px-8 py-3 rounded-full"
                buttonText="Large"
                icon={false}
                outline
              />
              <SmallHeading
                title="Round with icon and text"
                description="Or, you can go with an icon alongside your text in the rounded button."
              />
              <ButtonsCode
                copyText={copy === "RoundWithIconAndText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "RoundWithIconAndText" : "")}
                buttonType="px-8 py-3 rounded-full"
                buttonText=" Large"
                icon={true}
                outline
              />
              <SmallHeading
                title="Round with icons"
                description="Icons are enough so your users will know what the rounded button does."
              />
              <ButtonsCode
                copyText={copy === "RoundWithIcon" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "RoundWithIcon" : "")}
                buttonType="px-8 py-3 rounded-full"
                buttonText=""
                icon={true}
                outline
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
