import React from 'react';
import PropTypes from 'prop-types';

const mdInputColors = {
  blueGray: 'md-input-blue-gray-500',
  gray: 'md-input-gray-500',
  brown: 'md-input-brown-500',
  deepOrange: 'md-input-deep-orange-500',
  orange: 'md-input-orange-500',
  amber: 'md-input-amber-500',
  yellow: 'md-input-yellow-600',
  lime: 'md-input-lime-500',
  lightGreen: 'md-input-light-green-500',
  green: 'md-input-green-500',
  teal: 'md-input-teal-500',
  cyan: 'md-input-cyan-500',
  lightBlue: 'md-input-light-blue-500',
  blue: 'md-input-blue-500',
  indigo: 'md-input-indigo-500',
  deepPurple: 'md-input-deep-purple-500',
  purple: 'md-input-purple-500',
  pink: 'md-input-pink-500',
  red: 'md-input-red-500',
};

const mdInputOutlineColors = {
  blueGray: 'md-input-outline-blue-gray-500',
  gray: 'md-input-outline-gray-500',
  brown: 'md-input-outline-brown-500',
  deepOrange: 'md-input-outline-deep-orange-500',
  orange: 'md-input-outline-orange-500',
  amber: 'md-input-outline-amber-500',
  yellow: 'md-input-outline-yellow-600',
  lime: 'md-input-outline-lime-500',
  lightGreen: 'md-input-outline-light-green-500',
  green: 'md-input-outline-green-500',
  teal: 'md-input-outline-teal-500',
  cyan: 'md-input-outline-cyan-500',
  lightBlue: 'md-input-outline-light-blue-500',
  blue: 'md-input-outline-blue-500',
  indigo: 'md-input-outline-indigo-500',
  deepPurple: 'md-input-outline-deep-purple-500',
  purple: 'md-input-outline-purple-500',
  pink: 'md-input-outline-pink-500',
  red: 'md-input-outline-red-500',
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

export default function Input({
  placeholder,
  color,
  size = 'regular',
  outline,
  error,
  success,
  ...rest
}) {
  let labelBorderColor,
    mdInputBorderColor,
    mdInputOutlineColor,
    mdInputOutlineFocusColor,
    inputClasses = [];

  let container = ['w-full', 'relative'];

  if (error) {
    labelBorderColor = borderColors['red'];
    mdInputBorderColor = mdInputColors['red'];
    mdInputOutlineColor = mdInputOutlineColors['red'];
    mdInputOutlineFocusColor = borderColors['red'];
  } else if (success) {
    labelBorderColor = borderColors['green'];
    mdInputBorderColor = mdInputColors['green'];
    mdInputOutlineColor = mdInputOutlineColors['green'];
    mdInputOutlineFocusColor = borderColors['green'];
  } else {
    labelBorderColor = 'border-gray-300';
    mdInputBorderColor = mdInputColors[color];
    mdInputOutlineColor = mdInputOutlineColors[color];
    mdInputOutlineFocusColor = borderColors[color];
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
    'leading-normal',
    'shadow-none',
    'outline-none',
    'focus:outline-none',
    'focus:ring-0',
  ];

  const inputSM = [
    ...sharedClasses,
    `${outline ? 'px-3' : 'px-0'}`,
    `${outline && 'pt-1.5 pb-0.5'}`,
    'text-sm',
  ];
  const inputRegular = [
    ...sharedClasses,
    `${outline ? 'px-3' : 'px-0'}`,
    `${outline && 'pt-2.5 pb-1.5'}`,
  ];
  const inputLG = [
    ...sharedClasses,
    `${outline ? 'px-3' : 'px-0'}`,
    `${outline && 'pt-3.5 pb-2.5'}`,
  ];

  const inputFilled = [
    mdInputBorderColor,
    'md-input',
    'bg-transparent',
    'border-none',
  ];

  const inputOutline = [
    mdInputOutlineColor,
    labelBorderColor,
    'md-input-outline',
    'bg-transparent',
    'border',
    'border-1',
    'border-gray-300',
    'rounded-lg',
    'focus:border-2',
    `focus:${mdInputOutlineFocusColor}`,
  ];

  if (size === 'sm') {
    container.push('h-9');
    inputClasses.push(...inputSM);
  } else if (size === 'lg') {
    container.push('h-12');
    inputClasses.push(...inputLG);
  } else {
    container.push('h-11');
    inputClasses.push(...inputRegular);
  }

  outline
    ? inputClasses.push(...inputOutline)
    : inputClasses.push(...inputFilled);

  container = container.join(' ');
  label = label.join(' ');
  inputClasses = inputClasses.join(' ');

  return (
    <div className={container}>
      <input {...rest} placeholder=" " className={inputClasses} />
      <label className={label}>
        {outline ? (
          placeholder
        ) : (
          <span
            className={`${
              size === 'sm' && 'text-sm'
            } absolute top-1/4 transition-all duration-300`}
          >
            {placeholder}
          </span>
        )}
      </label>
      {error && (
        <span className="block mt-1 text-xs text-red-500">{error}</span>
      )}
      {success && (
        <span className="block mt-1 text-xs text-green-500">{success}</span>
      )}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  outline: PropTypes.bool,
  error: PropTypes.string,
};
