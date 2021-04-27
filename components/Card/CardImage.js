import React from 'react';
import PropTypes from 'prop-types';

export default function CardImage({ className, src, ...rest }) {
  return (
    <img {...rest} className={`${className} w-full rounded-lg -mt-8 shadow-lg`} src={src} />
  );
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
};
