import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class TabsCode extends React.Component {
  state = {
    color: 'pink',
    openTab: 1,
    type: 'react',
  };
  onFrameworkClick = (type) => {
    switch (type) {
      case 'react':
        break;
      case 'angular':
        if (this.props.icons) {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/angular/tabs/icons';
        } else {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/angular/tabs/text';
        }
        break;
      case 'vue':
        if (this.props.icons) {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/vue/tabs/icons';
        } else {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/vue/tabs/text';
        }
        break;
      case 'html':
        if (this.props.icons) {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/javascript/tabs/icons';
        } else {
          window.location =
            '/learning-lab/tailwind-starter-kit#/documentation/javascript/tabs/text';
        }
        break;
      default:
        this.setState({ showModal: true, modalText: type });
        break;
    }
  };
  render() {
    let codeToShow =
      `import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "flex items-center justify-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                ` +
      (this.props.icons
        ? `<span className="material-icons align-middle text-base mr-1">person</span> `
        : ``) +
      `Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "flex items-center justify-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                ` +
      (this.props.icons
        ? `<span className="material-icons align-middle text-base mr-1">settings</i> `
        : ``) +
      ` Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "flex items-center justify-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                ` +
      (this.props.icons
        ? `<span className="material-icons align-middle text-base mr-1">format_list_numbered</i> `
        : ``) +
      ` Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      return <Tabs color="` +
      this.state.color +
      `" />;
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
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      'flex items-center justify-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal ' +
                      (this.state.openTab === 1
                        ? 'text-white bg-' + this.state.color + '-600'
                        : 'text-' + this.state.color + '-600 bg-white')
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ openTab: 1 });
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    {this.props.icons ? (
                      <span className="material-icons align-middle text-base mr-1">
                        person
                      </span>
                    ) : null}{' '}
                    Profile
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      'flex items-center justify-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal ' +
                      (this.state.openTab === 2
                        ? 'text-white bg-' + this.state.color + '-600'
                        : 'text-' + this.state.color + '-600 bg-white')
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ openTab: 2 });
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    {this.props.icons ? (
                      <span className="material-icons align-middle text-base mr-1">
                        settings
                      </span>
                    ) : null}{' '}
                    Settings
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      'flex items-center justify-center text-xs font-bold uppercase px-5 py-3 shadow-lg rounded leading-normal ' +
                      (this.state.openTab === 3
                        ? 'text-white bg-' + this.state.color + '-600'
                        : 'text-' + this.state.color + '-600 bg-white')
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({ openTab: 3 });
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    {this.props.icons ? (
                      <span className="material-icons align-middle text-base mr-1">
                        format_list_numbered
                      </span>
                    ) : null}{' '}
                    Options
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 py-5 flex-auto">
                  {/* Tab panes */}
                  <div className="tab-content tab-space">
                    <div
                      className={this.state.openTab === 1 ? 'block' : 'hidden'}
                      id="link1"
                    >
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits.
                        <br />
                        <br /> Dramatically visualize customer directed
                        convergence without revolutionary ROI.
                      </p>
                    </div>
                    <div
                      className={this.state.openTab === 2 ? 'block' : 'hidden'}
                      id="link2"
                    >
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas.
                        <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </div>
                    <div
                      className={this.state.openTab === 3 ? 'block' : 'hidden'}
                      id="link3"
                    >
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                        <br />
                        <br /> Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
