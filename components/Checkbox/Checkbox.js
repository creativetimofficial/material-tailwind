import React from 'react';
import PropTypes from 'prop-types';

const colors = {
    blueGray: 'mt-checkbox-blue-gray-500',
    gray: 'mt-checkbox-gray-500',
    brown: 'mt-checkbox-brown-500',
    deepOrange: 'mt-checkbox-deep-orange-500',
    orange: 'mt-checkbox-orange-500',
    amber: 'mt-checkbox-amber-500',
    yellow: 'mt-checkbox-yellow-600',
    lime: 'mt-checkbox-lime-500',
    lightGreen: 'mt-checkbox-light-green-500',
    green: 'mt-checkbox-green-500',
    teal: 'mt-checkbox-teal-500',
    cyan: 'mt-checkbox-cyan-500',
    lightBlue: 'mt-checkbox-light-blue-500',
    blue: 'mt-checkbox-blue-500',
    indigo: 'mt-checkbox-indigo-500',
    deepPurple: 'mt-checkbox-deep-purple-500',
    purple: 'mt-checkbox-purple-500',
    pink: 'mt-checkbox-pink-500',
    red: 'mt-checkbox-red-500',
};

export default function Checkbox({ color, text, id, ...rest }) {
    return (
        <div class="flex items-center">
            <input
                {...rest}
                id={id}
                type="checkbox"
                class={`mt-checkbox ${colors[color]} hidden overflow-hidden`}
            />
            <label
                for={id}
                class="flex items-center cursor-pointer text-gray-400 select-none transition-all duration-300"
            >
                <span class="relative w-5 h-5 inline-block mr-2 rounded border border-gray-500 transition-all duration-300"></span>
                {text}
            </label>
        </div>
    );
}

Checkbox.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
