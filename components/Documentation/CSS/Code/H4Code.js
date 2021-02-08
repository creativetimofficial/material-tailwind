import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class H4Code extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<h4 ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-3xl font-normal leading-normal mt-0 mb-2 text-` +
      this.state.color +
      `-800">
  Tailwind Starter Kit
</h4>`;
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
          <h4
            className={
              "text-3xl font-normal leading-normal mt-0 mb-2 text-" +
              this.state.color +
              "-800"
            }
          >
            Tailwind Starter Kit
          </h4>
        </DocsSnippet>{" "}
      </>
    );
  }
}
