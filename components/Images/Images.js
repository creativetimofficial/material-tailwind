import React from 'react';

const Images = ({ src, raised, rounded }) => {
  return (
    <>
      <img
        src={src}
        alt="..."
        className={`rounded-${rounded ? 'full' : 'md'} ${
          raised ? 'shadow-xl' : ''
        } max-w-full h-auto align-middle border-none`}
      />
    </>
  );
};

export default Images;
