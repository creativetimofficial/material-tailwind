import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, raised, rounded, ...rest }) => {
  return (
    <>
      <img
        {...rest}
        src={src}
        className={`rounded-${rounded ? 'full' : 'md'} ${
          raised ? 'shadow-xl' : ''
        } max-w-full h-auto align-middle border-none`}
      />
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  raised: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Image;
