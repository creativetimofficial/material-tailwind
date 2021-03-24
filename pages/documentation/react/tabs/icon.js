import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar';
import routes from 'routes';
import Navbar from 'components/Documentation/Navbar';
import Footer from 'components/Documentation/Footer';
import TabIconCode from 'components/Documentation/JavaScript/React/Tabs/TabIconCode';
import Heading from 'components/Documentation/Heading';

export default function Tab() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/small"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/small"
        />
        <title>React Tabs | Tailwind Starter Kit by Creative Tim</title>
      </Head>
      <Navbar fixed />
      <div className="container max-w-7xl mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="React Tab Icons"
                description="React navigation component with menu items and content."
              />

              <TabIconCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
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
