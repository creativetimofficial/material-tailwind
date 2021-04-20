import React from 'react';
import PropTypes from 'prop-types';

const wrapperBgColors = {
    blueGray: 'bg-blue-gray-200',
    gray: 'bg-gray-200',
    brown: 'bg-brown-200',
    deepOrange: 'bg-deep-orange-200',
    orange: 'bg-orange-200',
    amber: 'bg-amber-200',
    yellow: 'bg-yellow-200',
    lime: 'bg-lime-200',
    lightGreen: 'bg-light-green-200',
    green: 'bg-green-200',
    teal: 'bg-teal-200',
    cyan: 'bg-cyan-200',
    lightBlue: 'bg-light-blue-200',
    blue: 'bg-blue-200',
    indigo: 'bg-indigo-200',
    deepPurple: 'bg-deep-purple-200',
    purple: 'bg-purple-200',
    pink: 'bg-pink-200',
    red: 'bg-red-200',
};

const bgColors = {
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

export default function Progress({ color, value, percentage }) {
    return (
        <>
            <div
                className={`overflow-hidden ${
                    percentage ? 'h-6' : 'h-2'
                } flex rounded ${wrapperBgColors[color]}`}
            >
                <div
                    style={{ width: `${value}%` }}
                    className={`flex justify-center items-center rounded text-xs font-medium ${bgColors[color]} text-white`}
                >
                    {percentage ? `${value}% Completed` : ''}
                </div>
            </div>
        </>
    );
}

Progress.propTypes = {
    color: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percentage: PropTypes.bool,
};
