import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({ children, active, ...rest }) => {
  return (
    <li>
      <a
        {...rest}
        className={`${
          active && 'bg-white bg-opacity-10'
        } relative overflow-hidden p-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded`}
      >
        {children}
      </a>
    </li>
  );
};

NavbarItem.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
};

export default NavbarItem;
