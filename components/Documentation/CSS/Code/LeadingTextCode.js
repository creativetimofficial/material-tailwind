import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class LeadingTextCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<p ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-lg font-light leading-relaxed mt-6 mb-4 text-` +
      this.state.color +
      `-800">
  I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.
</p>`;
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
              "text-lg font-light leading-relaxed mt-6 mb-4 text-" +
              this.state.color +
              "-800"
            }
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </DocsSnippet>{" "}
      </>
    );
  }
}
