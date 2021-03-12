import React from 'react';
import PropTypes from 'prop-types';

export default function CardHeader({ children }) {
  return <div className="px-4 py-5">{children}</div>;
}

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};
