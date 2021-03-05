import React from 'react';
import PropTypes from 'prop-types';

const CardImage = ({ src, ...rest }) => {
  return <img {...rest} className="w-full" src={src} />;
};

CardImage.propTypes = {
  src: PropTypes.string,
};

export default CardImage;
