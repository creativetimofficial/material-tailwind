import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class CodeInputs extends React.Component {
  state = {
    color: 'pink',
    type: 'html',
  };
  render() {
    let codeToShow =
      `<div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `=` +
      (this.props.leftIcon || this.props.rightIcon
        ? `"relative flex w-full flex-wrap items-stretch mb-3"`
        : `"mb-3 pt-0"`) +
      `>` +
      (this.props.leftIcon
        ? `\n  <span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="z-10 h-full leading-` +
          (this.props.size === 'large' && this.props.addBorder
            ? 'normal'
            : 'snug') +
          ` font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-` +
          (this.props.size === 'large' ? 'lg' : 'base') +
          ` items-center justify-center w-8 ` +
          (this.props.inputType === 'small'
            ? 'pl-2 py-1'
            : this.props.inputType === 'large'
            ? 'pl-3 py-4'
            : 'pl-3 py-3') +
          `">
    <span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons align-middle">lock</span>
  </span>`
        : ``) +
      `
  <input type="` +
      (this.props.inputType ? this.props.inputType : 'text') +
      `" placeholder="Placeholder" ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="` +
      (this.props.size === 'small'
        ? 'px-2 py-1'
        : this.props.size === 'large'
        ? 'px-3 py-4'
        : 'px-3 py-3') +
      ' placeholder-gray-400 text-gray-700 relative ' +
      (this.state.color === 'gray' ? 'bg-white' : 'bg-white') +
      ' bg-white rounded text-' +
      (this.props.size === 'large' ? 'base ' : 'sm ') +
      (this.props.addBorder ? 'border border-gray-400' : 'shadow-sm') +
      ' outline-none focus:outline-none focus:shadow-outline w-full' +
      (this.props.leftIcon ? ' pl-10' : this.props.rightIcon ? ' pr-10' : '') +
      `"/>` +
      (this.props.rightIcon
        ? `\n  <span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="z-10 h-full leading-` +
          (this.props.size === 'large' && this.props.addBorder
            ? 'normal'
            : 'snug') +
          ` font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-` +
          (this.props.size === 'large' ? 'lg' : 'base') +
          ` items-center justify-center w-8 right-0 ` +
          (this.props.size === 'small'
            ? 'pr-2 py-1'
            : this.props.size === 'large'
            ? 'pr-3 py-4'
            : 'pr-3 py-3') +
          `">
    <span ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons align-middle">person</span>
  </span>`
        : ``) +
      `
</div>`;
    return (
      <>
        <DocsSnippet
          copyText={this.props.copyText}
          onCopy={this.props.onCopy}
          activeColor={false}
          activeFramework={this.state.type}
          codeToShow={codeToShow}
          onColorClick={(color) => this.setState({ color: color })}
          onFrameworkClick={(type) => this.setState({ type: type })}
          bgColor={this.props.bgColor}
        >
          <div
            className={
              this.props.leftIcon || this.props.rightIcon
                ? 'relative flex w-full flex-wrap items-stretch mb-3'
                : 'mb-3 pt-0'
            }
          >
            {this.props.leftIcon ? (
              <span
                className={
                  'z-10 h-full leading-' +
                  (this.props.size === 'large' && this.props.addBorder
                    ? 'normal'
                    : 'snug') +
                  ' font-normal text-center text-gray-400 absolute bg-transparent rounded text-' +
                  (this.props.size === 'large' ? 'lg' : 'base') +
                  ' items-center justify-center w-8 ' +
                  (this.props.size === 'small'
                    ? 'pl-2 py-1'
                    : this.props.size === 'large'
                    ? 'pl-3 py-4'
                    : 'pl-3 py-3')
                }
              >
                <span className="material-icons align-middle">lock</span>
              </span>
            ) : null}
            <input
              type={this.props.inputType ? this.props.inputType : 'text'}
              className={
                (this.props.size === 'small'
                  ? 'px-2 py-1 '
                  : this.props.size === 'large'
                  ? 'px-3 py-4 '
                  : 'px-3 py-3 ') +
                ' placeholder-gray-400 text-gray-700 relative ' +
                (this.state.color === 'gray' ? 'bg-white' : 'bg-white') +
                ' bg-white rounded text-' +
                (this.props.size === 'large' ? 'base' : 'sm') +
                ' ' +
                (this.props.addBorder
                  ? 'border border-gray-400'
                  : 'shadow-sm') +
                ' outline-none focus:outline-none focus:shadow-outline w-full' +
                (this.props.leftIcon
                  ? ' pl-10'
                  : this.props.rightIcon
                  ? ' pr-10'
                  : '')
              }
              placeholder="Placeholder"
            />
            {this.props.rightIcon ? (
              <span
                className={
                  'z-10 h-full leading-' +
                  (this.props.size === 'large' && this.props.addBorder
                    ? 'normal'
                    : 'snug') +
                  ' font-normal text-center text-gray-400 absolute bg-transparent rounded text-' +
                  (this.props.size === 'large' ? 'lg' : 'base') +
                  ' items-center justify-center w-8 right-0 ' +
                  (this.props.size === 'small'
                    ? 'pr-2 py-1'
                    : this.props.size === 'large'
                    ? 'pr-3 py-4'
                    : 'pr-3 py-3')
                }
              >
                <span className="material-icons align-middle">person</span>
              </span>
            ) : null}
          </div>
        </DocsSnippet>
      </>
    );
  }
}
