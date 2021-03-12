import React from 'react';
import PropTypes from 'prop-types';

export default function CardBody({ children }) {
  return <div className="px-4 pt-5 pb-4">{children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};
