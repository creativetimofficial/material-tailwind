import React from 'react';
import PropTypes from 'prop-types';

const NavbarList = ({ children, navbar }) => {
  return (
    <ul
      className={`flex flex-col lg:flex-row list-none ${
        navbar ? 'mr-auto' : 'ml-auto'
      }`}
    >
      {children}
    </ul>
  );
};

NavbarList.propTypes = {
  children: PropTypes.node,
  navbar: PropTypes.bool,
};

export default NavbarList;
