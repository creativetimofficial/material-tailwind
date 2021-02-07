import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class NavbarSearchCode extends React.Component {
  state = {
    color: 'pink',
    type: 'react',
    navbarOpen: false,
  };
  onFrameworkClick = (type) => {
    switch (type) {
      case 'html':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/javascript/navbars';
        break;
      case 'vue':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/vue/navbars';
        break;
      case 'react':
        break;
      case 'angular':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/angular/navbars';
        break;
      default:
        this.setState({ showModal: true, modalText: type });
        break;
    }
  };
  render() {
    let codeToShow =
      `import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-` +
      this.state.color +
      `-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              ` +
      this.state.color +
      `
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className="block lg:flex flex-grow items-center"
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="material-icons text-lg leading-lg text-white opacity-75">
                    facebook
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="material-icons text-lg leading-lg text-white opacity-75">
                    twitter
                  </span>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="relative flex w-full sm:w-4/12 md:w-2/12 flex-wrap items-stretch md:ml-auto">
              <div className="flex">
                <span
                  className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-` +
      this.state.color +
      `-600 rounded-full text-sm items-center rounded-r-none pl-2 py-1 text-` +
      this.state.color +
      `-800 border-r-0 placeholder-` +
      this.state.color +
      `-300"
                >
                  <span className="material-icons">facebook</span>
                </span>
              </div>
              <input
                type="text"
                className="px-2 py-1 h-8 border border-solid border-` +
      this.state.color +
      `-600 rounded-full text-sm leading-snug text-` +
      this.state.color +
      `-700 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-` +
      this.state.color +
      `-300"
                placeholder="Search ` +
      this.state.color +
      `"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
`;
    return (
      <>
        {this.state.showModal ? (
          <>
            <div
              className="block overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => this.setState({ showModal: false })}
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded shadow-sm relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h5 className="text-2xl font-normal mt-0 mb-0 ">
                      Component not supported
                    </h5>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => this.setState({ showModal: false })}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="text-base leading-relaxed text-gray-600 font-normal mt-0 mb-4">
                      At the moment we do not support the choosen framework (
                      {this.state.modalText}) for this component.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={this.state.color}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={(color) => this.setState({ color: color })}
          onFrameworkClick={this.onFrameworkClick}
        >
          <nav
            className={
              'relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-' +
              this.state.color +
              '-500 mb-3'
            }
          >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                  href="#pablo"
                >
                  {this.state.color} Tailwind Starter Kit
                </a>
                <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                >
                  <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                  <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
              </div>
              <div
                className="block lg:flex flex-grow items-center"
                id="example-navbar-danger"
              >
                <ul className="flex flex-col lg:flex-row list-none mr-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="material-icons text-lg leading-lg text-white opacity-75">
                        star
                      </span>
                      <span className="ml-2">Share</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="material-icons text-lg leading-lg text-white opacity-75">
                        star
                      </span>
                      <span className="ml-2">Tweet</span>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="material-icons text-lg leading-lg text-white opacity-75">
                        star
                      </span>
                      <span className="ml-2">Pin</span>
                    </a>
                  </li>
                </ul>
                <div className="relative flex w-64 flex-wrap items-stretch md:ml-auto">
                  <div className="flex">
                    <span
                      className={`font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-${this.state.color}-600 bg-white rounded-full text-sm items-center rounded-r-none pl-3 py-1 text-${this.state.color}-800 border-r-0 placeholder-${this.state.color}-300`}
                    >
                      <span className="material-icons text-gray-500">
                        search
                      </span>
                    </span>
                  </div>
                  <input
                    type="text"
                    className={`px-2 py-5 h-8 w-16 border border-solid border-${this.state.color}-600 rounded-full text-sm leading-snug text-${this.state.color}-700 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-${this.state.color}-300`}
                    placeholder={`Search ${this.state.color}`}
                  />
                </div>
              </div>
            </div>
          </nav>
        </DocsSnippet>
      </>
    );
  }
}
