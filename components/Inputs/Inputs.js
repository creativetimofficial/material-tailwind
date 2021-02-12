import React from 'react';

const Inputs = ({ color, type, size }) => {
  if (size === 'sm') {
    size = 'w-64 h-10 pl-3 pr-2 pt-3 pb-2.5';
  } else if (size === 'lg') {
    size = 'w-96 h-16 pl-6 pr-5 pt-6 pb-5';
  } else {
    size = 'w-72 h-12 pl-4 pr-3 pt-4 pb-3.5';
  }

  return (
    <input
      type="text"
      placeholder="Regular"
      className={`text-base ${
        type === 'outline'
          ? 'border-2 rounded bg-transparent'
          : `border-t-0 border-b-2 border-l-0 border-r-0 rounded-t bg-${color}-200`
      } border-${color}-400 focus:ring-0 ${size} focus:border-${color}-600`}
    />
  );
};

export default Inputs;
