import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarWrapper({ children }) {
  return (
    <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      {children}
    </div>
  );
}

NavbarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
