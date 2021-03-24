import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import NavbarCode from 'components/Documentation/JavaScript/React/Navbars/NavbarCode.js';
import NavbarIconLinkCode from 'components/Documentation/JavaScript/React/Navbars/NavbarIconLinkCode.js';
import NavbarLinkCode from 'components/Documentation/JavaScript/React/Navbars/NavbarLinkCode.js';
import NavbarIconCode from 'components/Documentation/JavaScript/React/Navbars/NavbarIconCode.js';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function Navbars() {
  const [copy, setCopy] = useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars"
        />
        <title>React Navbars | Tailwind Starter Kit by Creative Tim</title>
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
                title="React Navbars"
                description="Responsive React navigation for your website. You can add in it links, icons, links with icons, search bars and a brand text."
              />

              <SmallHeading
                title="Navbar"
                description={
                  <>
                    This one is a complete navbar with icon text links and
                    search input.
                  </>
                }
              />

              <NavbarCode
                copyText={copy === 'IconsText' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'IconsText' : '')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading
                title="Navbar with icons and links"
                description={
                  <>
                    This is the most used navbar in real-life website, an
                    naviagtion menu with text and icon links.
                  </>
                }
              />
              <NavbarIconLinkCode
                copyText={copy === 'IconsText' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'IconsText' : '')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading
                title="Navbar with links"
                description={<>This one used text links no icon is used.</>}
              />

              <NavbarLinkCode
                copyText={copy === 'IconsText' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'IconsText' : '')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading
                title="Navbar with icons"
                description={
                  <>This one used only icon links no text is used.</>
                }
              />

              <NavbarIconCode
                copyText={copy === 'IconsText' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'IconsText' : '')}
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
