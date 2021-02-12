import React from 'react';

export default function CircleImage() {
  return (
    <>
      <img
        src={require('assets/img/team-2-800x800.jpg')}
        alt="..."
        className="rounded-full max-w-full h-auto align-middle border-none"
      />
    </>
  );
}
