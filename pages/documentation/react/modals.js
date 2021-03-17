import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import ModalsCode from 'components/Documentation/JavaScript/React/ModalsCode.js';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function SmallModal() {
  const [copy, setCopy] = React.useState(null);
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
        <title>React Modals | Tailwind Starter Kit by Creative Tim</title>
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
                title="React Modals"
                description="React plugin that opens on top of the page content for extra details, notifications to the user or any other new content."
              />

              <SmallHeading title="React Small Modal" />
              <ModalsCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                size="sm"
                modalSize="small"
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="React Regular Modal" />
              <ModalsCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                size="regular"
                modalSize="regular"
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="React Large Modal" />
              <ModalsCode
                copyText={copy === 'Modal' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Modal' : '')}
                size="lg"
                modalSize="large"
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
