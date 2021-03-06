import React from 'react';
import DocsSnippet from 'components/Documentation/DocsSnippet.js';
import Alerts from 'components/Alerts/Alerts';

export default class AlertsCode extends React.Component {
  state = {
    color: 'pink',
    type: 'react',
  };

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
import Alerts from "@md-tailwind/react/Alerts";

export default function Alerts() {
  return (
    <>
      <Alerts key={key} color="${this.state.color}">MD Tailwind Alerts</Alerts>
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
          {/* blue-gray -> blueGray */}

          <Alerts color={this.state.color}>
            <span className="font-medium uppercase">{this.state.color}!</span>{' '}
            This is a {this.state.color.toLowerCase()} alert - check it out!
          </Alerts>
        </DocsSnippet>
      </>
    );
  }
}
