import React from 'react';
import PropTypes from 'prop-types';

const fromColors = {
    blueGray: 'from-blue-gray-500',
    gray: 'from-gray-500',
    brown: 'from-brown-500',
    deepOrange: 'from-deep-orange-500',
    orange: 'from-orange-500',
    amber: 'from-amber-500',
    yellow: 'from-yellow-600',
    lime: 'from-lime-500',
    lightGreen: 'from-light-green-500',
    green: 'from-green-500',
    teal: 'from-teal-500',
    cyan: 'from-cyan-500',
    lightBlue: 'from-light-blue-500',
    blue: 'from-blue-500',
    indigo: 'from-indigo-500',
    deepPurple: 'from-deep-purple-500',
    purple: 'from-purple-500',
    pink: 'from-pink-500',
    red: 'from-red-500',
};

const toColors = {
    blueGray: 'to-blue-gray-700',
    gray: 'to-gray-700',
    brown: 'to-brown-700',
    deepOrange: 'to-deep-orange-700',
    orange: 'to-orange-700',
    amber: 'to-amber-700',
    yellow: 'to-yellow-800',
    lime: 'to-lime-700',
    lightGreen: 'to-light-green-700',
    green: 'to-green-700',
    teal: 'to-teal-700',
    cyan: 'to-cyan-700',
    lightBlue: 'to-light-blue-700',
    blue: 'to-blue-700',
    indigo: 'to-indigo-700',
    deepPurple: 'to-deep-purple-700',
    purple: 'to-purple-700',
    pink: 'to-pink-700',
    red: 'to-red-700',
};

const shadowColors = {
    blueGray: 'shadow-lg-blue-gray',
    gray: 'shadow-lg-gray',
    brown: 'shadow-lg-brown',
    deepOrange: 'shadow-lg-deep-orange',
    orange: 'shadow-lg-orange',
    amber: 'shadow-lg-amber',
    yellow: 'shadow-lg-yellow',
    lime: 'shadow-lg-lime',
    lightGreen: 'shadow-lg-light-green',
    green: 'shadow-lg-green',
    teal: 'shadow-lg-teal',
    cyan: 'shadow-lg-cyan',
    lightBlue: 'shadow-lg-light-blue',
    blue: 'shadow-lg-blue',
    indigo: 'shadow-lg-indigo',
    deepPurple: 'shadow-lg-deep-purple',
    purple: 'shadow-lg-purple',
    pink: 'shadow-lg-pink',
    red: 'shadow-lg-red',
};

const positions = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center',
};

export default function CardHeader({
    children,
    color,
    size,
    contentPosition,
    iconOnly,
    className,
}) {
    let headerSize = [];

    const smallHeader = [
        iconOnly ? 'w-20' : 'w-full',
        'h-20',
        'py-4',
        iconOnly ? 'px-4' : 'px-8',
        positions[contentPosition],
    ];

    const regularHeader = [
        iconOnly ? 'w-24' : 'w-full',
        'h-24',
        'py-4',
        iconOnly ? 'px-4' : 'px-8',
        positions[contentPosition],
    ];

    const largeHeader = [
        iconOnly ? 'w-28' : 'w-full',
        'h-28',
        'py-4',
        iconOnly ? 'px-4' : 'px-8',
        positions[contentPosition],
    ];

    if (size === 'sm') {
        headerSize.push(...smallHeader);
    } else if (size === 'lg') {
        headerSize.push(...largeHeader);
    } else {
        headerSize.push(...regularHeader);
    }

    headerSize = headerSize.join(' ');

    return (
        <div
            className={`bg-gradient-to-tr ${fromColors[color]} ${toColors[color]} -mt-10 mb-4 rounded-xl text-white grid items-center ${headerSize} ${shadowColors[color]} ${className}`}
        >
            {children}
        </div>
    );
}

CardHeader.defaultProps = {
    color: 'lightBlue',
    size: 'regular',
    contentPosition: 'center',
    iconOnly: false,
};

CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
    contentPosition: PropTypes.string.isRequired,
    iconOnly: PropTypes.bool.isRequired,
};
