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

const Dropdowns = ({
  children,
  color,
  type,
  size = 'regular',
  position = 'bottom-start',
  rounded,
}) => {
  // Styles
  let classes = [];

  rounded = rounded ? 'rounded-full' : 'rounded';

  const sharedClasses = [
    'flex',
    'items-center',
    'gap-1',
    'font-medium',
    'outline-none',
    'uppercase',
    'tracking-wider',
    'focus:outline-none',
    rounded,
  ];

  const buttonFilled = [
    'text-white',
    'shadow-md',
    'hover:shadow-xl',
    'focus:text-white',
    `bg-${color}-500`,
    `hover:bg-${color}-700`,
    `focus:bg-${color}-400`,
    `active:bg-${color}-800`,
  ];

  const buttonOutline = [
    'bg-transparent',
    'border',
    'border-solid',
    'shadow-none',
    `text-${color}-500`,
    `border-${color}-400`,
    `hover:bg-${color}-50`,
    `hover:border-${color}-600`,
    `hover:text-${color}-700`,
    `focus:bg-${color}-50`,
    `active:bg-${color}-100`,
  ];

  const buttonLink = [
    `background-transparent`,
    `text-${color}-500`,
    `hover:bg-${color}-50`,
    `focus:bg-${color}-50`,
    `active:bg-${color}-100`,
  ];

  const buttonSM = [
    ...sharedClasses,
    'py-1.5 px-5',
    'text-xs',
    'leading-normal',
    'rounded',
  ];
  const buttonRegular = [
    ...sharedClasses,
    'p-2.5 px-7',
    'text-xs',
    'leading-normal',
    'rounded',
  ];
  const buttonLG = [
    ...sharedClasses,
    'py-3 px-8',
    'text-sm',
    'leading-relaxed',
    'rounded-md',
  ];

  if (size === 'sm') {
    classes.push(...buttonSM);
  } else if (size === 'lg') {
    classes.push(...buttonLG);
  } else {
    classes.push(...buttonRegular);
  }

  if (type === 'outline') {
    classes.push(...buttonOutline);
  } else if (type === 'link') {
    classes.push(...buttonLink);
  } else {
    classes.push(...buttonFilled);
  }

  classes = classes.join(' ');

  // Dropdown
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    new createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: position === 'top' ? 'top-end' : 'bottom-start',
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="relative inline-flex items-center">
        <button
          className={classes}
          type="button"
          ref={btnDropdownRef}
          onClick={() => {
            dropdownPopoverShow
              ? closeDropdownPopover()
              : openDropdownPopover();
          }}
        >
          Dropdown
          <span className="material-icons text-lg align-middle">
            {dropdownPopoverShow ? 'arrow_drop_up' : 'arrow_drop_down'}
          </span>
        </button>
        <div
          ref={popoverDropdownRef}
          className={`${
            dropdownPopoverShow ? 'block' : 'hidden'
          } bg-white text-base z-50 float-left list-none text-left rounded shadow-lg mt-1`}
          style={{ minWidth: '10rem' }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Dropdowns;
