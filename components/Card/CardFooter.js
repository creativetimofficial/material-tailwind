import React from 'react';
import PropTypes from 'prop-types';

export default function CardFooter({ children }) {
    return <div className="p-4">{children}</div>;
}

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
};
