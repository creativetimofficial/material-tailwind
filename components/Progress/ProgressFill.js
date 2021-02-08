import React from 'react';

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

const Progress = ({ color, percentage }) => {
  return (
    <>
      <div
        className={
          'overflow-hidden h-2 mb-4 text-xs flex rounded bg-' + color + '-200'
        }
      >
        <div
          className={
            'shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-' +
            color +
            '-500'
          }
          style={{ width: (10 - percentage) * 10 + '%' }}
        ></div>
      </div>
    </>
  );
};

export default function ProgressFill() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Progress key={key} color={prop} percentage={key} />;
      })}
    </>
  );
}
