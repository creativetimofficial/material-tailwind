import React from 'react';
import { createPopper } from '@popperjs/core';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class DropdownsCode extends React.Component {
  state = {
    color: 'white',
    dropdownPopoverShow: false,
    type: 'react',
  };
  // dropdown props
  btnDropdownRef = React.createRef();
  popoverDropdownRef = React.createRef();
  openDropdownPopover = () => {
    new createPopper(
      this.btnDropdownRef.current,
      this.popoverDropdownRef.current,
      {
        placement: this.props.placement,
      },
    );
    this.setState({ dropdownPopoverShow: true });
  };
  closeDropdownPopover = () => {
    this.setState({ dropdownPopoverShow: false });
  };
  onFrameworkClick = (type) => {
    switch (type) {
      case 'react':
        break;
      case 'angular':
        if (this.props.placement === 'bottom-start') {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/angular/dropdown';
        } else {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/angular/dropup';
        }
        break;
      case 'html':
        if (this.props.placement === 'bottom-start') {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/javascript/dropdown';
        } else {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/javascript/dropup';
        }
        break;
      case 'vue':
        if (this.props.placement === 'bottom-start') {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/vue/dropdown';
        } else {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/vue/dropup';
        }
        break;
      default:
        this.setState({ showModal: true, modalText: type });
        break;
    }
  };
  render() {
    // bg colors
    let bgColor;
    this.state.color === 'white'
      ? (bgColor = 'bg-gray-800')
      : (bgColor = 'bg-' + this.state.color + '-500');
    let codeToShow =
      `import React from "react";
import Popper from "popper.js";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "` +
      this.props.placement +
      `"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 " +
                bgColor
              }
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === "white" ? "White Dropdown" : color + " Dropdown"}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg ` +
      (this.props.placement === 'top-end' ? 'mb-1' : 'mt-1') +
      `"
              }
              style={{ minWidth: "12rem" }}
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                href="#pablo"
                className={
                  "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent " +
                  (color === "white" ? " text-gray-800" : "text-white")
                }
                onClick={e => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="` +
      this.state.color +
      `" />
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
          <div className="flex flex-wrap">
            <div className="w-full sm:w-6/12 md:w-4/12 px-4">
              <div className="relative inline-flex align-middle w-full">
                <button
                  className={
                    'text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ' +
                    bgColor
                  }
                  style={{ transition: 'all .15s ease' }}
                  type="button"
                  ref={this.btnDropdownRef}
                  onClick={() => {
                    this.state.dropdownPopoverShow
                      ? this.closeDropdownPopover()
                      : this.openDropdownPopover();
                  }}
                >
                  {this.state.color === 'white'
                    ? 'White Dropdown'
                    : this.state.color + ' Dropdown'}
                </button>
                <div
                  ref={this.popoverDropdownRef}
                  className={
                    (this.state.dropdownPopoverShow ? 'block ' : 'hidden ') +
                    (this.state.color === 'white'
                      ? 'bg-white '
                      : bgColor + ' ') +
                    'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg ' +
                    (this.props.placement === 'top-end' ? 'mb-1' : 'mt-1')
                  }
                  style={{ minWidth: '12rem' }}
                >
                  <a
                    href="#pablo"
                    className={
                      'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                      (this.state.color === 'white'
                        ? ' text-gray-800'
                        : 'text-white')
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    Action
                  </a>
                  <a
                    href="#pablo"
                    className={
                      'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                      (this.state.color === 'white'
                        ? ' text-gray-800'
                        : 'text-white')
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </a>
                  <a
                    href="#pablo"
                    className={
                      'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                      (this.state.color === 'white'
                        ? ' text-gray-800'
                        : 'text-white')
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else here
                  </a>
                  <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
                  <a
                    href="#pablo"
                    className={
                      'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                      (this.state.color === 'white'
                        ? ' text-gray-800'
                        : 'text-white')
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    Seprated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
