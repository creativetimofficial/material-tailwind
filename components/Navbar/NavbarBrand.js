import React from 'react';
import PropTypes from 'prop-types';

const NavbarBrand = ({ children, toggler }) => {
  return (
    <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <a
        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
        href="#pablo"
      >
        {children}
      </a>
      <button
        className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={toggler}
      >
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
  );
};

NavbarBrand.propTypes = {
  children: PropTypes.node,
  toggler: PropTypes.func,
};

export default NavbarBrand;
