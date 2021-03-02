import React from 'react';
import PropTypes from 'prop-types';

const NavbarWrapper = ({ children }) => {
  return (
    <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      {children}
    </div>
  );
};

NavbarWrapper.propTypes = {
  children: PropTypes.node,
};

export default NavbarWrapper;
