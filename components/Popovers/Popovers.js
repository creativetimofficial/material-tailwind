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
              'text-white font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize'
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
              'bg-' +
              color +
              '-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={popoverLeftRef}
          >
            <div>
              <div
                className={
                  'bg-' +
                  color +
                  '-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg'
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
          {/* Top */}
          <button
            className={
              'text-white font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize'
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
              'bg-' +
              color +
              '-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={popoverTopRef}
          >
            <div>
              <div
                className={
                  'bg-' +
                  color +
                  '-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg'
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
          {/* Right */}
          <button
            className={
              'text-white font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize'
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
              'bg-' +
              color +
              '-600 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={popoverRightRef}
          >
            <div>
              <div
                className={
                  'bg-' +
                  color +
                  '-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg'
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
          {/* Bottom */}
          <button
            className={
              'text-white font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-' +
              color +
              '-500 capitalize'
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
              'bg-' +
              color +
              '-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={popoverBottomRef}
          >
            <div>
              <div
                className={
                  'bg-' +
                  color +
                  '-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg'
                }
              >
                {color} popover title
              </div>
              <div className="text-white p-3">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Popovers() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Popover key={key} color={prop} />;
      })}
    </>
  );
}
