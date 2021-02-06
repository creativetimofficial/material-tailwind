import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { shadesOfPurple } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const colors = [
  'blueGray',
  'gray',
  'brown',
  'deepOrange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'lightGreen',
  'green',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'deepPurple',
  'purple',
  'pink',
  'red',
];

const buttons = ['html', 'react', 'vue', 'angular'];

export default class DocsSnippet extends React.Component {
  render() {
    return (
      <>
        <div
          className={
            'border border-solid border-gray-400 rounded my-4 p-4 pt-6 relative' +
            (this.props.bgColor ? ' ' + this.props.bgColor : '')
          }
        >
          {this.props.activeColor ? (
            <div
              id="colors"
              className="flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto"
              style={{ width: '100%', bottom: '-14px' }}
            >
              <div className="flex flew-wrap justify-center items-center bg-white px-2">
                {colors.map((prop, key) => {
                  return (
                    <span
                      key={key}
                      className={
                        'cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-' +
                        prop +
                        (this.props.activeColor === prop
                          ? '-500 shadow-md'
                          : '-200')
                      }
                      onClick={() => {
                        this.props.onColorClick(prop);
                        this.props.onCopy(false);
                      }}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}
          {this.props.children}

          <div className="relative mt-4">
            <div
              id="languages"
              className="absolute w-full right-0 border-b border-gray-700 py-1"
              style={{ width: '100%' }}
            >
              {buttons.map((prop, key) => {
                return (
                  <button
                    key={key}
                    className={
                      'flex-auto text-sm px-3 outline-none focus:outline-none mb-1 text-gray-' +
                      (this.props.activeFramework === prop ? '400' : '600')
                    }
                    onClick={() => {
                      this.props.onFrameworkClick(prop);
                      this.props.onCopy(false);
                    }}
                    type="button"
                  >
                    {(() => {
                      switch (prop) {
                        default:
                          return 'HTML';
                        case 'react':
                          return 'React';
                        case 'angular':
                          return 'Angular';
                        case 'vue':
                          return 'Vue';
                      }
                    })()}
                  </button>
                );
              })}
            </div>

            <CopyToClipboard
              text={this.props.codeToShow}
              onCopy={() => this.props.onCopy(true)}
            >
              <div className="docs-code-preview">
                <button
                  className={
                    'text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1'
                  }
                  type="button"
                >
                  {this.props.copyText}
                </button>
                <SyntaxHighlighter
                  language="jsx"
                  style={shadesOfPurple}
                  customStyle={{
                    fontSize: '0.825em',
                    padding: '14px',
                    borderRadius: '4px',
                  }}
                >
                  {this.props.codeToShow}
                </SyntaxHighlighter>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </>
    );
  }
}

DocsSnippet.propTypes = {
  copyText: PropTypes.string.isRequired,
  onCopy: PropTypes.func.isRequired,
  activeColor: PropTypes.oneOf([
    'blueGray',
    'gray',
    'brown',
    'deepOrange',
    'orange',
    'amber',
    'yellow',
    'lime',
    'lightGreen',
    'green',
    'teal',
    'cyan',
    'lightBlue',
    'blue',
    'indigo',
    'deepPurple',
    'purple',
    'pink',
    'red',
    false,
  ]).isRequired,
  activeFramework: PropTypes.oneOf(['html', 'react', 'vue', 'angular'])
    .isRequired,
  codeToShow: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onColorClick: PropTypes.func.isRequired,
  onFrameworkClick: PropTypes.func.isRequired,
};
