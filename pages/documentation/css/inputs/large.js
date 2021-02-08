import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';

import InputsCode from 'components/Documentation/CSS/InputsCode.js';

import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function LargeInputs() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/inputs/large"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/inputs/large"
        />
        <title>Large Inputs | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <Heading title="Large Inputs" description="" />
            <SmallHeading title="Simple on gray background" />
            <InputsCode
              copyText={copy === 'Simple' ? 'Copied' : 'Copy'}
              onCopy={(text) => setCopy(text ? 'Simple' : '')}
              size="large"
              inputType="text"
              inputStyle="line"
              bgColor="bg-gray-300"
            />
            <SmallHeading title="With left icon on gray background" />
            <InputsCode
              copyText={copy === 'Left' ? 'Copied' : 'Copy'}
              onCopy={(text) => setCopy(text ? 'Left' : '')}
              leftIcon={true}
              size="large"
              inputStyle="shadow"
              bgColor="bg-gray-300"
            />
            <SmallHeading title="With right icon on gray background" />
            <InputsCode
              copyText={copy === 'Right' ? 'Copied' : 'Copy'}
              onCopy={(text) => setCopy(text ? 'Right' : '')}
              rightIcon={true}
              size="large"
              bgColor="bg-gray-300"
            />
            <SmallHeading title="Simple on white background" />
            <InputsCode
              copyText={copy === 'SimpleW' ? 'Copied' : 'Copy'}
              onCopy={(text) => setCopy(text ? 'SimpleW' : '')}
              size="large"
              inputType="text"
              inputStyle="line"
              addBorder={true}
            />
            <SmallHeading title="With left icon on white background" />
            <InputsCode
              copyText={copy === 'LeftW' ? 'Copied' : 'Copy'}
              onCopy={(text) => setCopy(text ? 'LeftW' : '')}
              leftIcon={true}
              size="large"
              inputStyle="shadow"
              addBorder={true}
            />
            <SmallHeading title="With right icon on white background" />
            <InputsCode
              copyText={copy === 'RightW' ? 'Copied' : 'Copy'}
              onCopy={(text) => setCopy(text ? 'RightW' : '')}
              rightIcon={true}
              size="large"
              addBorder={true}
            />
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
