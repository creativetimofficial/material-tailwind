import React from 'react';

const InputsIcon = ({ color, type, size, iconPosition }) => {
  if (size === 'sm') {
    size = `w-64 h-10 ${
      iconPosition === 'right' ? 'pl-3 pr-10' : 'pl-10 pr-2'
    } pt-3 pb-2.5`;
  } else if (size === 'lg') {
    size = `w-96 h-16 ${
      iconPosition === 'right' ? 'pl-6 pr-12' : 'pl-12 pr-5'
    } pt-6 pb-5`;
  } else {
    size = `w-72 h-12 ${
      iconPosition === 'right' ? 'pl-4 pr-11' : 'pl-11 pr-3'
    } pt-4 pb-3.5`;
  }

  return (
    <div className="relative flex items-center">
      <span
        className={`material-icons text-2xl text-gray-600 absolute ${
          iconPosition === 'right' ? 'right-3' : 'left-3'
        }`}
      >
        person
      </span>

      <input
        type="text"
        placeholder="Regular"
        className={`text-base ${
          type === 'outline'
            ? 'border-1 rounded bg-transparent'
            : `border-t-0 border-b-1 border-l-0 border-r-0 rounded-t bg-gray-200`
        } border-gray-400 focus:ring-0 ${size} focus:border-b-2 focus:border-${color}-600`}
      />
    </div>
  );
};

export default InputsIcon;
