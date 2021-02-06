import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class QuoteCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<p ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-base font-light leading-relaxed mt-0 mb-0 text-` +
      this.state.color +
      `-800">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
  posuere erat a ante.
</p>
<footer ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="block text-` +
      this.state.color +
      `-600">
  - Someone famous in <cite>Source Title</cite>
</footer>`;
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
          <p
            className={
              "text-base font-light leading-relaxed mt-0 mb-0 text-" +
              this.state.color +
              "-800"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className={"block text-" + this.state.color + "-600"}>
            - Someone famous in <cite>Source Title</cite>
          </footer>
        </DocsSnippet>{" "}
      </>
    );
  }
}
