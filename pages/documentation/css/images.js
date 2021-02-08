import React from "react";
import Head from "next/head";
import Sidebar from "components/Documentation/Sidebar.js";
import routes from "routes.js";
import Navbar from "components/Documentation/Navbar.js";
import Footer from "components/Documentation/Footer.js";

import ImagesCode from "components/Documentation/CSS/ImagesCode.js";

import Heading from "components/Documentation/Heading.js";
import SmallHeading from "components/Documentation/SmallHeading.js";

export default function Images() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/images"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/images"
        />
        <title>Images | Tailwind Starter Kit by Creative Tim</title>
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
                title="Image types"
                description="We've designed our images so that they do not become larger then their wrapper container. Choose the one that best suits your needs."
              />
              <SmallHeading
                title="Simple Image"
                description="This is a simple image, with rounded corners, that can beautifully go alongside some text, representing a blog post."
              />
              <ImagesCode
                copyText={copy === "Image" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Image" : "")}
                type="shadow rounded"
                src={require("assets/img/team-1-800x800.jpg")}
              />
              <h4 className="text-lg font-medium mb-2 mt-8 text-gray-700 capitalize">
                Circle Image
              </h4>
              <SmallHeading
                title="Cirlce Image"
                description="This circled image can work as a profile image."
              />
              <ImagesCode
                copyText={copy === "CircleImage" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "CircleImage" : "")}
                type="shadow rounded-full"
                src={require("assets/img/team-2-800x800.jpg")}
              />
              <SmallHeading
                title="Simple Raised"
                description="The difference between this image and the first one, is the shadow. While the first image had none, this has a shadow that makes the image feel like it floats."
              />
              <ImagesCode
                copyText={copy === "Raised" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "Raised" : "")}
                type="shadow-lg rounded"
                src={require("assets/img/team-3-800x800.jpg")}
              />
              <SmallHeading
                title="Circle Raised"
                description="Like the above image, this one features a shadow to make it look like it floats above the other content."
              />
              <ImagesCode
                copyText={copy === "CircleRaised" ? "Copied" : "Copy"}
                onCopy={text => setCopy(text ? "CircleRaised" : "")}
                type="shadow-lg rounded-full"
                src={require("assets/img/team-4-470x470.png")}
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
