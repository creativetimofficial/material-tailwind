import React from 'react';
import PropTypes from 'prop-types';

const NavbarContainer = ({ children }) => {
  return (
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      {children}
    </div>
  );
};

NavbarContainer.propTypes = {
  children: PropTypes.node,
};

export default NavbarContainer;
