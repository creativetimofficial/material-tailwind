import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ children }) => {
  return <div className="px-4 py-5">{children}</div>;
};

CardHeader.propTypes = {
  children: PropTypes.node,
};

export default CardHeader;
