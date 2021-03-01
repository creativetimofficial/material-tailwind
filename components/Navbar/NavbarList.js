import React from 'react';
import PropTypes from 'prop-types';

const NavbarList = ({ children }) => {
  return (
    <ul className="flex flex-col lg:flex-row list-none mr-auto">{children}</ul>
  );
};

NavbarList.propTypes = {
  children: PropTypes.node,
};

export default NavbarList;
