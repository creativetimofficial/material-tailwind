import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class LabelsCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<span ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-xs font-semibold inline-block py-1 px-2 uppercase ` +
      (this.props.round ? "rounded-full" : "rounded") +
      ` text-` +
      this.state.color +
      `-600 bg-` +
      this.state.color +
      `-200 uppercase last:mr-0 mr-1">
  ` +
      this.state.color +
      `
</span>`;
    return (
      <>
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={this.state.color}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={color => this.setState({ color: color })}
          onFrameworkClick={type => this.setState({ type: type })}
        >
          <span
            className={
              "text-xs font-semibold inline-block py-1 px-2 uppercase " +
              (this.props.round ? "rounded-full" : "rounded") +
              " text-" +
              this.state.color +
              "-600 bg-" +
              this.state.color +
              "-200 uppercase last:mr-0 mr-1"
            }
          >
            {this.state.color}
          </span>
        </DocsSnippet>
      </>
    );
  }
}
