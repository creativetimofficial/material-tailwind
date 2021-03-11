import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ src, ...rest }) => {
  return (
    <img {...rest} className="w-full rounded-lg -mt-8 shadow-lg" src={src} />
  );
};

CardImage.propTypes = {
  src: PropTypes.string,
};

export default CardImage;
