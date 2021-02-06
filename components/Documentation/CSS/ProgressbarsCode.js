import React from "react";

import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class ProgressbarsCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<div ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="relative pt-1">
` +
      (this.props.badge
        ? `  <div ` +
          (this.state.type !== "react" ? "class" : "className") +
          `="flex mb-2 items-center justify-between">
    <div>
      <span ` +
          (this.state.type !== "react" ? "class" : "className") +
          `="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-` +
          this.state.color +
          `-600 bg-` +
          this.state.color +
          `-200">
        Task in progress
      </span>
    </div>
    <div ` +
          (this.state.type !== "react" ? "class" : "className") +
          `="text-right">
      <span ` +
          (this.state.type !== "react" ? "class" : "className") +
          `="text-xs font-semibold inline-block text-` +
          this.state.color +
          `-600">
        ` +
          this.props.percentage +
          `%
      </span>
    </div>
  </div>\n`
        : ``) +
      `  <div ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="overflow-hidden h-2 mb-4 text-xs flex rounded bg-` +
      this.state.color +
      `-200">` +
      (this.props.percentage !== "0" && this.props.percentage !== undefined
        ? `
    <div style=` +
          (this.state.type === "html" ? `"width:` : `{{ width: "`) +
          this.props.percentage +
          `%"` +
          (this.state.type === "html" ? "" : " }}") +
          ` ` +
          (this.state.type !== "react" ? "class" : "className") +
          `="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-` +
          this.state.color +
          `-500"></div>`
        : ``) +
      `
  </div>
</div>`;
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
          <div className="relative pt-1">
            {this.props.badge ? (
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span
                    className={
                      "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-" +
                      this.state.color +
                      "-600 bg-" +
                      this.state.color +
                      "-200"
                    }
                  >
                    Task in progress
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className={
                      "text-xs font-semibold inline-block text-" +
                      this.state.color +
                      "-600"
                    }
                  >
                    {this.props.percentage}%
                  </span>
                </div>
              </div>
            ) : null}
            <div
              className={
                "overflow-hidden h-2 mb-4 text-xs flex rounded bg-" +
                this.state.color +
                "-200"
              }
            >
              {this.props.percentage !== "0" &&
              this.props.percentage !== undefined ? (
                <div
                  className={
                    "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-" +
                    this.state.color +
                    "-500"
                  }
                  style={{ width: this.props.percentage + "%" }}
                ></div>
              ) : null}
            </div>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
