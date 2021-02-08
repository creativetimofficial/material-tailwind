import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class MenusCode extends React.Component {
  state = {
    color: 'pink',
    type: 'html',
  };
  render() {
    let codeToShow =
      `<div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="flex flex-wrap py-2">
  <div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="w-full px-4">
    <nav ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-` +
      this.state.color +
      `-500 rounded">
      <div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
            ` +
      this.state.color +
      ` Menu
          </a>
          <button ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="block relative w-6 h-px rounded-sm bg-white"></span>
            <span ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="flex lg:flex-grow items-center" id="example-navbar-info">
          <ul ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="flex flex-col lg:flex-row list-none ml-auto">
            <li ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="nav-item">
              <a ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                ` +
      (this.props.icons
        ? `<span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons text-2xl leading-lg text-white opacity-75">language</span>`
        : `Discover`) +
      `
              </a>
            </li>
            <li ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="nav-item">
              <a ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                ` +
      (this.props.icons
        ? `<span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons text-2xl leading-lg text-white opacity-75">person</span>`
        : `Profile`) +
      `
              </a>
            </li>
            <li ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="nav-item">
              <a ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                ` +
      (this.props.icons
        ? `<span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons text-2xl leading-lg text-white opacity-75">settings</span>`
        : `Settings`) +
      `
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>`;
    return (
      <>
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={this.state.color}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={(color) => this.setState({ color: color })}
          onFrameworkClick={(type) => this.setState({ type: type })}
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
                      {this.state.color} Menu
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
                    className="flex lg:flex-grow items-center"
                    id="example-navbar-info"
                  >
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                      <li className="nav-item">
                        <a
                          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                          href="#pablo"
                        >
                          {this.props.icons ? (
                            <span className="material-icons text-2xl leading-lg text-white opacity-75">
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
                            <span className="material-icons text-2xl leading-lg text-white opacity-75">
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
                            <span className="material-icons text-2xl leading-lg text-white opacity-75">
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
