import React from 'react';
import PropTypes from 'prop-types';
import Ripple from 'material-ripple-effects';

const colors = {
    white: 'bg-white',
    blueGray: 'bg-blue-gray-500',
    gray: 'bg-gray-700',
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

const bgHoverColors = {
    white: 'hover:bg-white hover:bg-opacity-20',
    blueGray: 'hover:bg-blue-gray-50',
    gray: 'hover:bg-gray-50',
    brown: 'hover:bg-brown-50',
    deepOrange: 'hover:bg-deep-orange-50',
    orange: 'hover:bg-orange-50',
    amber: 'hover:bg-amber-50',
    yellow: 'hover:bg-yellow-50',
    lime: 'hover:bg-lime-50',
    lightGreen: 'hover:bg-light-green-50',
    green: 'hover:bg-green-50',
    teal: 'hover:bg-teal-50',
    cyan: 'hover:bg-cyan-50',
    lightBlue: 'hover:bg-light-blue-50',
    blue: 'hover:bg-blue-50',
    indigo: 'hover:bg-indigo-50',
    deepPurple: 'hover:bg-deep-purple-50',
    purple: 'hover:bg-purple-50',
    pink: 'hover:bg-pink-50',
    red: 'hover:bg-red-50',
};

export default function NavbarToggler({ color, ripple, ...rest }) {
    const rippleEffect = new Ripple();

    return (
        <button
            {...rest}
            className={`cursor-pointer text-xl leading-none py-1 px-1.5 rounded-full border border-solid border-transparent bg-transparent block lg:hidden outline-none focus:outline-none ${bgHoverColors[color]}`}
            type="button"
            onMouseUp={(e) => {
                ripple === 'dark' && rippleEffect.create(e, 'dark');
                ripple === 'light' && rippleEffect.create(e, 'light');
            }}
        >
            <span
                className={`block relative w-6 h-px rounded-sm ${colors[color]}`}
            ></span>
            <span
                className={`block relative w-6 h-px rounded-sm ${colors[color]} mt-1`}
            ></span>
            <span
                className={`block relative w-6 h-px rounded-sm ${colors[color]} mt-1`}
            ></span>
        </button>
    );
}

NavbarToggler.propTypes = {
    color: PropTypes.string.isRequired,
    ripple: PropTypes.string,
};
