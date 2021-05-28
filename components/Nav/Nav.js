import React from 'react';
import PropTypes from 'prop-types';

export default function Nav({ children, leftSide, className }) {
    return (
        <ul
            className={`flex lg:items-center flex-col lg:flex-row list-none ${
                leftSide ? 'mr-auto' : 'ml-auto'
            } ${className}`}
        >
            {children}
        </ul>
    );
}

Nav.defaultProps = {
    leftSide: false,
};

Nav.propTypes = {
    children: PropTypes.node.isRequired,
    leftSide: PropTypes.bool.isRequired,
};
