import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, raised, rounded, className, ...rest }) {
    return (
        <>
            <img
                {...rest}
                src={src}
                className={`${rounded ? 'rounded-full' : 'rounded-xl'} ${
                    raised ? 'shadow-lg' : ''
                } max-w-full h-auto align-middle border-none ${className}`}
            />
        </>
    );
}

Image.defaultProps = {
    raised: false,
    rounded: false,
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    raised: PropTypes.bool.isRequired,
    rounded: PropTypes.bool.isRequired,
};
