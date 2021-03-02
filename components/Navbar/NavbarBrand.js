import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  white: 'text-white',
  black: 'text-black',
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

const NavbarBrand = ({ children, color }) => {
  return (
    <a
      className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase ${colors[color]}`}
      href="#pablo"
    >
      {children}
    </a>
  );
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default NavbarBrand;
