import React from 'react';

import DocsSnippet from 'components/Documentation/DocsSnippet.js';

export default class CodePaginations extends React.Component {
  state = {
    color: 'pink',
    type: 'html',
  };
  render() {
    let codeToShow =
      `<div ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="py-2">
  <nav ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="block">
    <ul ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="flex pl-0 rounded list-none flex-wrap">` +
      (this.props.firstAndLast
        ? `
      <li>
        <a href="#pablo" ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ` +
          (this.props.disabled
            ? `border-` +
              this.state.color +
              `-200 text-white bg-` +
              this.state.color +
              `-200"`
            : `border-` +
              this.state.color +
              `-500 bg-white text-` +
              this.state.color +
              `-500"`) +
          `>
          <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons -ml-px">keyboard_arrow_left</i>
          <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons -ml-px">keyboard_arrow_left</i>
        </a>
      </li>`
        : ``) +
      (this.props.nextAndPrevious
        ? `\n      <li>
        <a href="#pablo" ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ` +
          (this.props.disabled
            ? `border-` +
              this.state.color +
              `-200 text-white bg-` +
              this.state.color +
              `-200"`
            : `border-` +
              this.state.color +
              `-500 bg-white text-` +
              this.state.color +
              `-500"`) +
          `>
          <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons -ml-px">keyboard_arrow_left</i>
        </a>
      </li>`
        : ``) +
      `
      <li>
        <a href="#pablo" ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-` +
      this.state.color +
      `-500 ` +
      (this.props.active
        ? `text-white bg-` + this.state.color + `-500"`
        : `bg-white text-` + this.state.color + `-500"`) +
      `>
          1
        </a>
      </li>
      <li>
        <a href="#pablo" ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ` +
      (this.props.disabled
        ? `border-` +
          this.state.color +
          `-200 text-white bg-` +
          this.state.color +
          `-200"`
        : `border-` +
          this.state.color +
          `-500 bg-white text-` +
          this.state.color +
          `-500"`) +
      `>
          2
        </a>
      </li>
      <li>
        <a href="#pablo" ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-` +
      this.state.color +
      `-500 bg-white text-` +
      this.state.color +
      `-500">
          3
        </a>
      </li>
      <li>
        <a href="#pablo" ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-` +
      this.state.color +
      `-500 bg-white text-` +
      this.state.color +
      `-500">
          4
        </a>
      </li>
      <li>
        <a href="#pablo" ` +
      (this.state.type !== 'react' ? 'class' : 'className') +
      `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-` +
      this.state.color +
      `-500 bg-white text-` +
      this.state.color +
      `-500">
          5
        </a>
      </li>` +
      (this.props.nextAndPrevious
        ? `
      <li>
        <a href="#pablo" ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-` +
          this.state.color +
          `-500 bg-white text-` +
          this.state.color +
          `-500">
          <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons -mr-px">keyboard_arrow_right</i>
        </a>
      </li>`
        : ``) +
      (this.props.firstAndLast
        ? `
      <li>
        <a href="#pablo" ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-` +
          this.state.color +
          `-500 bg-white text-` +
          this.state.color +
          `-500">
          <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons -mr-px">keyboard_arrow_right</i>
          <i ` +
          (this.state.type !== 'react' ? 'class' : 'className') +
          `="material-icons -mr-px">keyboard_arrow_right</i>
        </a>
      </li>`
        : ``) +
      `
    </ul>
  </nav>
</div>`;
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
          <div className="py-2">
            <nav className="block">
              <ul className="flex pl-0 rounded list-none flex-wrap">
                {this.props.firstAndLast ? (
                  <li>
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className={
                        'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ' +
                        (this.props.disabled
                          ? 'border-' +
                            this.state.color +
                            '-200 text-white bg-' +
                            this.state.color +
                            '-200'
                          : 'border-' +
                            this.state.color +
                            '-500 bg-white text-' +
                            this.state.color +
                            '-500')
                      }
                    >
                      <i className="material-icons -ml-px">
                        keyboard_arrow_left
                      </i>
                      <i className="material-icons -ml-px">
                        keyboard_arrow_left
                      </i>
                    </a>
                  </li>
                ) : null}
                {this.props.nextAndPrevious ? (
                  <li>
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className={
                        'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ' +
                        (this.props.disabled
                          ? 'border-' +
                            this.state.color +
                            '-200 text-white bg-' +
                            this.state.color +
                            '-200'
                          : 'border-' +
                            this.state.color +
                            '-500 bg-white text-' +
                            this.state.color +
                            '-500')
                      }
                    >
                      <i className="material-icons -ml-px">
                        keyboard_arrow_left
                      </i>
                    </a>
                  </li>
                ) : null}
                <li>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className={
                      'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                      this.state.color +
                      '-500 ' +
                      (this.props.active
                        ? 'text-white bg-' + this.state.color + '-500'
                        : 'bg-white text-' + this.state.color + '-500')
                    }
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className={
                      'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid ' +
                      (this.props.disabled
                        ? 'border-' +
                          this.state.color +
                          '-200 text-white bg-' +
                          this.state.color +
                          '-200'
                        : 'border-' +
                          this.state.color +
                          '-500 bg-white text-' +
                          this.state.color +
                          '-500')
                    }
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className={
                      'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                      this.state.color +
                      '-500 bg-white text-' +
                      this.state.color +
                      '-500'
                    }
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className={
                      'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                      this.state.color +
                      '-500 bg-white text-' +
                      this.state.color +
                      '-500'
                    }
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className={
                      'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                      this.state.color +
                      '-500 bg-white text-' +
                      this.state.color +
                      '-500'
                    }
                  >
                    5
                  </a>
                </li>
                {this.props.nextAndPrevious ? (
                  <li>
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className={
                        'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                        this.state.color +
                        '-500 bg-white text-' +
                        this.state.color +
                        '-500'
                      }
                    >
                      <i className="material-icons -mr-px">
                        keyboard_arrow_right
                      </i>
                    </a>
                  </li>
                ) : null}
                {this.props.firstAndLast ? (
                  <li>
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className={
                        'first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                        this.state.color +
                        '-500 bg-white text-' +
                        this.state.color +
                        '-500'
                      }
                    >
                      <i className="material-icons -mr-px">
                        keyboard_arrow_right
                      </i>
                      <i className="material-icons -mr-px">
                        keyboard_arrow_right
                      </i>
                    </a>
                  </li>
                ) : null}
              </ul>
            </nav>
          </div>
        </DocsSnippet>
      </>
    );
  }
}
