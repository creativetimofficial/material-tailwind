import React from 'react';

export default function Image() {
  return (
    <>
      <img
        src={require('assets/img/team-1-800x800.jpg')}
        alt="..."
        className="rounded-md max-w-full h-auto align-middle border-none"
      />
    </>
  );
}
