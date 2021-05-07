import React from 'react';
import PropTypes from 'prop-types';

export default function CardImage({ src, className, ...rest }) {
    return (
        <img
            {...rest}
            className={`w-full rounded-lg -mt-9 shadow-lg ${className}`}
            src={src}
        />
    );
}

CardImage.propTypes = {
    src: PropTypes.string.isRequired,
};
