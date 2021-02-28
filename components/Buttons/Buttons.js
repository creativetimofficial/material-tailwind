import React from 'react';
import 'ripple/ripple';

const bgColors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-500',
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

const textColors = {
  blueGray: 'text-blue-gray-500',
  gray: 'text-gray-500',
  brown: 'text-brown-500',
  deepOrange: 'text-deep-orange-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-500',
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

const borderColors = {
  blueGray: 'border-blue-gray-500',
  gray: 'border-gray-500',
  brown: 'border-brown-500',
  deepOrange: 'border-deep-orange-500',
  orange: 'border-orange-500',
  amber: 'border-amber-500',
  yellow: 'border-yellow-500',
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

const hoverColors = {
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

const focusColors = {
  blueGray: 'bg-blue-gray-400',
  gray: 'bg-gray-400',
  brown: 'bg-brown-400',
  deepOrange: 'bg-deep-orange-400',
  orange: 'bg-orange-400',
  amber: 'bg-amber-400',
  yellow: 'bg-yellow-400',
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

const activeColors = {
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

const Buttons = ({
  children,
  color,
  type,
  size = 'regular',
  rounded,
  ...rest
}) => {
  let classes = [];

  rounded = rounded ? 'rounded-full' : 'rounded';

  const sharedClasses = [
    'flex',
    'items-center',
    'gap-1',
    'font-medium',
    'outline-none',
    'uppercase',
    'tracking-wider',
    'focus:outline-none',
    'transition-all',
    'duration-300',
    'relative',
    'overflow-hidden',
    rounded,
  ];

  const buttonFilled = [
    'text-white',
    'shadow-md',
    'hover:shadow-xl',
    'focus:text-white',
    bgColors[color],
    `hover:${hoverColors[color]}`,
    `focus:${focusColors[color]}`,
    `active:${activeColors[color]}`,
  ];

  const buttonOutline = [
    'bg-transparent',
    'border',
    'border-solid',
    'shadow-none',
    textColors[color],
    borderColors[color],
    `hover:bg-${color}-50`,
    `hover:border-${color}-600`,
    `hover:text-${color}-700`,
    `focus:bg-${color}-50`,
    `active:bg-${color}-100`,
  ];

  const buttonLink = [
    `bg-transparent`,
    `text-${color}-500`,
    `hover:bg-${color}-50`,
    `focus:bg-${color}-50`,
    `active:bg-${color}-100`,
  ];

  const buttonSM = [
    ...sharedClasses,
    'py-1.5 px-4',
    'text-xs',
    'leading-normal',
    'rounded',
  ];
  const buttonRegular = [
    ...sharedClasses,
    'py-2.5 px-6',
    'text-xs',
    'leading-normal',
    'rounded',
  ];
  const buttonLG = [
    ...sharedClasses,
    'py-3 px-7',
    'text-sm',
    'leading-relaxed',
    'rounded-md',
  ];

  if (size === 'sm') {
    classes.push(...buttonSM);
  } else if (size === 'lg') {
    classes.push(...buttonLG);
  } else {
    classes.push(...buttonRegular);
  }

  if (type === 'outline') {
    classes.push(...buttonOutline);
  } else if (type === 'link') {
    classes.push(...buttonLink);
  } else {
    classes.push(...buttonFilled);
  }

  classes = classes.join(' ');

  return (
    <button {...rest} className={classes} data-md-ripple={true}>
      {children}
    </button>
  );
};

export default Buttons;
