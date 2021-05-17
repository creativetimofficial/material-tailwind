import React from 'react';
import PropTypes from 'prop-types';

export default function PopoverHeader({ children, className }) {
    return (
        <div
            className={`text-gray-900 p-4 pb-2 uppercase font-bold ${className}`}
        >
            {children}
        </div>
    );
}

PopoverHeader.propTypes = {
    children: PropTypes.node.isRequired,
};
