import React from 'react';

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

export default Image;
