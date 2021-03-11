import React from 'react';
import PropTypes from 'prop-types';

const PopoverHeader = ({ children }) => {
  return (
    <div className="text-gray-900 p-4 pb-2 uppercase font-bold">{children}</div>
  );
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
};

export default PopoverHeader;
