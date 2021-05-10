import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from '../Nav/NavItem';

export default function NavbarBrand({ children, ...rest }) {
    return (
        <a
            {...rest}
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
        >
            {children}
        </a>
    );
}

NavbarBrand.propTypes = {
    children: PropTypes.node.isRequired,
};
