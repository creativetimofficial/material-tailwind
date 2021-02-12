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
    'flex',
    'gap-1',
    'font-medium',
    'outline-none',
    'focus:outline-none',
    'focus:bg-teal-400',
    'focus:text-white',
    rounded,
  ];

  const buttonFilled = ['text-white', `bg-${color}`];

  const buttonOutline = [
    `text-${color}`,
    'bg-transparent',
    'border',
    'border-solid',
    `border-${color}`,
    `hover:bg-${color}`,
    'hover:text-white',
    `active:bg-${color}`,
    'shadow-none',
  ];

  const buttonLink = [
    `text-${color}`,
    `background-transparent`,
    'shadow-none',
    'hover:shadow-none',
  ];

  const buttonSM = [
    ...sharedClasses,
    'px-5 pt-2.5 pb-2',
    'text-sm',
    'leading-none',
    'shadow-sm',
    'hover:shadow-md',
  ];

  const buttonRegular = [
    ...sharedClasses,
    'px-6 pt-4 pb-3.5',
    'leading-none',
    'shadow',
    'hover:shadow-xl',
  ];

  const buttonLG = [
    ...sharedClasses,
    'px-8 py-5',
    'text-lg',
    'leading-none',
    'shadow-md',
    'hover:shadow-3xl',
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
      <div>
        <button className={classes} type="button">
          Button
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
