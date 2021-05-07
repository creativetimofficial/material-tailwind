import React from 'react';
import PropTypes from 'prop-types';

export default function CardFooter({ children, className }) {
    return <div className={`p-4 ${className}`}>{children}</div>;
}

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
};
