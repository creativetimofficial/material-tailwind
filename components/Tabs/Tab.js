import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => {
  return (
    <div className="w-full relative flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node,
};

export default Tab;
