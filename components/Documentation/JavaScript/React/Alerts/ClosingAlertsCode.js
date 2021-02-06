import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class ClosingAlertsCode extends React.Component {
  state = {
    color: 'pink',
    showAlert: true,
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

    const Alert = ({ color }) => {
      const [showAlert, setShowAlert] = React.useState(true);
      return (
        <>
          {showAlert ? (
            <div
              className={
                "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
                color +
                "-500"
              }
            >
              <span className="material-icons mr-4 align-middle">notifications</span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">{color}!</b> {text}
              </span>
              <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={() => setShowAlert(false)}
              >
                <span>×</span>
              </button>
            </div>
          ) : null}
        </>
      );
    };

    export default function ClosingAlert() {
      return (
        <>
          return <Alert color="${this.state.color}" text="This is a ${this.state.color} alert - check it out!" />;
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
              className={
                'text-white px-6 py-4 border-0 rounded relative mb-4 bg-' +
                this.state.color +
                '-500'
              }
            >
              <span className="material-icons mr-4 align-middle">
                notifications
              </span>
              <span className="inline-block align-middle mr-8">
                <b className="capitalize">{this.state.color}!</b> This is a{' '}
                {this.state.color} alert - check it out!
              </span>
              <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={() => this.setState({ showAlert: false })}
              >
                <span>×</span>
              </button>
            </div>
          ) : (
            <button
              className={
                'bg-' +
                this.state.color +
                '-500 text-white active:bg-' +
                this.state.color +
                '-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
              }
              type="button"
              onClick={() => this.setState({ showAlert: true })}
            >
              Revert changes
            </button>
          )}
        </DocsSnippet>
      </>
    );
  }
}
