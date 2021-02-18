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

const Buttons = ({ children, color, type, size = 'regular', rounded }) => {
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
  ];

  const buttonLink = [
    `background-transparent`,
    `text-${color}-500`,
    `hover:bg-${color}-50`,
    `focus:bg-${color}-50`,
  ];

  const buttonSM = [
    ...sharedClasses,
    'py-1.5 px-4',
    'text-xs',
    'leading-normal',
    'rounded',
  ];
  const buttonRegular = [
    ...sharedClasses,
    'py-2.5 px-6',
    'text-xs',
    'leading-normal',
    'rounded',
  ];
  const buttonLG = [
    ...sharedClasses,
    'py-3 px-7',
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
      <div>
        <button className={classes} type="button">
          {children}
        </button>
      </div>
    </>
  );
};

export default Buttons;

// export default function FilledLargeButtons(props) {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return (
//           <Buttons
//             key={key}
//             color={prop}
//             type="outline"
//             size="lg"
//             icon="favorite"
//             text="Large Button"
//             round
//           />
//         );
//       })}
//     </>
//   );
// }
