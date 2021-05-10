import React from 'react';
import PropTypes from 'prop-types';

const colors = {
    white: 'text-white',
    blueGray: 'text-blue-gray-500',
    gray: 'text-gray-500',
    brown: 'text-brown-500',
    deepOrange: 'text-deep-orange-500',
    orange: 'text-orange-500',
    amber: 'text-amber-500',
    yellow: 'text-yellow-600',
    lime: 'text-lime-500',
    lightGreen: 'text-light-green-500',
    green: 'text-green-500',
    teal: 'text-teal-500',
    cyan: 'text-cyan-500',
    lightBlue: 'text-light-blue-500',
    blue: 'text-blue-500',
    indigo: 'text-indigo-500',
    deepPurple: 'text-deep-purple-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
    red: 'text-red-500',
};

const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
};
export default function Icon({ family, name, color, size, ...rest }) {
    let iconUI;

    if (family === 'material-icons') {
        iconUI = (
            <span
                {...rest}
                className={`${family} ${colors[color]} ${
                    size ? sizes[size] : 'text-base'
                } leading-none`}
            >
                {name}
            </span>
        );
    } else if (family === 'font-awesome') {
        iconUI = (
            <i
                {...rest}
                className={`${name} ${colors[color]} ${sizes[size]}`}
            />
        );
    }

    return iconUI;
}

Icon.defaultProps = {
    family: 'material-icons',
    color: 'white',
    size: 'base',
};

Icon.propTypes = {
    family: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};
