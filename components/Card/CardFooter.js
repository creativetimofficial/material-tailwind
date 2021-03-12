import React from 'react';
import PropTypes from 'prop-types';

export default function CardFooter({ children }) {
  return <div className="px-4 pb-4">{children}</div>;
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};
