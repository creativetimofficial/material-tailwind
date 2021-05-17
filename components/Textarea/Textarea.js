import React from 'react';
import PropTypes from 'prop-types';

const mtTextareaColors = {
    blueGray: 'mt-input-blue-gray-500',
    gray: 'mt-input-gray-500',
    brown: 'mt-input-brown-500',
    deepOrange: 'mt-input-deep-orange-500',
    orange: 'mt-input-orange-500',
    amber: 'mt-input-amber-500',
    yellow: 'mt-input-yellow-600',
    lime: 'mt-input-lime-500',
    lightGreen: 'mt-input-light-green-500',
    green: 'mt-input-green-500',
    teal: 'mt-input-teal-500',
    cyan: 'mt-input-cyan-500',
    lightBlue: 'mt-input-light-blue-500',
    blue: 'mt-input-blue-500',
    indigo: 'mt-input-indigo-500',
    deepPurple: 'mt-input-deep-purple-500',
    purple: 'mt-input-purple-500',
    pink: 'mt-input-pink-500',
    red: 'mt-input-red-500',
};

const mtTextareaOutlineColors = {
    blueGray: 'mt-input-outline-blue-gray-500',
    gray: 'mt-input-outline-gray-500',
    brown: 'mt-input-outline-brown-500',
    deepOrange: 'mt-input-outline-deep-orange-500',
    orange: 'mt-input-outline-orange-500',
    amber: 'mt-input-outline-amber-500',
    yellow: 'mt-input-outline-yellow-600',
    lime: 'mt-input-outline-lime-500',
    lightGreen: 'mt-input-outline-light-green-500',
    green: 'mt-input-outline-green-500',
    teal: 'mt-input-outline-teal-500',
    cyan: 'mt-input-outline-cyan-500',
    lightBlue: 'mt-input-outline-light-blue-500',
    blue: 'mt-input-outline-blue-500',
    indigo: 'mt-input-outline-indigo-500',
    deepPurple: 'mt-input-outline-deep-purple-500',
    purple: 'mt-input-outline-purple-500',
    pink: 'mt-input-outline-pink-500',
    red: 'mt-input-outline-red-500',
};

const borderColors = {
    blueGray: 'border-blue-gray-500',
    gray: 'border-gray-500',
    brown: 'border-brown-500',
    deepOrange: 'border-deep-orange-500',
    orange: 'border-orange-500',
    amber: 'border-amber-500',
    yellow: 'border-yellow-600',
    lime: 'border-lime-500',
    lightGreen: 'border-light-green-500',
    green: 'border-green-500',
    teal: 'border-teal-500',
    cyan: 'border-cyan-500',
    lightBlue: 'border-light-blue-500',
    blue: 'border-blue-500',
    indigo: 'border-indigo-500',
    deepPurple: 'border-deep-purple-500',
    purple: 'border-purple-500',
    pink: 'border-pink-500',
    red: 'border-red-500',
};

const focusBorderColors = {
    blueGray: 'focus:border-blue-gray-500',
    gray: 'focus:border-gray-500',
    brown: 'focus:border-brown-500',
    deepOrange: 'focus:border-deep-orange-500',
    orange: 'focus:border-orange-500',
    amber: 'focus:border-amber-500',
    yellow: 'focus:border-yellow-600',
    lime: 'focus:border-lime-500',
    lightGreen: 'focus:border-light-green-500',
    green: 'focus:border-green-500',
    teal: 'focus:border-teal-500',
    cyan: 'focus:border-cyan-500',
    lightBlue: 'focus:border-light-blue-500',
    blue: 'focus:border-blue-500',
    indigo: 'focus:border-indigo-500',
    deepPurple: 'focus:border-deep-purple-500',
    purple: 'focus:border-purple-500',
    pink: 'focus:border-pink-500',
    red: 'focus:border-red-500',
};

