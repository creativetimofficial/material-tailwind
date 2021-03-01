import React from 'react';
import PropTypes from 'prop-types';

const NavbarNav = ({ children, toggler }) => {
  return (
    <div
      className={`lg:flex flex-grow items-center ${
        toggler ? 'block' : 'hidden'
      }`}
    >
      {children}
    </div>
  );
};

NavbarNav.propTypes = {
  children: PropTypes.node,
  toggler: PropTypes.bool,
};

export default NavbarNav;
