import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from 'components/Navbar/Navbar';
import NavbarContainer from 'components/Navbar/NavbarContainer';
import NavbarWrapper from 'components/Navbar/NavbarWrapper';
import NavbarBrand from 'components/Navbar/NavbarBrand';
import NavbarToggler from 'components/Navbar/NavbarToggler';
import Collapse from 'components/Navbar/Collapse';
import Nav from 'components/Nav/Nav';
import NavItem from 'components/Nav/NavItem';
import H1 from 'components/Typography/Heading1';
import Buttons from 'components/Buttons/Buttons';
import Paragraph from 'components/Typography/Paragraph';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import 'ripple/ripple';

export default function Index() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
      <Navbar color="lightBlue" navbar>
        <NavbarContainer>
          <NavbarWrapper>
            <NavbarBrand color="white">md-tailwind</NavbarBrand>
            <NavbarToggler
              color="white"
              onClick={() => setOpenNavbar(!openNavbar)}
            />
          </NavbarWrapper>

          <Collapse open={openNavbar}>
            <Nav>
              <Link href="documentation/react/alerts">
                <a
                  className="text-white relative overflow-hidden p-4 flex gap-1 items-center text-xs uppercase font-medium leading rounded-lg"
                  data-md-ripple-light={true}
                >
                  Component
                </a>
              </Link>
              <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
                github
              </NavItem>
              <NavItem color="white" href="#navbar" data-md-ripple-light={true}>
                premium themes
              </NavItem>
            </Nav>
          </Collapse>
        </NavbarContainer>
      </Navbar>

      <div className="p-5">
        <div className="w-full h-96 flex justify-center items-center">
          <div className="container text-center mx-auto">
            <H1>MD Tailwind</H1>
            <p className="text-lg font-light leading-relaxed mb-4">
              Easy to use React Tailwind CSS components
            </p>

            <div className="flex justify-center gap-4 mt-8">
              <Buttons color="blueGray" data-md-ripple-light={true}>
                github
              </Buttons>

              <Link href="/documentation/react/alerts">
                <a>
                  <Buttons color="lightBlue" data-md-ripple-light={true}>
                    components
                  </Buttons>
                </a>
              </Link>
              <Buttons color="teal" data-md-ripple-light={true}>
                premium themes
              </Buttons>
            </div>
          </div>
        </div>

        <div className="w-full md:p-10 sm:p-5">
          <div className="container mx-auto lg:px-72">
            <div className="bg-light-blue-50 px-5 py-4 rounded-lg">
              <h1 className="text-2xl text-blue-500">Installation</h1>
            </div>

            <div className="mt-16">
              <div className="mb-16">
                <h1 className="font-light text-2xl text-gray-700 mb-2">NPM</h1>
                <Paragraph color="gray">Install MD Tailwind via NPM</Paragraph>

                <SyntaxHighlighter
                  language="jsx"
                  style={shadesOfPurple}
                  customStyle={{
                    fontSize: '0.875rem',
                    padding: '16px 20px',
                    borderRadius: '0.5rem',
                  }}
                >
                  npm i --save @md-tailwind
                </SyntaxHighlighter>
              </div>

              <duv>
                <Paragraph color="gray">
                  Import the components you need
                </Paragraph>

                <div className="border border-solid border-gray-300 rounded-lg my-4 p-4 pt-6 relative">
                  <h4 className="text-gray-700 mb-2">Example</h4>
                  <Buttons color="lightBlue" data-md-ripple-light={true}>
                    Button
                  </Buttons>

                  <div className="docs-code-preview mt-8">
                    <SyntaxHighlighter
                      language="jsx"
                      style={shadesOfPurple}
                      customStyle={{
                        fontSize: '0.875rem',
                        padding: '16px 20px !important',
                        borderRadius: '0.5rem',
                      }}
                    >
                      {`import React from "react";
import Buttons from "@md-tailwind/react/Buttons";
import "@md-ripple-effect";

export default function Buttons() {
  return (
    <Buttons
      color="lightBlue"
      data-md-ripple-light={true}
    >
      Button
    </Buttons>
  )
}`}
                      ;
                    </SyntaxHighlighter>
                  </div>
                </div>
              </duv>
            </div>

            <div className="bg-light-blue-50 px-5 py-4 mt-16 rounded-lg">
              <h1 className="text-2xl text-blue-500">About the Project</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
