import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-toward.css';

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
  buttonText,
  color,
  type,
  size = 'regular',
  position = 'bottom-start',
  rounded,
}) => {
  const [dropdownShow, setDropdownShow] = React.useState(false);

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
    'transition-all',
    'duration-300',
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

  return (
    <>
      <Tippy
        content={
          <div
            id="appp"
            className={`bg-white text-base z-50 float-left list-none text-left rounded shadow-lg mt-1 transition-all duration-500`}
            style={{ minWidth: '10rem' }}
          >
            {children}
          </div>
        }
        animation="shift-toward"
        trigger="click"
        hideOnClick="toggle"
        offset={[0, 0]}
        placement={position}
        interactive
      >
        <button
          className={classes}
          type="button"
          onClick={() =>
            dropdownShow ? setDropdownShow(false) : setDropdownShow(true)
          }
        >
          {buttonText}
          <span className="material-icons text-lg align-middle">
            {dropdownShow ? 'arrow_drop_up' : 'arrow_drop_down'}
          </span>
        </button>
      </Tippy>
    </>
  );
};

export default Dropdowns;
