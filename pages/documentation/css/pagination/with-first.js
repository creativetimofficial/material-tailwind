import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';

import PaginationsCode from 'components/Documentation/CSS/PaginationsCode.js';

import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function FirstPagination() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/pagination/with-first"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/pagination/with-first"
        />
        <title>
          Pagination with First and Last Icons | Tailwind Starter Kit by
          Creative Tim
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
                title="Pagination"
                description="Check out our pagination examples with first, last, previous, next icons and numbers. Don't forget to choose your color."
              />
              <SmallHeading
                title="Simple"
                description="The following example only showcases some numbered pagination with next, previous, first and last icons."
              />
              <PaginationsCode
                copyText={copy === 'Simple' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Simple' : '')}
                nextAndPrevious
                firstAndLast
              />
              <SmallHeading
                title="Active states"
                description="You can also modify one of the elements to show your user the active content/page."
              />
              <PaginationsCode
                copyText={copy === 'Active' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Active' : '')}
                nextAndPrevious
                firstAndLast
                active
              />
              <SmallHeading
                title="Disabled states"
                description="You can also provide a disabled state, showing your user that the content/page at hand cannot be viewed, or does not exist."
              />
              <PaginationsCode
                copyText={copy === 'Disabled' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Disabled' : '')}
                nextAndPrevious
                firstAndLast
                disabled
              />
              <SmallHeading
                title="Active and disabled states"
                description="Here is an example with both active and disabled states."
              />
              <PaginationsCode
                copyText={copy === 'ActiveDisabled' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'ActiveDisabled' : '')}
                nextAndPrevious
                firstAndLast
                disabled
                active
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
