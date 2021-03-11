import React from 'react';
import PropTypes from 'prop-types';

const colors = {
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

const H1 = ({ children, color, ...rest }) => {
  return (
    <h1
      {...rest}
      className={`${colors[color]} text-6xl font-serif font-normal leading-normal mt-0 mb-2`}
    >
      {children}
    </h1>
  );
};

H1.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default H1;
