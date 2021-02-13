import React from 'react';

const colors = [
  'bg-blueGray-500',
  'bg-gray-500',
  'bg-brown-500',
  'bg-deepOrange-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-lightGreen-500',
  'bg-green-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-lightBlue-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-deepPurple-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-red-500',
];

export const Buttons = ({ color, type, size = 'regular', rounded, text }) => {
  let classes = [];

  rounded = rounded ? 'rounded-full' : 'rounded';

  const sharedClasses = [
    'font-medium',
    'outline-none',
    'uppercase',
    'tracking-wide',
    'leading',
    rounded,
  ];

  const buttonFilled = [
    color === 'amber' ||
    color === 'yellow' ||
    color === 'lime' ||
    color === 'lightGreen'
      ? 'text-black'
      : 'text-white',
    `bg-${color}-500`,
    'shadow',
    'hover:shadow-lg',
    `hover:bg-${color}-700`,
    'focus:outline-none',
    'focus:bg-teal-400',
    'focus:text-white',
  ];

  const buttonOutline = [
    `text-${color}-500`,
    'bg-transparent',
    'border',
    'border-solid',
    `border-${color}-400`,
    `hover:bg-${color}-50`,
    `hover:border-${color}-600`,
    `hover:text-${color}-700`,
    `active:bg-${color}-50`,
    'shadow-none',
  ];

  const buttonLink = [
    `text-${color}-500`,
    `background-transparent`,
    `hover:bg-${color}-50`,
  ];

  const buttonSM = [...sharedClasses, 'py-1.5 px-2.5', 'text-xs'];
  const buttonRegular = [...sharedClasses, 'py-2 px-4', 'text-sm'];
  const buttonLG = [...sharedClasses, 'py-3 px-6', 'text-base'];

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
      <div>
        <button className={classes} type="button">
          Default
        </button>
      </div>
    </>
  );
};

export default function FilledLargeButtons(props) {
  return (
    <>
      {colors.map((prop, key) => {
        return (
          <Buttons
            key={key}
            color={prop}
            type="outline"
            size="lg"
            icon="favorite"
            text="Large Button"
            round
          />
        );
      })}
    </>
  );
}
