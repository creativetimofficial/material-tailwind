import React from 'react';
import PropTypes from 'prop-types';

const textColors = {
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

const citeColors = {
  white: 'text-white',
  black: 'text-black',
  blueGray: 'text-blue-gray-600',
  gray: 'text-gray-600',
  brown: 'text-brown-600',
  deepOrange: 'text-deep-orange-600',
  orange: 'text-orange-600',
  amber: 'text-amber-600',
  yellow: 'text-yellow-600',
  lime: 'text-lime-600',
  lightGreen: 'text-light-green-600',
  green: 'text-green-600',
  teal: 'text-teal-600',
  cyan: 'text-cyan-600',
  lightBlue: 'text-light-blue-600',
  blue: 'text-blue-600',
  indigo: 'text-indigo-600',
  deepPurple: 'text-deep-purple-600',
  purple: 'text-purple-600',
  pink: 'text-pink-600',
  red: 'text-red-600',
};

const Quote = ({ children, color, footer, cite, ...rest }) => {
  return (
    <div {...rest} className="mb-2">
      <p
        className={`${textColors[color]} text-base font-light leading-relaxed mt-0 mb-2`}
      >
        {children}
      </p>
      <footer className={`block ${citeColors[color]}`}>
        - {footer} <cite>{cite}</cite>
      </footer>
    </div>
  );
};

Quote.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  footer: PropTypes.string,
  cite: PropTypes.string,
};

export default Quote;
