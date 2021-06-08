import React from 'react';
import PropTypes from 'prop-types';
import Ripple from 'material-ripple-effects';

const colors = {
    blueGray: 'bg-blue-gray-500',
    gray: 'bg-gray-500',
    brown: 'bg-brown-500',
    deepOrange: 'bg-deep-orange-500',
    orange: 'bg-orange-500',
    amber: 'bg-amber-500',
    yellow: 'bg-yellow-600',
    lime: 'bg-lime-500',
    lightGreen: 'bg-light-green-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500',
    lightBlue: 'bg-light-blue-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    deepPurple: 'bg-deep-purple-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    red: 'bg-red-500',
};

export default function PaginationItem({
    children,
    color,
    button,
    ripple,
    className,
    ...rest
}) {
    const rippleEffect = new Ripple();

    return (
        <li className="grid place-items-center">
            <a
                {...rest}
                className={`text-sm leading-none flex ${
                    button
                        ? 'tracking-wider rounded-lg w-14'
                        : 'rounded-full w-8'
                } h-8 mx-1 p-0 items-center justify-center ${
                    color
                        ? `${colors[color]} text-white`
                        : 'bg-transparent text-gray-700 hover:bg-gray-500 hover:bg-opacity-20 focus:bg-gray-500 focus:bg-opacity-20 active:bg-gray-500 active:bg-opacity-40'
                } transition-all duration-300 ${className}`}
                onMouseUp={(e) => {
                    ripple === 'dark' && rippleEffect.create(e, 'dark');
                    ripple === 'light' && rippleEffect.create(e, 'light');
                }}
            >
                {children}
            </a>
        </li>
    );
}

PaginationItem.defaultProps = {
    button: false,
};

PaginationItem.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    button: PropTypes.bool.isRequired,
    ripple: PropTypes.string,
};
