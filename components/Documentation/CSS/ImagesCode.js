import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class ImagesCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<div ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="flex flex-wrap justify-center">
  <div ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="w-6/12 sm:w-4/12 px-4">
    <img src="` +
      this.props.src +
      `" alt="..." ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="` +
      this.props.type +
      ` max-w-full h-auto align-middle border-none" />
  </div>
</div>`;
    return (
      <>
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={false}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={color => this.setState({ color: color })}
          onFrameworkClick={type => this.setState({ type: type })}
        >
          <div className="flex flex-wrap justify-center">
            <div className="w-6/12 sm:w-4/12 px-4">
              <img
                src={this.props.src}
                alt="..."
                className={
                  this.props.type +
                  " max-w-full h-auto align-middle border-none"
                }
              />
            </div>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
