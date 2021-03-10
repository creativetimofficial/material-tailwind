import React from 'react';
import PropTypes from 'prop-types';

const NavbarList = ({ children, leftSide }) => {
  return (
    <ul
      className={`flex flex-col lg:flex-row list-none ${
        leftSide ? 'mr-auto' : 'ml-auto'
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
