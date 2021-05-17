import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, className }) {
    return (
        <div
            className={`w-full bg-white rounded-xl overflow-hdden shadow-md p-4 ${className}`}
        >
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
