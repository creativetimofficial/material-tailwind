import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full">{children}</div>
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
};

export default Tab;
