import React from 'react';
import PropTypes from 'prop-types';

export default function Tab({ children }) {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md w-full p-4 my-8">
            {children}
        </div>
    );
}

Tab.propTypes = {
    children: PropTypes.node.isRequired,
};
