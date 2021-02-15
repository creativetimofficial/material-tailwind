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

const Popover = ({ color }) => {
  // left
  const [leftPopoverShow, setLeftPopoverShow] = React.useState(false);
  const btnLeftRef = React.createRef();
  const popoverLeftRef = React.createRef();
  const openLeftPopover = () => {
    new createPopper(btnLeftRef.current, popoverLeftRef.current, {
      placement: 'left',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    setLeftPopoverShow(true);
  };
  const closeLeftPopover = () => {
    setLeftPopoverShow(false);
  };
  // top
  const [topPopoverShow, setTopPopoverShow] = React.useState(false);
  const btnTopRef = React.createRef();
  const popoverTopRef = React.createRef();
  const openTopPopover = () => {
    new createPopper(btnTopRef.current, popoverTopRef.current, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    setTopPopoverShow(true);
  };
  const closeTopPopover = () => {
    setTopPopoverShow(false);
  };
  // right
  const [rightPopoverShow, setRightPopoverShow] = React.useState(false);
  const btnRightRef = React.createRef();
  const popoverRightRef = React.createRef();
  const openRightPopover = () => {
    new createPopper(btnRightRef.current, popoverRightRef.current, {
      placement: 'right',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    setRightPopoverShow(true);
  };
  const closeRightPopover = () => {
    setRightPopoverShow(false);
  };
  // bottom
  const [bottomPopoverShow, setBottomPopoverShow] = React.useState(false);
  const btnBottomRef = React.createRef();
  const popoverBottomRef = React.createRef();
  const openBottomPopover = () => {
    new createPopper(btnBottomRef.current, popoverBottomRef.current, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    });
    setBottomPopoverShow(true);
  };
  const closeBottomPopover = () => {
    setBottomPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          {/* Left */}
          <button
            className={
              'text-white font-normal py-3 px-6 text-sm rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize shadow hover:shadow-xl'
            }
            type="button"
            onClick={() => {
              leftPopoverShow ? closeLeftPopover() : openLeftPopover();
            }}
            ref={btnLeftRef}
          >
            Left {color}
          </button>
          <div
            className={
              (leftPopoverShow ? '' : 'hidden ') +
              'bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-lg'
            }
            ref={popoverLeftRef}
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
          {/* Top */}
          <button
            className={
              'text-white font-normal py-3 px-6 text-sm rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize shadow hover:shadow-xl'
            }
            type="button"
            onClick={() => {
              topPopoverShow ? closeTopPopover() : openTopPopover();
            }}
            ref={btnTopRef}
          >
            Top {color}
          </button>
          <div
            className={
              (topPopoverShow ? '' : 'hidden ') +
              'bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-lg'
            }
            ref={popoverTopRef}
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
          {/* Right */}
          <button
            className={
              'text-white font-normal py-3 px-6 text-sm rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize shadow hover:shadow-xl'
            }
            type="button"
            onClick={() => {
              rightPopoverShow ? closeRightPopover() : openRightPopover();
            }}
            ref={btnRightRef}
          >
            Right {color}
          </button>
          <div
            className={
              (rightPopoverShow ? '' : 'hidden ') +
              'bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-lg'
            }
            ref={popoverRightRef}
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
          {/* Bottom */}
          <button
            className={
              'text-white font-normal py-3 px-6 text-sm rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize shadow hover:shadow-xl'
            }
            type="button"
            onClick={() => {
              bottomPopoverShow ? closeBottomPopover() : openBottomPopover();
            }}
            ref={btnBottomRef}
          >
            Bottom {color}
          </button>
          <div
            className={
              (bottomPopoverShow ? '' : 'hidden ') +
              'bg-white border-0 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded shadow-lg'
            }
            ref={popoverBottomRef}
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
