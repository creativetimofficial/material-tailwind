import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ children }) => {
  return <div className="px-4 pb-4">{children}</div>;
};

CardFooter.propTypes = {
  children: PropTypes.node,
};

export default CardFooter;
