import React from "react";
import DocsSnippet from "components/Documentation/DocsSnippet.js";

export default class AlertsCode extends React.Component {
  state = {
    color: "pink",
    type: "html"
  };
  render() {
    let codeToShow =
      `<div ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-white px-6 py-4 border-0 rounded relative mb-4 bg-` +
      this.state.color +
      `-500">
  <span ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="text-xl inline-block mr-5 align-middle">
    <i ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="fas fa-bell" />
  </span>
  <span ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="inline-block align-middle mr-8">
    <b ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="capitalize">` +
      this.state.color +
      `!</b> This is a ` +
      this.state.color +
      ` alert - check it out!
  </span>
  <button ` +
      (this.state.type !== "react" ? "class" : "className") +
      `="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
    <span>×</span>
  </button>
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
          <div
            className={
              "text-white px-6 py-4 border-0 rounded relative mb-4 bg-" +
              this.state.color +
              "-500"
            }
          >
            <span className="text-xl inline-block mr-5 align-middle">
              <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
              <b className="capitalize">{this.state.color}!</b> This is a{" "}
              {this.state.color} alert - check it out!
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
              <span>×</span>
            </button>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
