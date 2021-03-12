import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarItem({ children, active, ...rest }) {
  return (
    <li>
      <a
        {...rest}
        className={`${active === 'dark' && 'bg-black bg-opacity-20'} ${
          active === 'light' && 'bg-white bg-opacity-20'
        } px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg`}
      >
        {children}
      </a>
    </li>
  );
}

NavbarItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
};
