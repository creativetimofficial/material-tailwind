import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  blueGray: 'md-input-blue-gray-500',
  gray: 'md-input-gray-500',
  brown: 'md-input-brown-500',
  deepOrange: 'md-input-deep-orange-500',
  orange: 'md-input-orange-500',
  amber: 'md-input-amber-500',
  yellow: 'md-input-yellow-500',
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

const Input = ({
  placeholder,
  color,
  size = 'regular',
  outline,
  error,
  ...rest
}) => {
  let inputClasses = [];

  let container = ['w-full', 'relative'];

  let label = [
    'absolute',
    'left-0',
    `${outline ? '-top-1.5' : '-top-0.5'}`,
    'w-full',
    'h-full',
    `${error ? 'border-red-500' : 'border-gray-500'}`,
    'pointer-events-none',
    `${!outline && 'border border-t-0 border-l-0 border-r-0 border-b-1'}`,
    `${outline && 'flex'}`,
    `${outline && size === 'sm' && 'text-sm'}`,
    `${outline && 'leading-10'}`,
    `${outline && 'transition-all'}`,
    `${outline && 'duration-300'}`,
  ];

  const sharedClasses = [
    colors[color],
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

  const inputFilled = ['md-input', 'bg-transparent', 'border', 'border-none'];

  const inputOutline = [
    'md-input-outline',
    'bg-transparent',
    'border',
    'border-1',
    'border-gray-500',
    'rounded',
    'focus:border-2',
    `focus:border-${color}-500`,
  ];

  const inputError = [
    `border-${error ? 'red-500' : 'gray-400'}`,
    `focus:border-${error ? 'red-500' : `${color}-600`}`,
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

  error && inputClasses.push(...inputError);

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
            } text-gray-500 absolute top-1/4 transition-all duration-300`}
          >
            {placeholder}
          </span>
        )}
      </label>
      {error && (
        <span className="block mt-1 text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  outline: PropTypes.bool,
  error: PropTypes.string,
};

export default Input;
