import React from 'react';
import PropTypes from 'prop-types';

const textColors = {
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-600',
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

const citeColors = {
  blueGray: 'text-blue-gray-800',
  gray: 'text-gray-800',
  brown: 'text-brown-800',
  deepOrange: 'text-deep-orange-800',
  orange: 'text-orange-800',
  amber: 'text-amber-800',
  yellow: 'text-yellow-800',
  lime: 'text-lime-800',
  lightGreen: 'text-light-green-800',
  green: 'text-green-800',
  teal: 'text-teal-800',
  cyan: 'text-cyan-800',
  lightBlue: 'text-light-blue-800',
  blue: 'text-blue-800',
  indigo: 'text-indigo-800',
  deepPurple: 'text-deep-purple-800',
  purple: 'text-purple-800',
  pink: 'text-pink-800',
  red: 'text-red-800',
};

export default function Quote({ children, color, footer, cite, ...rest }) {
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
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  cite: PropTypes.string.isRequired,
};
