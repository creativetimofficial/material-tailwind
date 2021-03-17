import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar';
import routes from 'routes';
import Navbar from 'components/Documentation/Navbar';
import Footer from 'components/Documentation/Footer';
import LabelsCode from 'components/Documentation/JavaScript/React/Labels/LabelsCode';
import ClosingLabelsCode from 'components/Documentation/JavaScript/React/Labels/ClosingLabelsCode';
import Heading from 'components/Documentation/Heading';
import SmallHeading from 'components/Documentation/SmallHeading';

export default function Alerts() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/alerts"
        />
        <title>React Labels | Tailwind Starter Kit by Creative Tim</title>
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
                title="React Labels"
                description="Leave your user the choice to close the feedback message using React."
              />
              <SmallHeading
                title="Simple Label"
                description={
                  <>
                    Label can have how many words you want, as well as an
                    optional close button. For styling, use one of the color
                    classes presented below. (e.g.,{' '}
                    <code className="text-pink-600 text-sm bg-gray-200">
                      .bg-red-500
                    </code>
                    ).
                  </>
                }
              />
              <LabelsCode
                copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Alerts' : '')}
              />

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading
                title="Closing Label"
                description={
                  <>
                    Label can have how many words you want, as well as an
                    optional close button. For styling, use one of the color
                    classes presented below. (e.g.,{' '}
                    <code className="text-pink-600 text-sm bg-gray-200">
                      .bg-red-500
                    </code>
                    ).
                  </>
                }
              />
              <ClosingLabelsCode
                copyText={copy === 'Alerts' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Alerts' : '')}
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
