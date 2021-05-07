import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarCollapse({ children, className, open }) {
    return (
        <div
            className={`lg:flex flex-grow items-center ${
                open ? 'block' : 'hidden'
            } ${className}`}
        >
            {children}
        </div>
    );
}

NavbarCollapse.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
};
