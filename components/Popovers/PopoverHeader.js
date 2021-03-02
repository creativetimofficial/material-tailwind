import React from 'react';
import PropTypes from 'prop-types';

const PopoverHeader = ({ children }) => {
  return (
    <div className="text-black p-4 mb-0 uppercase font-medium rounded">
      {children}
    </div>
  );
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
};

export default PopoverHeader;
