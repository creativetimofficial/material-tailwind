import React, { useState } from 'react';
import Head from 'next/head';
import Sidebar from 'components/Documentation/Sidebar.js';
import routes from 'routes.js';
import Navbar from 'components/Documentation/Navbar.js';
import Footer from 'components/Documentation/Footer.js';
import ButtonCode from 'components/Documentation/JavaScript/React/ButtonCode';
import Heading from 'components/Documentation/Heading.js';
import SmallHeading from 'components/Documentation/SmallHeading.js';
import Icon from 'components/Icon/Icon';

export default function Buttons() {
  const [copy, setCopy] = useState(null);

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
      <div className="container max-w-7xl mx-auto mt-4 pt-12">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
            <Sidebar routes={routes} />
          </div>
          <div className="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
            <div className="my-8">
              <Heading
                title="React Buttons"
                description="Beautiful buttons using react."
              />
              <SmallHeading title="Button" />
              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                buttonName="Button"
                buttonChildren="Button"
                rippleEffect='ripple="dark"'
                ripple="dark"
              >
                Button
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Rounded Button" />
              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={true}
                buttonChildren="Rounded Button"
                rippleEffect='ripple="dark"'
                ripple="dark"
              >
                Rounded Button
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Small Button" />
              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="sm"
                rounded={false}
                buttonChildren="Small Button"
                rippleEffect='ripple="dark"'
                ripple="dark"
              >
                Small Button
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Regular Button" />
              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                buttonChildren="Regular Button"
                rippleEffect='ripple="dark"'
                ripple="dark"
              >
                Regular Button
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="Large Button" />
              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="lg"
                rounded={false}
                buttonChildren="Large Button"
                rippleEffect='ripple="dark"'
                ripple="dark"
              >
                Large Button
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon Before" />

              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                rippleEffect='ripple="dark"'
                hasIcon={true}
                buttonChildren={`<Icon name="favorite" /> With Icon Before`}
                ripple="dark"
              >
                <Icon name="favorite" />
                With Icon Before
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon After" />

              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={false}
                rippleEffect='ripple="dark"'
                hasIcon={true}
                buttonChildren={`With Icon After <Icon name="favorite" />`}
                ripple="dark"
              >
                With Icon After
                <Icon name="favorite" />
              </ButtonCode>

              <hr className="mt-20 mb-20 border-b-1 border-gray-300" />

              <SmallHeading title="With Icon Only" />

              <ButtonCode
                copyText={copy === 'Buttons' ? 'Copied' : 'Copy'}
                onCopy={(text) => setCopy(text ? 'Buttons' : '')}
                buttonType="link"
                size="regular"
                rounded={true}
                rippleEffect='ripple="dark"'
                hasIcon={true}
                buttonChildren={`<Icon name="favorite" size="sm" />`}
                iconOnly
                ripple="dark"
              >
                <Icon name="favorite" size="sm" />
              </ButtonCode>
            </div>
          </div>
          <div className="w-full lg:w-2/12 px-4 hidden lg:block"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
