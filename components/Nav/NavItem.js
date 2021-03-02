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

const NavbarItem = ({ children, color, active, ...rest }) => {
  return (
    <li>
      <a
        {...rest}
        className={`${active === 'dark' && 'bg-black bg-opacity-10'} ${
          active === 'light' && 'bg-white bg-opacity-10'
        } relative overflow-hidden p-4 flex gap-1 items-center text-xs uppercase font-medium leading ${
          colors[color]
        } rounded`}
      >
        {children}
      </a>
    </li>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.string,
};

export default NavbarItem;
