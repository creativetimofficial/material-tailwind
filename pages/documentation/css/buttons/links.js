import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import ButtonsCode from "components/Documentation/CSS/ButtonsCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Links() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/buttons/links"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/buttons/links"
        />
        <title>CSS Link Buttons | Tailwind Starter Kit by Creative Tim</title>
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
                title="Link Buttons"
                description="Link buttons in different styles and colors can be used for call to actions in forms  and more, or as simple links inside a blog post for example."
              />
              <SmallHeading
                title="Small with text"
                description="Choose this basic link, only with text."
              />
              <ButtonsCode
                copyText={copy === "SmallOnlyText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "SmallOnlyText" : "")}
                buttonType="px-3 py-1 text-xs"
                buttonText="With Text"
                icon={false}
                link
              />
              <SmallHeading
                title="Small Icon and Text"
                description="Or, you can go with an icon alongside your text."
              />
              <ButtonsCode
                copyText={copy === "SmallIconAndText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "SmallIconAndText" : "")}
                buttonType="px-3 py-1 text-xs"
                buttonText=" With Icon and Text"
                icon={true}
                link
              />
              <SmallHeading
                title="Small Icon"
                description="Icons are enough so your users will know what the link does."
              />
              <ButtonsCode
                copyText={copy === "SmallJustIcon" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "SmallJustIcon" : "")}
                buttonType="px-3 py-1 text-xs"
                buttonText=""
                icon={true}
                link
              />
              <SmallHeading
                title="Regular with text"
                description="Choose this basic link, only with text."
              />
              <ButtonsCode
                copyText={copy === "RegularOnlyText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "RegularOnlyText" : "")}
                buttonType="px-6 py-2 text-sm"
                buttonText="With Text"
                icon={false}
                link
              />
              <SmallHeading
                title="Regular Icon and Text"
                description="Or, you can go with an icon alongside your text."
              />
              <ButtonsCode
                copyText={copy === "RegularIconAndText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "RegularIconAndText" : "")}
                buttonType="px-6 py-2 text-sm"
                buttonText=" With Icon and Text"
                icon={true}
                link
              />
              <SmallHeading
                title="Just Icon"
                description="Icons are enough so your users will know what the link does."
              />
              <ButtonsCode
                copyText={copy === "RegularJustIcon" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "RegularJustIcon" : "")}
                buttonType="px-6 py-2 text-sm"
                buttonText=""
                icon={true}
                link
              />
              <SmallHeading
                title="Large with text"
                description="Choose this basic link, only with text."
              />
              <ButtonsCode
                copyText={copy === "LargeOnlyText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "LargeOnlyText" : "")}
                buttonType="px-8 py-3"
                buttonText="With Text"
                icon={false}
                link
              />
              <SmallHeading
                title="Large Icon and Text"
                description="Or, you can go with an icon alongside your text."
              />
              <ButtonsCode
                copyText={copy === "LargeIconAndText" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "LargeIconAndText" : "")}
                buttonType="px-8 py-3"
                buttonText=" With Icon and Text"
                icon={true}
                link
              />
              <SmallHeading
                title="Just Icon"
                description="Icons are enough so your users will know what the link does."
              />
              <ButtonsCode
                copyText={copy === "LargeJustIcon" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "LargeJustIcon" : "")}
                buttonType="px-8 py-3"
                buttonText=""
                icon={true}
                link
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
