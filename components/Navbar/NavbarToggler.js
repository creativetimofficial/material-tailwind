import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  white: 'bg-white',
  back: 'bg-black',
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

const NavbarToggler = ({ color, ...rest }) => {
  return (
    <button
      {...rest}
      className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
      type="button"
    >
      <span
        className={`block relative w-6 h-px rounded-sm ${colors[color]}`}
      ></span>
      <span
        className={`block relative w-6 h-px rounded-sm ${colors[color]} mt-1`}
      ></span>
      <span
        className={`block relative w-6 h-px rounded-sm ${colors[color]} mt-1`}
      ></span>
    </button>
  );
};

NavbarToggler.propTypes = {
  color: PropTypes.string,
};

export default NavbarToggler;
