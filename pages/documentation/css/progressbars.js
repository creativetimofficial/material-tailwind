import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';

import ProgressbarsCode from 'components/Documentation/CSS/ProgressbarsCode.js';
import MultiProgressbarsCode from 'components/Documentation/CSS/MultiProgressbarsCode.js';

import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';

export default function Progressbars() {
  const [copy, setCopy] = React.useState(null);
  return (
    <>
      <Head>
        {/* Canonical SEO */}
        <link
          rel="canonical"
          href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/progressbars"
        />
        {/* Open Graph data */}
        <meta
          property="og:url"
          content="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/css/progressbars"
        />
        <title>CSS Progress | Tailwind Starter Kit by Creative Tim</title>
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
                title="Progressbars"
                description="These are used to show your users the progression of an action. Choose from down bellow the type and color of your progressbar."
              />
              <SmallHeading
                title="Simple"
                description="Progressbar with 0% completed. You can use this at the start of your progression."
              />
              <ProgressbarsCode
                copyText={copy === 'Simple' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Simple' : '')}
                percentage="0"
                badge={false}
              />
              <SmallHeading
                title="Filled"
                description="Progressbar with 30% completed. Just change the width style property from 30% to your level of progress completion."
              />
              <ProgressbarsCode
                copyText={copy === 'Filled' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Filled' : '')}
                percentage="30"
                badge={false}
              />
              <SmallHeading
                title="Multiple colors"
                description="You can have multiple colors, for your multiple stages of progression completion. The bellow example shows the first 10% as red, the next 15% as orange, and the last 25% as yellow. You could add the next 50% as green, to show that the progression is almost done."
              />
              <MultiProgressbarsCode
                copyText={copy === 'MultipleBadge' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'MultipleBadge' : '')}
                badge={false}
              />
              <SmallHeading
                title="Badge"
                description="Alongside your progress you can also add a Badge and a Percentage so that your users can easily understand the progression completion."
              />
              <ProgressbarsCode
                copyText={copy === 'SimpleBadge' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'SimpleBadge' : '')}
                percentage="0"
                badge={true}
              />
              <SmallHeading
                title="Badge and completion"
                description="The following example is a progress bar with badge and 30% completions."
              />
              <ProgressbarsCode
                copyText={copy === 'FilledBadge' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'FilledBadge' : '')}
                percentage="30"
                badge={true}
              />
              <SmallHeading
                title="Badge and multiple completion"
                description="You can also add a Badge to a multiple states progressbar."
              />
              <MultiProgressbarsCode
                copyText={copy === 'MultipleBadge' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'MultipleBadge' : '')}
                badge={true}
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
