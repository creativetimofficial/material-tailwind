import React from 'react';
import PropTypes from 'prop-types';

const PopoverHeader = ({ children }) => {
  return <div className="text-gray-800 px-4 pb-4">{children}</div>;
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
};

export default PopoverHeader;
