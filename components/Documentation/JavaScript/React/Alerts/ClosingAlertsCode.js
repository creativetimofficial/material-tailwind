import React from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Buttons from 'components/Buttons/Buttons';

const colors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-500',
  lightGreen: 'bg-light-green-500',
  green: 'bg-green-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  lightBlue: 'bg-light-blue-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  deepPurple: 'bg-deep-purple-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500',
};

export default class ClosingAlertsCode extends React.Component {
  state = {
    color: 'pink',
    showAlert: true,
    type: 'react',
  };

  closeAlert(e) {
    let delay;

    const parentClassName = e.target.parentNode.parentNode;

    parentClassName.classList.add('opacity-0');

    Array.from(parentClassName.classList).map((el) =>
      el.includes('duration') ? (delay = el.split('-')[1]) : null,
    );

    setTimeout(
      () => this.setState({ showAlert: false }),
      delay ? parseInt(delay, 10) + 100 : 250,
    );
  }

  onFrameworkClick = (type) => {
    switch (type) {
      case 'react':
        break;
      case 'angular':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/angular/alerts';
        break;
      case 'html':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/javascript/alerts';
        break;
      case 'vue':
        window.location =
          '/learning-lab/tailwind-starter-kit#/documentation/vue/alerts';
        break;
      default:
        this.setState({ showModal: true, modalText: type });
        break;
    }
  };
  render() {
    let codeToShow = `import React from "react";
import ClosingAlerts from "@md-tailwind/react/ClosingAlerts";

export default function ClosingAlerts() {
  return (
    <>
      <ClosingAlerts key={key} color="${this.state.color}">MD Tailwind Closing Alerts</ClosingAlerts>
    </>
  );
}`;

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
          {this.state.showAlert ? (
            <div
              className={`flex items-center gap-3 text-white p-4 pr-12 border-0 rounded relative mb-4 ${
                colors[this.state.color]
              } transition-all duration-300`}
            >
              <span className="font-medium uppercase">{this.state.color}!</span>{' '}
              This is a {this.state.color.toLowerCase()} closing alert - check
              it out!
              <button
                className="absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none"
                onClick={(e) => this.closeAlert(e)}
              >
                <span className="leading-none text-4xl">&times;</span>
              </button>
            </div>
          ) : (
            <Buttons
              color={this.state.color}
              onClick={() => this.setState({ showAlert: true })}
            >
              Revert Changes
            </Buttons>
          )}
        </DocsSnippet>
      </>
    );
  }
}
