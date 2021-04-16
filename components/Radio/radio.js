import React from 'react';
import PropTypes from 'prop-types';

const colors = {
    blueGray: 'mt-radio-blue-gray-500',
    gray: 'mt-radio-gray-500',
    brown: 'mt-radio-brown-500',
    deepOrange: 'mt-radio-deep-orange-500',
    orange: 'mt-radio-orange-500',
    amber: 'mt-radio-amber-500',
    yellow: 'mt-radio-yellow-600',
    lime: 'mt-radio-lime-500',
    lightGreen: 'mt-radio-light-green-500',
    green: 'mt-radio-green-500',
    teal: 'mt-radio-teal-500',
    cyan: 'mt-radio-cyan-500',
    lightBlue: 'mt-radio-light-blue-500',
    blue: 'mt-radio-blue-500',
    indigo: 'mt-radio-indigo-500',
    deepPurple: 'mt-radio-deep-purple-500',
    purple: 'mt-radio-purple-500',
    pink: 'mt-radio-pink-500',
    red: 'mt-radio-red-500',
};

export default function Radio({ color, text, id, ...rest }) {
    return (
        <div class="flex items-center">
            <input
                {...rest}
                id={id}
                type="radio"
                class={`mt-radio ${colors[color]} hidden overflow-hidden`}
            />
            <label
                for={id}
                class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
            >
                <span class="relative w-4 h-4 inline-block mr-2 rounded-full border border-gray-500 transition-all duration-300"></span>
                {text}
            </label>
        </div>
    );
}

Radio.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
