import React from 'react';
import PropTypes from 'prop-types';

export default function TabPane({ children, active, className }) {
    return (
        <div className={`${active ? 'block' : 'hidden'} ${className}`}>
            {children}
        </div>
    );
}

TabPane.defaultProps = {
    active: false,
};

TabPane.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
};
