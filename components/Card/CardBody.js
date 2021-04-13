import React from 'react';
import PropTypes from 'prop-types';

export default function CardBody({ children }) {
    return <div className="p-4">{children}</div>;
}

CardBody.propTypes = {
    children: PropTypes.node.isRequired,
};
