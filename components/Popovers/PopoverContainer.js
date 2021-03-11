import React from 'react';
import PropTypes from 'prop-types';

const PopoverContainer = ({ children }) => {
  return (
    <div className="bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-md shadow-2xl">
      {children}
    </div>
  );
};

PopoverContainer.propTypes = {
  children: PropTypes.node,
};

export default PopoverContainer;
