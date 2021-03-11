import React from 'react';
import PropTypes from 'prop-types';

const NavbarBrand = ({ children, color }) => {
  return (
    <a
      className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white`}
      href="#pablo"
    >
      {children}
    </a>
  );
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default NavbarBrand;
