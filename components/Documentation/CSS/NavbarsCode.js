import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

const text = ['Discover', 'Profile', 'Setting'];

const icons = ['star', 'star', 'star', 'star'];

const iconsText = [
  ['star', 'Share'],
  ['star', 'Tweet'],
  ['star', 'Pin'],
];

const iconsTextSearch = [
  ['star', null],
  ['star', 'Tweet'],
  [null, 'Settings'],
];

// const NavItem =

export default class NavbarsCode extends React.Component {
  state = {
    color: 'pink',
    type: 'html',
  };
  render() {
    let links = null;
    let linksCode = ``;
    switch (this.props.navbarsType) {
      case 'text':
        links = text.map((prop, key) => {
          linksCode +=
            `          <li ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="nav-item">
            <a ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              ` +
            prop +
            `
            </a>
          </li>\n`;
          return (
            <li className="nav-item" key={key}>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                {prop}
              </a>
            </li>
          );
        });
        break;
      case 'icons':
        links = icons.map((prop, key) => {
          linksCode +=
            `        <li ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="nav-item">
          <a ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <span ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="material-icons text-lg leading-lg text-white opacity-75">` +
            prop +
            `</span>
          </a>
        </li>\n`;
          return (
            <li className="nav-item" key={key}>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <span className="material-icons text-lg leading-lg text-white opacity-75">
                  {prop}
                </span>
              </a>
            </li>
          );
        });
        break;
      case 'icons-text':
        links = iconsText.map((prop, key) => {
          linksCode +=
            `        <li ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="nav-item">
          <a ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="material-icons text-lg leading-lg text-white opacity-75">` +
            prop[0] +
            `</i><span ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="ml-2">` +
            prop[1] +
            `</span>
          </a>
        </li>\n`;
          return (
            <li className="nav-item" key={key}>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="material-icons text-lg leading-lg text-white opacity-75">
                  {prop[0]}
                </i>
                <span className="ml-2">{prop[1]}</span>
              </a>
            </li>
          );
        });
        break;
      case 'search':
        links = iconsTextSearch.map((prop, key) => {
          linksCode +=
            `        <li ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="nav-item">
          <a ` +
            (this.state.type !== 'react' ? 'class' : 'className') +
            `="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            ` +
            (prop[0] !== null
              ? `<i ` +
                (this.state.type !== 'react' ? 'class' : 'className') +
                `="material-icons text-lg leading-lg text-white opacity-75">` +
                prop[0] +
                `</i>`
              : ``) +
            (prop[1] !== null
              ? `<span ` +
                (this.state.type !== 'react' ? 'class' : 'className') +
                `="ml-2">` +
                prop[1] +
                `</span>`
              : ``) +
            `
          </a>
        </li>\n`;
          return (
            <li className="nav-item" key={key}>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                {prop[0] !== null ? (
                  <i className="material-icons text-lg leading-lg text-white opacity-75">
                    person
                  </i>
                ) : null}{' '}
                {<span className="ml-2">{prop[1]}</span>}
              </a>
            </li>
          );
        });
        break;
      default:
        break;
    }
    let codeToShow =
      `<nav ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-` +
      this.state.color +
      `-500 mb-3">
  <div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
        ` +
      this.state.color +
      ` Color
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
      `="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="flex flex-col lg:flex-row list-none ` +
      (this.props.navbarsType === 'search' ? 'mr-auto' : 'ml-auto') +
      `">\n` +
      linksCode +
      `      </ul>` +
      (this.props.navbarsType === 'search'
        ? `\n      <div ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
        <div ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="flex">
          <span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-` +
          this.state.color +
          `-600 rounded-full text-sm ` +
          (this.state.color === 'gray'
            ? 'bg-white'
            : 'bg-' + this.state.color + '-100') +
          ` items-center rounded-r-none pl-2 py-1 text-` +
          this.state.color +
          `-800 border-r-0 placeholder-` +
          this.state.color +
          `-300">
            <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons">search</i>
          </span>
        </div>
        <input type="text" ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="px-2 py-1 h-8 border border-solid  border-` +
          this.state.color +
          `-600 rounded-full text-sm leading-snug text-` +
          this.state.color +
          `-700 ` +
          (this.state.color === 'gray'
            ? 'bg-white'
            : 'bg-' + this.state.color + '-100') +
          ` shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-` +
          this.state.color +
          `-300" placeholder="Search ` +
          this.state.color +
          `" />
      </div>`
        : ``) +
      `
    </div>
  </div>
</nav>`;
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
          <nav
            className={
              'relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-' +
              this.state.color +
              '-500 mb-3'
            }
          >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                  href="#pablo"
                >
                  {this.state.color} Color
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
                className="lg:flex flex-grow items-center"
                id="example-navbar-warning"
              >
                <ul
                  className={
                    'flex flex-col lg:flex-row list-none ' +
                    (this.props.navbarsType === 'search'
                      ? 'mr-auto'
                      : 'ml-auto')
                  }
                >
                  {links}
                </ul>
                {this.props.navbarsType === 'search' ? (
                  <div className="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
                    <div className="flex">
                      <span
                        className={
                          'font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-' +
                          this.state.color +
                          '-600 rounded-full text-sm ' +
                          (this.state.color === 'gray'
                            ? 'bg-white'
                            : 'bg-' + this.state.color + '-100') +
                          ' items-center rounded-r-none pl-2 py-1 text-' +
                          this.state.color +
                          '-800 border-r-0 placeholder-' +
                          this.state.color +
                          '-300'
                        }
                      >
                        <i className="material-icons">search</i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className={
                        'px-2 py-1 h-8 border border-solid  border-' +
                        this.state.color +
                        '-600 rounded-full text-sm leading-snug text-' +
                        this.state.color +
                        '-700 ' +
                        (this.state.color === 'gray'
                          ? 'bg-white'
                          : 'bg-' + this.state.color + '-100') +
                        ' shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-' +
                        this.state.color +
                        '-300'
                      }
                      placeholder={'Search ' + this.state.color}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </nav>
        </DocsSnippet>
      </>
    );
  }
}
