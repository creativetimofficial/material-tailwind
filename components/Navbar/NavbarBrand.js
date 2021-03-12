import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarBrand({ children }) {
  return (
    <a
      className={`text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white`}
      href="#pablo"
    >
      {children}
    </a>
  );
}

NavbarBrand.propTypes = {
  children: PropTypes.node.isRequired,
};
