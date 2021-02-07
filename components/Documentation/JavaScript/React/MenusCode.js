import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class MenusCode extends React.Component {
  state = {
    color: 'pink',
    type: 'react',
    menuOpen: false,
  };
  onFrameworkClick = (type) => {
    switch (type) {
      case 'html':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/javascript/menus';
        break;
      case 'vue':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/vue/menus';
        break;
      case 'angular':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/angular/menus';
        break;
      case 'react':
        break;
      default:
        this.setState({ showModal: true, modalText: type });
        break;
    }
  };
  render() {
    let codeToShow =
      `import React from "react";

export default function Menu({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-` +
      this.state.color +
      `-500 rounded">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                  href="#pablo"
                >
                  ` +
      this.state.color +
      ` Starter Menu
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      ` +
      (this.props.icons
        ? `<i className="fas fa-globe text-lg leading-lg text-white opacity-75"></i>`
        : `Discover`) +
      `
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      ` +
      (this.props.icons
        ? `<i className="fas fa-user text-lg leading-lg text-white opacity-75"></i>`
        : `Profile`) +
      `
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="#pablo"
                    >
                      ` +
      (this.props.icons
        ? `<i className="fas fa-cog text-lg leading-lg text-white opacity-75"></i>`
        : `Settings`) +
      `
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
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
          <div className="flex flex-wrap py-2">
            <div className="w-full px-4">
              <nav
                className={
                  'relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-' +
                  this.state.color +
                  '-500 rounded'
                }
              >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                  <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                    <a
                      className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                      href="#pablo"
                    >
                      {this.state.color} Starter Menu
                    </a>
                    <button
                      className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                      type="button"
                      onClick={() =>
                        this.setState({ menuOpen: !this.state.menuOpen })
                      }
                    >
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                  <div
                    className={
                      'lg:flex flex-grow items-center' +
                      (this.state.menuOpen ? ' flex' : ' hidden')
                    }
                    id="example-navbar-info"
                  >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          {this.props.icons ? (
                            <span className="material-icons text-lg leading-lg text-white opacity-75">
                              language
                            </span>
                          ) : (
                            'Discover'
                          )}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          {this.props.icons ? (
                            <span className="material-icons text-lg leading-lg text-white opacity-75">
                              person
                            </span>
                          ) : (
                            'Profile'
                          )}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          {this.props.icons ? (
                            <span className="material-icons text-lg leading-lg text-white opacity-75">
                              settings
                            </span>
                          ) : (
                            'Settings'
                          )}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
