import React from 'react';
import PropTypes from 'prop-types';

const colors = {
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

const TabList = ({ children, color }) => {
  return (
    <ul
      className={`${colors[color]} rounded-t flex justify-start mb-0 list-none"`}
      role="tablist"
    >
      {children}
    </ul>
  );
};

TabList.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default TabList;
