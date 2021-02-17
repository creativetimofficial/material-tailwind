import React from 'react';

const Images = ({ raised, rounded }) => {
  return (
    <>
      <img
        src={require('assets/img/team-1-800x800.jpg')}
        alt="..."
        className={`rounded-${rounded ? 'full' : 'md'} ${
          raised ? 'shadow-xl' : ''
        } max-w-full h-auto align-middle border-none`}
      />
    </>
  );
};

export default Images;
