import React from 'react';
import PropTypes from 'prop-types';

const DropdownItems = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-sm py-3 px-4 font-normal block whitespace-no-wrap text-gray-900 hover:bg-gray-500 hover:bg-opacity-10"
    >
      {children}
    </a>
  );
};

DropdownItems.propTypes = {
  children: PropTypes.node,
};

export default DropdownItems;
