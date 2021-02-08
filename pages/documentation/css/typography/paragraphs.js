import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';

import ParagraphCode from 'components/Documentation/CSS/Code/ParagraphCode.js';
import LeadingTextCode from 'components/Documentation/CSS/Code/LeadingTextCode.js';
import QuoteCode from 'components/Documentation/CSS/Code/QuoteCode.js';
import SmallCode from 'components/Documentation/CSS/Code/SmallCode.js';

import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function Paragraphs() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/typography/paragraphs"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/typography/paragraphs"
        />
        <title>
          Paragraphs Typography | Tailwind Starter Kit by Creative Tim
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
                title="Paragraphs"
                description="Add the following to your website to add more depth to your pages."
              />
              <SmallHeading
                title="Paragraph"
                description="Some classes that make you paragraph a bit different by the default browser one."
              />
              <ParagraphCode
                copyText={copy === 'Paragraph' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Paragraph' : '')}
              />
              <SmallHeading
                title="Lead text"
                description="Some classes that make you paragraph stand our from the rest of your text."
              />
              <LeadingTextCode
                copyText={copy === 'LeadingText' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'LeadingText' : '')}
              />
              <SmallHeading
                title="Quote"
                description="This can go under the profile image, as a status."
              />
              <QuoteCode
                copyText={copy === 'Quote' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Quote' : '')}
              />
              <SmallHeading
                title="Small"
                description="You can add a small text, if you want to focus your user on some other content."
              />
              <SmallCode
                copyText={copy === 'Small' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Small' : '')}
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
