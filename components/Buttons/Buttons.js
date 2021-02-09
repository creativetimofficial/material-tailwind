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

export const Buttons = ({
  color,
  type,
  size = 'regular',
  round,
  icon,
  text,
}) => {
  let buttonType, buttonSize, buttonRadius;

  if (type === 'outline') {
    buttonType = `${color} bg-transparent border border-solid border-${color} hover:bg-${color} hover:text-white active:bg-${color}`;
  } else if (type === 'link') {
    buttonType = color;
    size = 'sm';
  } else {
    buttonType = `white bg-${color}`;
  }

  if (size === 'sm') {
    buttonSize = 'px-3 py-1';
  } else if (size === 'lg') {
    buttonSize = 'px-8 py-3';
  } else {
    buttonSize = 'px-6 py-2.5';
  }

  buttonRadius = round ? 'rounded-full' : 'rounded';

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <button
            className={`text-${buttonType} font-normal ${buttonSize} ${buttonRadius} outline-none focus:outline-none mr-1 mb-1 flex items-baseline gap-1`}
            type="button"
          >
            {icon ? <span className="material-icons">{icon}</span> : null}{' '}
            {text}
          </button>
        </div>
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
