import React from 'react';
import PropTypes from 'prop-types';

const NavbarNav = ({ children, open }) => {
  return (
    <div
      className={`lg:flex flex-grow items-center ${open ? 'block' : 'hidden'}`}
    >
      {children}
    </div>
  );
};

NavbarNav.propTypes = {
  children: PropTypes.node,
  open: PropTypes.bool,
};

export default NavbarNav;