export default function Textarea({
    placeholder,
    color,
    size,
    outline,
    error,
    success,
    ...rest
}) {
    let labelBorderColor,
        mtTextareaBorderColor,
        mtTextareaOutlineColor,
        mtTextareaOutlineFocusColor,
        textareaClasses = [];

    let container = ['w-full', 'h-auto', 'relative'];

    if (error) {
        labelBorderColor = borderColors['red'];
        mtTextareaBorderColor = mtTextareaColors['red'];
        mtTextareaOutlineColor = mtTextareaOutlineColors['red'];
        mtTextareaOutlineFocusColor = borderColors['red'];
    } else if (success) {
        labelBorderColor = borderColors['green'];
        mtTextareaBorderColor = mtTextareaColors['green'];
        mtTextareaOutlineColor = mtTextareaOutlineColors['green'];
        mtTextareaOutlineFocusColor = borderColors['green'];
    } else {
        labelBorderColor = 'border-gray-300';
        mtTextareaBorderColor = mtTextareaColors[color];
        mtTextareaOutlineColor = mtTextareaOutlineColors[color];
        mtTextareaOutlineFocusColor = borderColors[color];
    }

    let label = [
        'text-gray-400',
        'absolute',
        'left-0',
        `${outline ? '-top-1.5' : '-top-0.5'}`,
        'w-full',
        'h-full',
        `${!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'}`,
        labelBorderColor,
        'pointer-events-none',
        `${outline && 'flex'}`,
        `${outline && size === 'sm' && 'text-sm'}`,
        `${outline && 'leading-10'}`,
        `${outline && 'transition-all'}`,
        `${outline && 'duration-300'}`,
    ];

    const sharedClasses = [
        'w-full',
        'h-full',
        'text-gray-800',
        'leading-normal',
        'shadow-none',
        'outline-none',
        'resize-none',
        'focus:outline-none',
        'focus:ring-0',
        'focus:text-gray-800',
    ];
    const textareaSM = [
        ...sharedClasses,
        `${outline ? 'px-3' : 'px-0'}`,
        `${outline && 'pt-1.5 pb-0.5'}`,
        'text-sm',
    ];
    const textareaRegular = [
        ...sharedClasses,
        `${outline ? 'px-3' : 'px-0'}`,
        `${outline && 'pt-2.5 pb-1.5'}`,
    ];

    const textareaFilled = [
        mtTextareaBorderColor,
        'mt-input',
        'texterea',
        'bg-transparent',
        'border-none',
    ];

    const textareaOutline = [
        mtTextareaOutlineColor,
        labelBorderColor,
        'mt-input-outline',
        'bg-transparent',
        'border',
        'border-1',
        'border-gray-300',
        'rounded-lg',
        'focus:border-2',
    ];

    if (size === 'sm') {
        textareaClasses.push(...textareaSM);
    } else {
        textareaClasses.push(...textareaRegular);
    }

    outline
        ? textareaClasses.push(...textareaOutline)
        : textareaClasses.push(...textareaFilled);

    container = container.join(' ');
    label = label.join(' ');
    textareaClasses = textareaClasses.join(' ');

    return (
        <div className={container}>
            <textarea
                {...rest}
                placeholder=" "
                className={`
                    ${textareaClasses}
                    ${error && outline && 'mt-input-outline-error'}
                    ${success && outline && 'mt-input-outline-success'}`}
                rows="7"
            />
            <label className={label}>
                {outline ? (
                    placeholder
                ) : (
                    <span
                        className={`${
                            size === 'sm' && 'text-sm'
                        } absolute top-0 transition-all duration-300`}
                    >
                        {placeholder}
                    </span>
                )}
            </label>
            {error && (
                <span
                    className={`block absolute ${
                        outline ? '-bottom-4' : '-bottom-5'
                    } text-xs text-red-500`}
                >
                    {error}
                </span>
            )}
            {success && (
                <span
                    className={`block absolute ${
                        outline ? '-bottom-4' : '-bottom-5'
                    } text-xs text-green-500`}
                >
                    {success}
                </span>
            )}
        </div>
    );
}

Textarea.defaultProps = {
    color: 'lightBlue',
    size: 'regular',
    outline: false,
};

Textarea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    outline: PropTypes.bool.isRequired,
    error: PropTypes.string,
    success: PropTypes.string,
};
