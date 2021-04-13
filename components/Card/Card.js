import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children }) {
    return (
        <div className="w-full bg-white rounded-xl overflow-hdden shadow p-4">
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
