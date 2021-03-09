import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import MenuCode from 'components/Documentation/JavaScript/React/Menus/MenuCode.js';
import MenuLinksCode from 'components/Documentation/JavaScript/React/Menus/MenuLinksCode.js';
import MenuIconsCode from 'components/Documentation/JavaScript/React/Menus/MenuIconsCode.js';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function Menus() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/menus"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/menus"
        />
        <title>React Menus | Tailwind Starter Kit by Creative Tim</title>
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
                title="React Menus"
                description="Responsive React vertical navigations, that can go anywhere on your page."
              />
              <SmallHeading
                title="Menu"
                description="This is a complete menu with text and icon links."
              />
              <MenuCode
                copyText={copy === 'Text' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Text' : '')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading
                title="Links"
                description="This is a simple menu with text links."
              />
              <MenuLinksCode
                copyText={copy === 'Icons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Icons' : '')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading
                title="Icons"
                description="This is a simple menu with icon links."
              />
              <MenuIconsCode
                copyText={copy === 'Icons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Icons' : '')}
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
