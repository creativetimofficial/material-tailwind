import React, { Component } from 'react';

const DropdownItems = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-sm py-3 px-4 font-normal block whitespace-no-wrap text-gray-800 hover:bg-gray-500 hover:bg-opacity-10"
    >
      {children}
    </a>
  );
};

export default DropdownItems;
