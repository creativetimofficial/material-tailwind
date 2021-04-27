import React from 'react';
import PropTypes from 'prop-types';

export default function CardBody({ className, children }) {
  return <div className={`px-4 pt-5 pb-4 ${className}`}>{children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
