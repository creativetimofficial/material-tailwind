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

const Popover = ({ color, position }) => {
  // left
  const [popoverShow, setPopoverShow] = React.useState(false);
  const btnPopoverRef = React.createRef();
  const popoverRef = React.createRef();
  const openPopover = () => {
    new createPopper(btnPopoverRef.current, popoverRef.current, {
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
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div>
        <button
          className={`text-white font-medium py-2.5 px-6 text-sm tracking-wider rounded outline-none focus:outline-none bg-${color}-500 capitalize shadow-md hover:shadow-xl hover:bg-${color}-700 focus:bg-${color}-400 active:bg-${color}-900`}
          type="button"
          onClick={() => {
            popoverShow ? closePopover() : openPopover();
          }}
          ref={btnPopoverRef}
        >
          Popover {position}
        </button>
        <div
          className={`${
            popoverShow ? '' : 'hidden'
          } bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-lg`}
          ref={popoverRef}
        >
          <div>
            <div className="bg-white text-black p-4 mb-0 uppercase rounded">
              {color} popover title
            </div>
            <div className="text-gray-800 pb-4 px-4">
              And here's some amazing content. It's very engaging. Right?
            </div>
          </div>
        </div>
      </div>
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
