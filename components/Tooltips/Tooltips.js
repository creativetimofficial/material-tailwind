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

const Tooltip = ({ color }) => {
  // left
  const [leftTooltipShow, setLeftTooltipShow] = React.useState(false);
  const btnLeftRef = React.createRef();
  const tooltipLeftRef = React.createRef();
  const openLeftTooltip = () => {
    new createPopper(btnLeftRef.current, tooltipLeftRef.current, {
      placement: 'left',
    });
    setLeftTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setLeftTooltipShow(false);
  };
  // top
  const [topTooltipShow, setTopTooltipShow] = React.useState(false);
  const btnTopRef = React.createRef();
  const tooltipTopRef = React.createRef();
  const openTopTooltip = () => {
    new createPopper(btnTopRef.current, tooltipTopRef.current, {
      placement: 'top',
    });
    setTopTooltipShow(true);
  };
  const closeTopTooltip = () => {
    setTopTooltipShow(false);
  };
  // right
  const [rightTooltipShow, setRightTooltipShow] = React.useState(false);
  const btnRightRef = React.createRef();
  const tooltipRightRef = React.createRef();
  const openRightTooltip = () => {
    new createPopper(btnRightRef.current, tooltipRightRef.current, {
      placement: 'right',
    });
    setRightTooltipShow(true);
  };
  const closeRightTooltip = () => {
    setRightTooltipShow(false);
  };
  // bottom
  const [bottomTooltipShow, setBottomTooltipShow] = React.useState(false);
  const btnBottomRef = React.createRef();
  const tooltipBottomRef = React.createRef();
  const openBottomTooltip = () => {
    new createPopper(btnBottomRef.current, tooltipBottomRef.current, {
      placement: 'bottom',
    });
    setBottomTooltipShow(true);
  };
  const closeBottomTooltip = () => {
    setBottomTooltipShow(false);
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
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={btnLeftRef}
          >
            Left {color}
          </button>
          <div
            className={
              (leftTooltipShow ? '' : 'hidden ') +
              'bg-' +
              color +
              '-600 border-0 mr-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={tooltipLeftRef}
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
            onMouseEnter={openTopTooltip}
            onMouseLeave={closeTopTooltip}
            ref={btnTopRef}
          >
            Top {color}
          </button>
          <div
            className={
              (topTooltipShow ? '' : 'hidden ') +
              'bg-' +
              color +
              '-600 border-0 mb-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={tooltipTopRef}
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
            onMouseEnter={openRightTooltip}
            onMouseLeave={closeRightTooltip}
            ref={btnRightRef}
          >
            Right {color}
          </button>
          <div
            className={
              (rightTooltipShow ? '' : 'hidden ') +
              'bg-' +
              color +
              '-600 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={tooltipRightRef}
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
            onMouseEnter={openBottomTooltip}
            onMouseLeave={closeBottomTooltip}
            ref={btnBottomRef}
          >
            Bottom {color}
          </button>
          <div
            className={
              (bottomTooltipShow ? '' : 'hidden ') +
              'bg-' +
              color +
              '-600 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={tooltipBottomRef}
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

export default function JSTooltips() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Tooltip key={key} color={prop} />;
      })}
    </>
  );
}
