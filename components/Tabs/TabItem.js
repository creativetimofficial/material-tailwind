import React from 'react';
import PropTypes from 'prop-types';

const TabItem = ({ children, active, ...rest }) => {
  return (
    <li className="text-center">
      <a
        {...rest}
        className={`flex items-center justify-center gap-1 relative overflow-hidden rounded-lg text-sm font-medium py-4 px-6 leading-normal text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300 ${
          active && 'bg-white bg-opacity-20'
        }`}
        role="tablist"
      >
        {children}
      </a>
    </li>
  );
};

TabItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default TabItem;
