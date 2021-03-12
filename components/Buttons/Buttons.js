import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const filledBgColors = {
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

const filledBgHoverColors = {
  blueGray: 'bg-blue-gray-700',
  gray: 'bg-gray-700',
  brown: 'bg-brown-700',
  deepOrange: 'bg-deep-orange-700',
  orange: 'bg-orange-700',
  amber: 'bg-amber-700',
  yellow: 'bg-yellow-700',
  lime: 'bg-lime-700',
  lightGreen: 'bg-light-green-700',
  green: 'bg-green-700',
  teal: 'bg-teal-700',
  cyan: 'bg-cyan-700',
  lightBlue: 'bg-light-blue-700',
  blue: 'bg-blue-700',
  indigo: 'bg-indigo-700',
  deepPurple: 'bg-deep-purple-700',
  purple: 'bg-purple-700',
  pink: 'bg-pink-700',
  red: 'bg-red-700',
};

const filledBgFocusColors = {
  blueGray: 'bg-blue-gray-400',
  gray: 'bg-gray-400',
  brown: 'bg-brown-400',
  deepOrange: 'bg-deep-orange-400',
  orange: 'bg-orange-400',
  amber: 'bg-amber-400',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-400',
  lightGreen: 'bg-light-green-400',
  green: 'bg-green-400',
  teal: 'bg-teal-400',
  cyan: 'bg-cyan-400',
  lightBlue: 'bg-light-blue-400',
  blue: 'bg-blue-400',
  indigo: 'bg-indigo-400',
  deepPurple: 'bg-deep-purple-400',
  purple: 'bg-purple-400',
  pink: 'bg-pink-400',
  red: 'bg-red-400',
};

const filledBgActiveColors = {
  blueGray: 'bg-blue-gray-800',
  gray: 'bg-gray-800',
  brown: 'bg-brown-800',
  deepOrange: 'bg-deep-orange-800',
  orange: 'bg-orange-800',
  amber: 'bg-amber-800',
  yellow: 'bg-yellow-800',
  lime: 'bg-lime-800',
  lightGreen: 'bg-light-green-800',
  green: 'bg-green-800',
  teal: 'bg-teal-800',
  cyan: 'bg-cyan-800',
  lightBlue: 'bg-light-blue-800',
  blue: 'bg-blue-800',
  indigo: 'bg-indigo-800',
  deepPurple: 'bg-deep-purple-800',
  purple: 'bg-purple-800',
  pink: 'bg-pink-800',
  red: 'bg-red-800',
};

const outlineTextColors = {
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

const outlineBorderColors = {
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

const outlineBgHoverColors = {
  blueGray: 'bg-blue-gray-50',
  gray: 'bg-gray-50',
  brown: 'bg-brown-50',
  deepOrange: 'bg-deep-orange-50',
  orange: 'bg-orange-50',
  amber: 'bg-amber-50',
  yellow: 'bg-yellow-50',
  lime: 'bg-lime-50',
  lightGreen: 'bg-light-green-50',
  green: 'bg-green-50',
  teal: 'bg-teal-50',
  cyan: 'bg-cyan-50',
  lightBlue: 'bg-light-blue-50',
  blue: 'bg-blue-50',
  indigo: 'bg-indigo-50',
  deepPurple: 'bg-deep-purple-50',
  purple: 'bg-purple-50',
  pink: 'bg-pink-50',
  red: 'bg-red-50',
};

const outlineBorderHoverColors = {
  blueGray: 'border-blue-gray-700',
  gray: 'border-gray-700',
  brown: 'border-brown-700',
  deepOrange: 'border-deep-orange-700',
  orange: 'border-orange-700',
  amber: 'border-amber-700',
  yellow: 'border-yellow-700',
  lime: 'border-lime-700',
  lightGreen: 'border-light-green-700',
  green: 'border-green-700',
  teal: 'border-teal-700',
  cyan: 'border-cyan-700',
  lightBlue: 'border-light-blue-700',
  blue: 'border-blue-700',
  indigo: 'border-indigo-700',
  deepPurple: 'border-deep-purple-700',
  purple: 'border-purple-700',
  pink: 'border-pink-700',
  red: 'border-red-700',
};

const outlineTextHoverColors = {
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  lightGreen: 'text-light-green-700',
  green: 'text-green-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  lightBlue: 'text-light-blue-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  deepPurple: 'text-deep-purple-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  red: 'text-red-700',
};

const outlineBgActiveColors = {
  blueGray: 'bg-blue-gray-100',
  gray: 'bg-gray-100',
  brown: 'bg-brown-100',
  deepOrange: 'bg-deep-orange-100',
  orange: 'bg-orange-100',
  amber: 'bg-amber-100',
  yellow: 'bg-yellow-100',
  lime: 'bg-lime-100',
  lightGreen: 'bg-light-green-100',
  green: 'bg-green-100',
  teal: 'bg-teal-100',
  cyan: 'bg-cyan-100',
  lightBlue: 'bg-light-blue-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  deepPurple: 'bg-deep-purple-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
  red: 'bg-red-100',
};

const Buttons = forwardRef(
  (
    {
      children,
      color,
      buttonType,
      size = 'regular',
      rounded,
      iconOnly,
      ...rest
    },
    ref,
  ) => {
    let classes = [];

    rounded = rounded ? 'rounded-full' : 'rounded';

    const sharedClasses = [
      'flex',
      'items-center',
      'gap-1',
      'rounded-lg',
      'font-bold',
      'outline-none',
      'uppercase',
      'tracking-wider',
      'focus:outline-none',
      'focus:shadow-none',
      'transition-all',
      'duration-300',
      rounded,
    ];

    const buttonFilled = [
      'text-white',
      'shadow-md',
      'hover:shadow-xl',
      'focus:text-white',
      filledBgColors[color],
      `hover:${filledBgHoverColors[color]}`,
      `focus:${filledBgFocusColors[color]}`,
      `active:${filledBgActiveColors[color]}`,
    ];

    const buttonOutline = [
      'bg-transparent',
      'border',
      'border-solid',
      'shadow-none',
      outlineTextColors[color],
      outlineBorderColors[color],
      `hover:${outlineBgHoverColors[color]}`,
      `hover:${outlineBorderHoverColors[color]}`,
      `hover:${outlineTextHoverColors[color]}`,
      `focus:${outlineBgHoverColors[color]}`,
      `active:${outlineBgActiveColors[color]}`,
    ];

    const buttonLink = [
      `bg-transparent`,
      outlineTextColors[color],
      `hover:${outlineBgHoverColors[color]}`,
      `hover:${outlineTextHoverColors[color]}`,
      `focus:${outlineBgHoverColors[color]}`,
      `active:${outlineBgActiveColors[color]}`,
    ];

    const buttonSM = [
      ...sharedClasses,
      iconOnly ? 'w-8 h-8 p-0 grid place-items-center' : 'py-1.5 px-4',
      'text-xs',
      'leading-normal',
    ];
    const buttonRegular = [
      ...sharedClasses,
      iconOnly ? 'w-10 h-10 p-0 grid place-items-center' : 'py-2.5 px-6',
      'text-xs',
      'leading-normal',
    ];
    const buttonLG = [
      ...sharedClasses,
      iconOnly ? 'w-12 h-12 p-0 grid place-items-center' : 'py-3 px-7',
      'text-sm',
      'leading-relaxed',
    ];

    if (size === 'sm') {
      classes.push(...buttonSM);
    } else if (size === 'lg') {
      classes.push(...buttonLG);
    } else {
      classes.push(...buttonRegular);
    }

    if (buttonType === 'outline') {
      classes.push(...buttonOutline);
    } else if (buttonType === 'link') {
      classes.push(...buttonLink);
    } else {
      classes.push(...buttonFilled);
    }

    classes = classes.join(' ');

    return (
      <button {...rest} className={classes} ref={ref}>
        {children}
      </button>
    );
  },
);

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.bool,
};

export default Buttons;
