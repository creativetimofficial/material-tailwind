import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const colors = [
    'blue-gray',
    'gray',
    'brown',
    'deep-orange',
    'orange',
    'amber',
    'yellow',
    'lime',
    'light-green',
    'green',
    'teal',
    'cyan',
    'light-blue',
    'blue',
    'indigo',
    'deep-purple',
    'purple',
    'pink',
    'red',
];

const elementColors = [
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

const buttons = ['html', 'javascript', 'react', 'vue', 'angular'];

export default function DocsSnippet({
    children,
    activeColor,
    activeFramework,
    onColorClick,
    onFrameworkClick,
    onCopy,
    codeToShow,
    copyText,
}) {
    return (
        <>
            <div className="border border-solid border-gray-200 rounded my-4 p-4 relative">
                {activeColor ? (
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
                                        className={`cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-${prop}${
                                            activeColor === elementColors[key]
                                                ? `${
                                                      prop === 'yellow'
                                                          ? '-600'
                                                          : '-500'
                                                  } shadow-md`
                                                : '-200'
                                        }`}
                                        onClick={() => {
                                            onColorClick(elementColors[key]);
                                            onCopy(false);
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ) : null}
                {children}

                <div className="relative mt-4">
                    <CopyToClipboard
                        text={codeToShow}
                        onCopy={() => onCopy(true)}
                    >
                        <button
                            className={
                                'text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1'
                            }
                            type="button"
                        >
                            {copyText}
                        </button>
                    </CopyToClipboard>
                    <SyntaxHighlighter language="jsx" style={a11yDark}>
                        {codeToShow}
                    </SyntaxHighlighter>
                </div>
            </div>
        </>
    );
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
    ]),
    activeFramework: PropTypes.oneOf(['html', 'react', 'vue', 'angular']),
    codeToShow: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onColorClick: PropTypes.func,
    onFrameworkClick: PropTypes.func,
};
