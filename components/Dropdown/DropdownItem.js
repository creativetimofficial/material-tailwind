import React from 'react';
import PropTypes from 'prop-types';
import Ripple from 'material-ripple-effects';

const Colors = {
    blueGray: 'hover:bg-blue-gray-500',
    gray: 'hover:bg-gray-500',
    brown: 'hover:bg-brown-500',
    deepOrange: 'hover:bg-deep-orange-500',
    orange: 'hover:bg-orange-500',
    amber: 'hover:bg-amber-500',
    yellow: 'hover:bg-yellow-600',
    lime: 'hover:bg-lime-500',
    lightGreen: 'hover:bg-light-green-500',
    green: 'hover:bg-green-500',
    teal: 'hover:bg-teal-500',
    cyan: 'hover:bg-cyan-500',
    lightBlue: 'hover:bg-light-blue-500',
    blue: 'hover:bg-blue-500',
    indigo: 'hover:bg-indigo-500',
    deepPurple: 'hover:bg-deep-purple-500',
    purple: 'hover:bg-purple-500',
    pink: 'hover:bg-pink-500',
    red: 'hover:bg-red-500',
};

const ShadowColors = {
    blueGray: 'hover:shadow-md-blue-gray',
    gray: 'hover:shadow-md-gray',
    brown: 'hover:shadow-md-brown',
    deepOrange: 'hover:shadow-md-deep-orange',
    orange: 'hover:shadow-md-orange',
    amber: 'hover:shadow-md-amber',
    yellow: 'hover:shadow-md-yellow',
    lime: 'hover:shadow-md-lime',
    lightGreen: 'hover:shadow-md-light-green',
    green: 'hover:shadow-md-green',
    teal: 'hover:shadow-md-teal',
    cyan: 'hover:shadow-md-cyan',
    lightBlue: 'hover:shadow-md-light-blue',
    blue: 'hover:shadow-md-blue',
    indigo: 'hover:shadow-md-indigo',
    deepPurple: 'hover:shadow-md-deep-purple',
    purple: 'hover:shadow-md-purple',
    pink: 'hover:shadow-md-pink',
    red: 'hover:shadow-md-red',
};

export default function DropdownItem({
    children,
    color,
    ripple,
    className,
    ...rest
}) {
    const rippleEffect = new Ripple();

    return (
        <span
            {...rest}
            className={`block w-full text-sm py-3 px-4 font-normal cursor-pointer whitespace-no-wrap rounded-md text-gray-900 hover:text-white ${Colors[color]} ${ShadowColors[color]} transition-all duration-300`}
            onMouseUp={(e) => {
                ripple === 'dark' && rippleEffect.create(e, 'dark');
                ripple === 'light' && rippleEffect.create(e, 'light');
            }}
        >
            {children}
        </span>
    );
}

DropdownItem.defaultProps = {
    color: 'lightBlue',
};

DropdownItem.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    ripple: PropTypes.string,
};
