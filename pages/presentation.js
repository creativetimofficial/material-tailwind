import React from "react";
import Link from "next/link";
import IndexNavbar from "pagesComponents/IndexNavbar";
import IndexFooter from "pagesComponents/IndexFooter";
import Button from "components/Button/Button";
import Paragraph from "components/Typography/Paragraph";
import InputIcon from "components/Input/InputIcon";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Presentation() {
  return (
    <>
      <IndexNavbar />
      <section className="header relative items-center flex">
        <div className="container max-w-7xl mx-auto">
          <div className="w-full px-4 text-center">
            <img
              src={require("assets/img/material-tailwind-logo.png")}
              alt="Material Tailwind Logo"
              className="w-48 mx-auto my-16"
            />
            <h2 className="font-semibold text-6xl text-blue-gray-900">
              Material Tailwind
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-gray-700 md:w-9/12 mx-auto">
              @material-tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It features multiple React
              components, all written with Tailwind CSS classes and Material
              Design guidelines. Coming soon components for VueJS, Angular and
              many more.
            </p>

            <div className="bg-white py-8 mt-8 w-full mx-auto border border-t border-b border-r-0 border-l-0 md:px-8 lg:px-36 md:w-9/12">
              <h1 className="text-2xl font-medium text-gray-900 mb-4">
                Subscribe to our Newsletter
              </h1>

              <p className="text-gray-700 mb-8">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>

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
                href="https://github.com/creativetimofficial/md-tailwind"
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

      <section className="pb-36 bg-white" id="how-to-use">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-gray-900">Installation</h2>
          <hr className="border border-t-0 border-r-0 border-l-0 border-b-1 border-gray-200 my-4" />

          <div className="mt-16">
            <div className="mb-16">
              <h1 className="font-light text-2xl text-gray-700 mb-2">NPM</h1>
              <Paragraph color="gray">
                Install Material Tailwind via NPM
              </Paragraph>

              <SyntaxHighlighter language="html" style={a11yDark}>
                npm i -E @material-tailwind/react
              </SyntaxHighlighter>
            </div>

            <div className="mb-16">
              <h1 className="font-light text-2xl text-gray-700 mb-2">Yarn</h1>
              <Paragraph color="gray">
                Install Material Tailwind via Yarn
              </Paragraph>

              <SyntaxHighlighter language="html" style={a11yDark}>
                yarn add @materia-tailwind/react -E
              </SyntaxHighlighter>
            </div>

            <duv>
              <Paragraph color="gray">Import the components you need</Paragraph>

              <div className="border border-solid border-gray-300 rounded-lg my-4 p-4 pt-6 relative">
                <h4 className="text-gray-700 mb-2">Example</h4>
                <Button color="lightBlue" ripple="light">
                  Button
                </Button>

                <div className="docs-code-preview mt-8">
                  <SyntaxHighlighter language="jsx" style={a11yDark}>
                    {`import React from "react";
import Button from "@material-tailwind/react/Button";

export default function Button() {
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
            </duv>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blue-gray-50">
        <div className="container max-w-7xl mx-auto">
          <div className="-mt-20 absolute top-0 bottom-auto left-0 right-0 w-full h-20">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blue-gray-50 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-light-blue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-xl"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-16"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-light-blue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great for your awesome project
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Putting together a page has never been easier than
                      matching together pre-made components. From landing pages
                      presentation to login areas, you can easily customise and
                      built your pages.
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-white">
                          <i className="fas fa-sitemap"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-medium text-gray-900">
                          CSS Components
                        </h6>
                        <p className="mb-4 text-gray-700 font-light">
                          Material Tailwind comes with a huge number of Fully
                          Coded CSS components.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-white">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-medium text-gray-900">
                          JavaScript Components
                        </h6>
                        <p className="mb-4 text-gray-700 font-light">
                          At the moment Material Tailwind only features React
                          components, and in the near future it will future
                          VueJS and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-white">
                          <i className="fas fa-newspaper"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-medium text-gray-900">
                          Pages
                        </h6>
                        <p className="mb-4 text-gray-700 font-light">
                          This extension also comes with 3 sample pages. They
                          are fully coded so you can start working instantly.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-white">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-medium text-gray-900">
                          Documentation
                        </h6>
                        <p className="mb-4 text-gray-700 font-light">
                          Built by developers for developers. You will love how
                          easy is to to work with Material Tailwind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                  <i className="fas fa-sitemap text-xl"></i>
                </div>
                <h3 className="text-gray-900 text-3xl mb-2 font-medium leading-normal">
                  CSS Components
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Every element that you need in a product comes built in as a
                  component. All components fit perfectly with each other and
                  can have different colours.
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Button
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Inputs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Labels
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Pagination
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Progressbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Typography
                  </span>
                </div>
                <a
                  href="#css"
                  className="font-bold text-blue-gray-900 hover:text-blue-gray-700 transition-all"
                >
                  View All{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </div>

              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    alt="..."
                    src={require("assets/img/component-btn.png")}
                    className="w-full align-middle rounded absolute shadow-lg z-20"
                    style={{
                      maxWidth: "100px",
                      left: "145px",
                      top: "-60px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/component-profile-card.png")}
                    className="w-full align-middle rounded-lg absolute shadow-lg"
                    style={{
                      maxWidth: "210px",
                      left: "260px",
                      top: "-160px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/component-info-card.png")}
                    className="w-full align-middle rounded-lg absolute shadow-lg z-10"
                    style={{
                      maxWidth: "180px",
                      left: "40px",
                      top: "-255px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/component-info-2.png")}
                    className="w-full align-middle rounded-lg absolute shadow-2xl"
                    style={{
                      maxWidth: "200px",
                      left: "-50px",
                      top: "0",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/components-menu.png")}
                    className="w-full align-middle rounded absolute shadow-lg"
                    style={{
                      maxWidth: "580px",
                      left: "-20px",
                      top: "210px",
                    }}
                  />
                  <img
                    alt="..."
                    src={require("assets/img/component-btn-pink.png")}
                    className="w-full align-middle rounded absolute shadow-xl"
                    style={{
                      maxWidth: "120px",
                      left: "195px",
                      top: "95px",
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
                      <div className="bg-orange-900 shadow-xl rounded-lg text-center p-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Svelte
                        </p>
                      </div>
                    </a>
                    <Link href="/documentation/react/alerts">
                      <a>
                        <div className="bg-light-blue-500 shadow-xl rounded-lg text-center p-8 mt-8">
                          <img
                            alt="..."
                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                          />
                          <p className="text-lg text-white mt-4 font-semibold">
                            ReactJS
                          </p>
                        </div>
                      </a>
                    </Link>
                    <a href="#nextjs">
                      <div className="bg-gray-900 shadow-lg rounded-xl text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          NextJS
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <a href="#javascript">
                      <div className="bg-yellow-600 shadow-xl rounded-lg text-center p-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          JavaScript
                        </p>
                      </div>
                    </a>
                    <a href="#angular">
                      <div className="bg-red-700 shadow-xl rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Angular
                        </p>
                      </div>
                    </a>
                    <a href="#vue">
                      <div className="bg-green-500 shadow-xl rounded-lg text-center p-8 mt-8">
                        <img
                          alt="..."
                          className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                        />
                        <p className="text-lg text-white mt-4 font-semibold">
                          Vue.js
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                  <i className="fas fa-drafting-compass text-xl"></i>
                </div>
                <h3 className="text-gray-900 text-3xl mb-2 font-medium leading-normal">
                  Javascript Components
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  In order to create a great User Experience some components
                  require JavaScript. In this way you can manipulate the
                  elements on the page and give more options to your users.
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  We created a set of Components that are dynamic and come to
                  help you.
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Alerts
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Dropdowns
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Menus
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Modals
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Navbars
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Popovers
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Tabs
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-blue-gray-700 bg-white last:mr-0 mr-2 mt-2">
                    Tooltips
                  </span>
                </div>
                <Link href="/documentation/react/alerts">
                  <a className="font-bold text-blue-gray-900 hover:text-blue-gray-700 transition-all">
                    View all{" "}
                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                    <i className="fas fa-file-alt text-xl"></i>
                  </div>
                  <h3 className="text-gray-900 text-3xl font-medium">
                    Complex Documentation
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700 font-light">
                    This extension comes a lot of fully coded examples that help
                    you get started faster. You can adjust the colors and also
                    the programming language. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-gray-700 bg-gray-100 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-700 font-light">
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-gray-700 bg-gray-100 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-700 font-light">
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-gray-700 bg-gray-100 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-700 font-light">
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  src={require("assets/img/documentation-page.png")}
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
              <div className="text-blue-gray-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-medium leading-normal text-white">
                Open Source
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blue-gray-200">
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
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blue-gray-200">
                Get it free on Github and please help us spread the news with a
                Star!
              </p>
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
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-50 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-xl -mt-64 py-24 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="text-gray-900 font-medium text-3xl mt-4">
                Do you love Material Tailwind?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-4">
                Cause if you do, it can be yours now. Hit the button below to
                navigate you to the documentation. Build a new web app or give
                an old project a new look!
              </p>
              <div className="flex justify-center gap-4 mt-10">
                <Link href="/documentation/quick-start">
                  <a>
                    <Button color="lightBlue" size="lg" ripple="light">
                      Get started
                    </Button>
                  </a>
                </Link>
                <a
                  href="https://github.com/creativetimofficial/md-tailwind"
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
