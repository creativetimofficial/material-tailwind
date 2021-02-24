import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';
import 'ripple/ripple';

const colors = [
  'blueGray',
  'gray',
  'brown',
  'deepOrange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'lightGreen',
  'green',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'deepPurple',
  'purple',
  'pink',
  'red',
];

const Popover = ({ children, buttonText, color, position }) => {
  return (
    <>
      <Tippy
        content={children}
        placement={position}
        trigger="click"
        animation="shift-away"
        theme="light"
      >
        <button
          id="ripple"
          className={`relative overflow-hidden text-white font-medium py-2.5 px-6 text-sm tracking-wider rounded outline-none focus:outline-none bg-${color}-500 capitalize shadow-md hover:shadow-xl hover:bg-${color}-700 focus:bg-${color}-400 active:bg-${color}-800 transition-all duration-300`}
          type="button"
        >
          {buttonText}
        </button>
      </Tippy>
    </>
  );
};

export default Popover;

// export default function Popovers() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Popover key={key} color={prop} />;
//       })}
//     </>
//   );
// }
