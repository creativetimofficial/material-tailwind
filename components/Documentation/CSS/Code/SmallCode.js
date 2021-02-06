import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class SmallCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<small ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="font-normal leading-normal mt-0 mb-4 text-` +
      this.state.color +
      `-800">
  I will be the leader of a company that ends up being worth billions
  of dollars, because I got the answers. I understand culture. I am
  the nucleus. I think that’s a responsibility that I have, to push
  possibilities, to show people, this is the level that things could
  be at.
</small>`;
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
          <small
            className={
              "font-normal leading-normal mt-0 mb-4 text-" +
              this.state.color +
              "-800"
            }
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </small>
        </DocsSnippet>{" "}
      </>
    );
  }
}
