import React from 'react';
import PropTypes from 'prop-types';

const TabPane = ({ children, active }) => {
  return <div className={active ? 'block' : 'hidden'}>{children}</div>;
};

TabPane.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default TabPane;
