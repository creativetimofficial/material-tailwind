import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class H5Code extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<h5 ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-2xl font-normal leading-normal mt-0 mb-2 text-` +
      this.state.color +
      `-800">
  Tailwind Starter Kit
</h5>`;
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
          <h5
            className={
              "text-2xl font-normal leading-normal mt-0 mb-2 text-" +
              this.state.color +
              "-800"
            }
          >
            Tailwind Starter Kit
          </h5>
        </DocsSnippet>{" "}
      </>
    );
  }
}
