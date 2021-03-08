import React from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import ButtonsCode from 'components/Documentation/JavaScript/React/ButtonsCode';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import Icon from 'components/Icon/Icon';

export default function Buttons() {
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
        <title>React Buttons | Tailwind Starter Kit by Creative Tim</title>
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
                title="React Buttons"
                description="Beautiful buttons using React."
              />
              <SmallHeading title="Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="regular"
                rounded={false}
                buttonName="Button"
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              >
                Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Rounded Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="regular"
                rounded={true}
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              >
                Rounded Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Small Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="sm"
                rounded={false}
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              >
                Small Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Regular Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="regular"
                rounded={false}
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              >
                Regular Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Large Button" />
              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="lg"
                rounded={false}
                ripple={'data-md-ripple-light={true}'}
                data-md-ripple-light={true}
              >
                Large Button
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon Before" />

              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="regular"
                rounded={false}
                ripple={'data-md-ripple-light={true}'}
                hasIcon={true}
                buttonChildren={`<Icon name="favorite" /> With Icon Before`}
                data-md-ripple-light={true}
              >
                <Icon name="favorite" />
                With Icon Before
              </ButtonsCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon After" />

              <ButtonsCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="filled"
                size="regular"
                rounded={false}
                ripple={'data-md-ripple-light={true}'}
                hasIcon={true}
                buttonChildren={`With Icon After <Icon name="favorite" />`}
                data-md-ripple-light={true}
              >
                With Icon After
                <Icon name="favorite" />
              </ButtonsCode>
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
