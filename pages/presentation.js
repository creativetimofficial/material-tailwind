import React from "react";
import Link from "next/link";
import Header from "components/Documentation/Header";
import IndexNavbar from "pagesComponents/IndexNavbar";
import IndexFooter from "pagesComponents/IndexFooter";
import H1 from "components/Typography/Heading1";
import H4 from "components/Typography/Heading4";
import H5 from "components/Typography/Heading5";
import H6 from "components/Typography/Heading6";
import LeadText from "components/Typography/LeadText";
import Paragraph from "components/Typography/Paragraph";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import InputIcon from "components/Input/InputIcon";
import PresentationCard from "pagesComponents/PresentationCard";
import PresentationInfoCard from "pagesComponents/PresentationInfoCard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Presentation() {
  return (
    <>
      <Header title="Presentation" />
      <IndexNavbar />

      <section className="header relative items-center flex">
        <div className="container max-w-7xl mx-auto">
          <div className="w-full px-4 text-center">
            <img
              src={require("assets/img/material-tailwind-logo.png")}
              alt="Material Tailwind Logo"
              className="w-48 mx-auto my-16"
            />
            <H1 color="gray">Material Tailwind</H1>
            <div className="md:w-9/12 mx-auto">
              <LeadText color="blueGray" style={{ marginTop: "0" }}>
                @material-tailwind is an easy to use components library for
                Tailwind CSS and Material Design. It features multiple React
                components, all written with Tailwind CSS classes and Material
                Design guidelines. Coming soon components for VueJS, Angular and
                many more.
              </LeadText>
            </div>

            <div className="bg-white py-8 mt-8 w-full mx-auto border border-t border-b border-r-0 border-l-0 md:px-8 lg:px-36 md:w-9/12">
              <H5 color="gray">Subscribe to our Newsletter</H5>

              <Paragraph color="blueGray">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </Paragraph>

              <form
                action="https://material-tailwind.us1.list-manage.com/subscribe/post?u=e97df4875fc1b2fb28f609b88&amp;id=628d9b1722"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                  <InputIcon
                    type="email"
                    placeholder="Enter Your Email Address"
                    color="lightBlue"
                    size="lg"
                    outline
                    iconName="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    required
                  />
                  <div className="w-full md:w-48">
                    <Button
                      color="lightBlue"
                      size="lg"
                      ripple="light"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                      }}
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-12 flex flex-col justify-center gap-4 mb-24 md:flex-row">
              <a href="#how-to-use">
                <Button
                  color="teal"
                  size="lg"
                  ripple="light"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  How to use
                </Button>
              </a>
              <Link href="/documentation/quick-start">
                <a>
                  <Button
                    color="lightBlue"
                    size="lg"
                    ripple="light"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Get started
                  </Button>
                </a>
              </Link>
              <a
                href="https://github.com/creativetimofficial/material-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="blueGray"
                  size="lg"
                  ripple="light"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Github Star
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white" id="how-to-use">
        <div className="container max-w-7xl mx-auto px-4">
          <H5 color="gray">Installation</H5>
          <hr className="border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 my-4" />

          <div className="mt-16">
            <div className="mb-16">
              <H6 color="gray">NPM</H6>
              <Paragraph color="gray">
                Install Material Tailwind via NPM
              </Paragraph>

              <SyntaxHighlighter language="html" style={a11yDark}>
                npm i -E @material-tailwind/react
              </SyntaxHighlighter>
            </div>

            <div className="mb-16">
              <H6 color="gray">Yarn</H6>
              <Paragraph color="gray">
                Install Material Tailwind via Yarn
              </Paragraph>

              <SyntaxHighlighter language="html" style={a11yDark}>
                yarn add @materia-tailwind/react -E
              </SyntaxHighlighter>
            </div>

            <div className="mb-16">
              <H6 color="gray">Import Style Sheets</H6>
              <Paragraph color="gray">
                Import the{" "}
                <code className="text-light-blue-500">tailwind.css</code> and{" "}
                <code className="text-light-blue-500">material-icons.css</code>{" "}
                into your <code className="text-light-blue-500">app.js</code>{" "}
                file. Make sure to import the{" "}
                <code className="text-light-blue-500">tailwind.css</code> style
                sheet after all other style sheets.
              </Paragraph>

              <SyntaxHighlighter language="jsx" style={a11yDark}>
                {`import "material-design-icons/iconfont/material-icons.css";
import "@material-tailwind/react/tailwind.css";`}
              </SyntaxHighlighter>
            </div>

            <div>
              <H6 color="gray">Example</H6>
              <Paragraph color="gray">Import the components you need</Paragraph>

              <div className="border border-solid border-gray-300 rounded-lg my-4 p-4 pt-6 relative">
                <div className="pb-4">
                  <Button color="lightBlue" ripple="light">
                    Button
                  </Button>
                </div>

                <SyntaxHighlighter language="jsx" style={a11yDark}>
                  {`import React from "react";
import Button from "@material-tailwind/react/Button";

export default function Example() {
return (
<Button
  color="lightBlue"
  ripple="light"
>
  Button
</Button>
)
}`}
                  ;
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 py-28 relative bg-blue-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="lg:w-4/12 px-12 md:px-4 mr-auto ml-auto relative z-30">
                <PresentationCard />
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <PresentationInfoCard
                      icon="fas fa-sitemap"
                      title="CSS Components"
                    >
                      Material Tailwind comes with a huge number of Fully Coded
                      CSS components.
                    </PresentationInfoCard>
                    <PresentationInfoCard
                      icon="fas fa-drafting-compass"
                      title="JavaScript Components"
                    >
                      Material Tailwind only features React components, but in
                      the near future it will future more.
                    </PresentationInfoCard>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <PresentationInfoCard
                      icon="fas fa-newspaper"
                      title="Templates"
                    >
                      Material Tailwind comes with 3 fully coded sample pages.
                      You can start working instantly.
                    </PresentationInfoCard>
                    <PresentationInfoCard
                      icon="fas fa-file-alt"
                      title="Documentation"
                    >
                      Built by developers for developers. You will love how easy
                      is to work with Material Tailwind.
                    </PresentationInfoCard>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                  <Icon family="font-awesome" name="fas fa-sitemap" size="xl" />
                </div>
                <H4 color="gray">CSS Components</H4>
                <LeadText color="blueGray">
                  Every element that you need in a product comes built in as a
                  component. All components fit perfectly with each other and
                  can have different colours.
                </LeadText>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Button
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Inputs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Labels
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Pagination
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Progressbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Typography
                  </span>
                </div>
                <Link href="/documentation/react/buttons/filled">
                  <a className="font-bold text-blue-gray-900 hover:text-blue-gray-800 transition-all flex items-center gap-2">
                    View All{" "}
                    <Icon family="font-awesome" name="fas fa-angle-right" />
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    alt="..."
                    src={require("assets/img/button.svg")}
                    className="w-full align-middle rounded absolute shadow-lg z-20"
                    style={{
                      maxWidth: "100px",
                      left: "100px",
                      top: "125px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/card.svg")}
                    className="w-full align-middle rounded-lg absolute"
                    style={{
                      maxWidth: "280px",
                      left: "210px",
                      top: "-210px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/dropdown.svg")}
                    className="w-full align-middle rounded-lg absolute z-10"
                    style={{
                      maxWidth: "180px",
                      left: "0",
                      top: "-100px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/menu.svg")}
                    className="w-full align-middle rounded-lg absolute shadow-lg"
                    style={{
                      maxWidth: "580px",
                      left: "0",
                      top: "210px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center pt-32">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                <div className="justify-center flex flex-wrap relative">
                  <div className="my-4 w-full lg:w-6/12 px-4">
                    <a href="#svelte">
                      <div className="bg-orange-900 shadow-xl rounded-xl text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                        />
                        <div className="text-white mt-4">
                          <H6>Svelte</H6>
                        </div>
                      </div>
                    </a>
                    <Link
                      href="/documentation/react/alerts"
                      as={
                        (process.env.NODE_ENV === "production"
                          ? "/material-tailwind"
                          : "") + "/documentation/react/alerts"
                      }
                    >
                      <a>
                        <div className="bg-light-blue-500 shadow-xl rounded-xl text-center p-8 mt-8">
                          <img
                            alt="..."
                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                          />
                          <div className="text-white mt-4">
                            <H6>ReactJS</H6>
                          </div>
                        </div>
                      </a>
                    </Link>
                    <a href="#nextjs">
                      <div className="bg-gray-900 shadow-xl rounded-xl text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                        />
                        <div className="text-white mt-4">
                          <H6>NextJS</H6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <a href="#js">
                      <div className="bg-yellow-600 shadow-xl rounded-xl text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                        />
                        <div className="text-white mt-4">
                          <H6>JavaScript</H6>
                        </div>
                      </div>
                    </a>
                    <a href="#angular">
                      <div className="bg-red-700 shadow-xl rounded-xl text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                        />
                        <div className="text-white mt-4">
                          <H6>Angular</H6>
                        </div>
                      </div>
                    </a>
                    <a href="#vue">
                      <div className="bg-green-500 shadow-xl rounded-xl text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                        />
                        <div className="text-white mt-4">
                          <H6>VueJS</H6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                  <Icon
                    family="font-awesome"
                    name="fas fa-drafting-compass"
                    size="xl"
                  />
                </div>
                <H4 color="gray">Javascript Components</H4>
                <LeadText color="blueGray">
                  In order to create a great User Experience some components
                  require JavaScript. In this way you can manipulate the
                  elements on the page and give more options to your users.
                </LeadText>
                <LeadText color="blueGray">
                  We created a set of Components that are dynamic and come to
                  help you.
                </LeadText>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Alerts
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Dropdowns
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Modals
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Popovers
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Tabs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-800 bg-white last:mr-0 mr-2 mt-2">
                    Tooltips
                  </span>
                </div>
                <Link href="/documentation/react/alerts">
                  <a className="font-bold text-blue-gray-900 hover:text-blue-gray-800 transition-all flex items-center gap-2">
                    View All{" "}
                    <Icon family="font-awesome" name="fas fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="items-center flex flex-wrap pt-48">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                    <Icon
                      family="font-awesome"
                      name="fas fa-file-alt"
                      size="xl"
                    />
                  </div>
                  <H4 color="gray">Complex Documentation</H4>
                  <LeadText color="blueGray">
                    This extension comes a lot of fully coded examples that help
                    you get started faster. You can adjust the colors and also
                    the programming language. You can change the text and images
                    and you're good to go.
                  </LeadText>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <span className="text-xs font-semibold w-7 h-7 grid place-items-center uppercase rounded-full text-blue-gray-800 bg-gray-100 mr-3">
                          <Icon
                            family="font-awesome"
                            name="fas fa-fingerprint"
                          />
                        </span>
                        <Paragraph color="blueGray" style={{ margin: "0" }}>
                          Built by Developers for Developers
                        </Paragraph>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <span className="text-xs font-semibold w-7 h-7 grid place-items-center uppercase rounded-full text-blue-gray-800 bg-gray-100 mr-3">
                          <Icon family="font-awesome" name="fab fa-html5" />
                        </span>
                        <Paragraph color="blueGray" style={{ margin: "0" }}>
                          Carefully crafted code for Components
                        </Paragraph>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <span className="text-xs font-semibold w-7 h-7 grid place-items-center uppercase rounded-full text-blue-gray-800 bg-gray-100 mr-3">
                          <Icon
                            family="font-awesome"
                            name="far fa-paper-plane"
                          />
                        </span>
                        <Paragraph color="blueGray" style={{ margin: "0" }}>
                          Dynamic Javascript Components
                        </Paragraph>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-xl shadow-xl"
                  src={require("assets/img/documentation.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-gray-800 overflow-hidden">
        <div className="container max-w-7xl mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-8/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                <Icon
                  family="font-awesome"
                  name="fas fa-code-branch"
                  size="xl"
                />
              </div>
              <div className="text-white">
                <H4>Open Source</H4>
              </div>
              <div className="text-blue-gray-200">
                <LeadText>
                  Since{" "}
                  <a
                    href="https://tailwindcss.com/?ref=material-tailwind"
                    className="text-blue-gray-50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tailwind CSS
                  </a>{" "}
                  is an open source project we wanted to <br />
                  continue this movement too. You can give this version a try to
                  feel <br />
                  the design and also test the quality of the code!
                </LeadText>
                <LeadText>
                  Get it free on Github and please help us spread the news with
                  a Star!
                </LeadText>
              </div>
              <a
                href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block"
              >
                <Button color="blueGray" size="lg" ripple="light">
                  Github Star
                </Button>
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i
                className="fab fa-github text-blue-gray-900 absolute -top-150-px -right-100 opacity-50"
                style={{ fontSize: "50rem", top: "-150px", right: "-320px" }}
              ></i>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-gray-50 relative pt-32">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-xl -mt-64 py-24 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-6xl text-center mb-5">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <H4 color="gray">Do you love Material Tailwind?</H4>
              <LeadText color="blueGray">
                Cause if you do, it can be yours now. Hit the button below to
                navigate you to the documentation. Build a new web app or give
                an old project a new look!
              </LeadText>
              <div className="flex justify-center gap-4 mt-10">
                <Link href="/documentation/quick-start">
                  <a>
                    <Button color="lightBlue" size="lg" ripple="light">
                      Get started
                    </Button>
                  </a>
                </Link>
                <a
                  href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="blueGray" size="lg" ripple="light">
                    Help With a Star
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndexFooter />
    </>
  );
}
