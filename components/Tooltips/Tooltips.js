import React from 'react';
import { createPopper } from '@popperjs/core';

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

const Tooltips = ({ color, position }) => {
  const [tooltipsShow, setTooltipsShow] = React.useState(false);
  const btnTooltipsRef = React.createRef();
  const tooltipsRef = React.createRef();
  const openTooltips = () => {
    new createPopper(btnTooltipsRef.current, tooltipsRef.current, {
      placement: position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    setTooltipsShow(true);
  };
  const closeTooltips = () => {
    setTooltipsShow(false);
  };
  return (
    <>
      <div>
        <button
          className={`text-white font-medium py-2.5 px-6 text-sm tracking-wider rounded outline-none focus:outline-none bg-${color}-500 capitalize shadow-md hover:shadow-xl hover:bg-${color}-700 focus:bg-${color}-400 active:bg-${color}-800 transition-all duration-300`}
          type="button"
          onMouseEnter={openTooltips}
          onMouseLeave={closeTooltips}
          ref={btnTooltipsRef}
        >
          Tooltips {position}
        </button>
        <div
          className={`absolute transition-all duration-300 ${
            tooltipsShow
              ? 'opacity-1 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          } bg-gray-800 text-white border-0 block z-50 font-normal leading-normal text-sm py-1.5 px-5 rounded shadow-md`}
          ref={tooltipsRef}
        >
          Tooltips {position}
        </div>
      </div>
    </>
  );
};

export default Tooltips;

// export default function Popovers() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Popover key={key} color={prop} />;
//       })}
//     </>
//   );
// }
