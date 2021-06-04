import React from 'react';
import PropTypes from 'prop-types';

export default function CardRow({ children, className }) {
    return (
        <div className={`flex flex-wrap border-b border-gray-200 ${className}`}>
            {children}
        </div>
    );
}

CardRow.propTypes = {
    children: PropTypes.node.isRequired,
};
