import React from 'react';
import PropTypes from 'prop-types';

export default function PopoverContainer({ children }) {
  return (
    <div className="bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-2xl">
      {children}
    </div>
  );
}

PopoverContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
