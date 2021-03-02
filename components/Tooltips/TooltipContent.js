import React from 'react';
import PropTypes from 'prop-types';

const TooltipContent = ({ children }) => {
  return (
    <div className="px-2.5 py-1.5 bg-black bg-opacity-75 text-white text-sm rounded">
      {children}
    </div>
  );
};

TooltipContent.propTypes = {
  children: PropTypes.node,
};

export default TooltipContent;
