import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class ButtonsCode extends React.Component {
  state = {
    color: 'pink',
    type: 'html',
  };
  render() {
    let codeToShow =
      `<button ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="` +
      (this.props.link
        ? 'text-' + this.state.color + '-500 background-transparent'
        : this.props.outline
        ? 'text-' +
          this.state.color +
          '-500 bg-transparent border border-solid border-' +
          this.state.color +
          '-500' +
          ' hover:bg-' +
          this.state.color +
          '-500 hover:text-white active:bg-' +
          this.state.color +
          '-600'
        : 'bg-' +
          this.state.color +
          '-500 text-white active:bg-' +
          this.state.color +
          '-600') +
      ` font-bold uppercase ` +
      this.props.buttonType +
      ` outline-none focus:outline-none mr-1 mb-1" type="button" ` +
      (this.state.type !== 'react'
        ? `style="transition: all .15s ease"`
        : `style={{ transition: "all .15s ease" }}`) +
      `>
  ` +
      (this.props.icon
        ? `<span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons">favorite</i>`
        : ``) +
      this.props.buttonText +
      `
</button>`;
    return (
      <>
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={this.state.color}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={(color) => this.setState({ color: color })}
          onFrameworkClick={(type) => this.setState({ type: type })}
        >
          <button
            className={
              (this.props.link
                ? 'text-' + this.state.color + '-500 background-transparent'
                : this.props.outline
                ? 'text-' +
                  this.state.color +
                  '-500 bg-transparent border border-solid border-' +
                  this.state.color +
                  '-500' +
                  ' hover:bg-' +
                  this.state.color +
                  '-500 hover:text-white active:bg-' +
                  this.state.color +
                  '-600'
                : 'bg-' +
                  this.state.color +
                  '-500 text-white active:bg-' +
                  this.state.color +
                  '-600') +
              ' font-bold uppercase ' +
              this.props.buttonType +
              ' outline-none focus:outline-none mr-1 mb-1 flex gap-1'
            }
            type="button"
            style={{ transition: 'all .15s' }}
          >
            {this.props.icon ? (
              <span className="material-icons">favorite</span>
            ) : (
              ''
            )}
            {this.props.buttonText}
          </button>
        </DocsSnippet>
      </>
    );
  }
}
//bg-pink-500 active:bg-pink-600 text-white text-sm font-bold uppercase px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 shadow-md hover:shadow-lg
