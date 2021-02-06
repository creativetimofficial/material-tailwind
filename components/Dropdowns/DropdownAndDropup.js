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

const DropdownAndDropup = ({ color }) => {
  // dropdown
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // dropup
  const [dropupPopoverShow, setDropupPopoverShow] = React.useState(false);
  const btnDropupRef = React.createRef();
  const popoverDropupRef = React.createRef();
  const openDropupPopover = () => {
    new createPopper(btnDropupRef.current, popoverDropupRef.current, {
      placement: 'top-end',
    });
    setDropupPopoverShow(true);
  };
  const closeDropupPopover = () => {
    setDropupPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === 'default'
    ? (bgColor = 'bg-gray-800')
    : (bgColor = 'bg-' + color + '-500');
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-2/12">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                'text-white font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full ' +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              {color === 'default' ? 'White Dropdown' : color + ' Dropdown'}
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                (color === 'default' ? 'bg-white ' : bgColor + ' ') +
                'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
              }
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-gray-200" />
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-6/12 md:w-2/12">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                'text-white font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 capitalize w-full ' +
                bgColor
              }
              type="button"
              ref={btnDropupRef}
              onClick={() => {
                dropupPopoverShow ? closeDropupPopover() : openDropupPopover();
              }}
            >
              {color === 'default' ? 'White Dropup' : color + ' Dropup'}
            </button>
            <div
              ref={popoverDropupRef}
              className={
                (dropupPopoverShow ? 'block ' : 'hidden ') +
                (color === 'default' ? 'bg-white ' : bgColor + ' ') +
                'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
              }
              style={{ minWidth: '12rem' }}
            >
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-gray-200" />
              <a
                href="#pablo"
                className={
                  'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent ' +
                  (color === 'default' ? ' text-gray-800' : 'text-white')
                }
                onClick={(e) => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownsAndDropups() {
  return (
    <>
      {colors.map((prop, key) => {
        return <DropdownAndDropup key={key} color={prop} />;
      })}
    </>
  );
}
