import React from 'react';
import PropTypes from 'prop-types';

const Colors = {
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

export default function CardStatusFooter({
    children,
    color,
    amount,
    date,
    className,
}) {
    return (
        <div
            className={`text-sm text-gray-700 pt-4 flex items-center ${className}`}
        >
            {children}
            <span className={`${Colors[color]} ml-1 mr-2`}>{amount}</span>
            <span className="font-light whitespace-nowrap">{date}</span>
        </div>
    );
}

CardStatusFooter.defaultProps = {
    color: 'lightBlue',
};

CardStatusFooter.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
