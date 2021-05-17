import React from 'react';
import PropTypes from 'prop-types';

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

export default function Navbar({ children, color, navbar, className }) {
    return (
        <>
            <nav
                className={`flex flex-wrap items-center justify-between py-2.5 px-3 mb-3 ${
                    colors[color]
                } ${!navbar && 'rounded-lg'} ${className}`}
            >
                {children}
            </nav>
        </>
    );
}

Navbar.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
};
