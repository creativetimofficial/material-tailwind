import React from 'react';

const Inputs = ({ color, type, size, error }) => {
  if (size === 'sm') {
    size = 'w-64 h-10 px-2.5 pt-3 pb-2.5';
  } else if (size === 'lg') {
    size = 'w-96 h-16 px-4 pt-6 pb-5';
  } else {
    size = 'w-72 h-12 px-3 pt-4 pb-3.5';
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Regular"
        className={`flex flex-column text-base ${
          type === 'outline'
            ? 'border border-1 rounded bg-transparent'
            : `border border-t-0 border-b-1 border-l-0 border-r-0 rounded-t bg-gray-200`
        } border-${
          error ? 'red-500' : 'gray-400'
        } focus:ring-0 ${size} focus:border-b-2 focus:border-${
          error ? 'red-500' : `${color}-600`
        }`}
      />
      {error && (
        <span className="block mt-1 text-xs text-red-500">Error Massage</span>
      )}
    </div>
  );
};

export default Inputs;
