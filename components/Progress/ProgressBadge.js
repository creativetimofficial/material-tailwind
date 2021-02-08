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

const Progress = ({ color }) => {
  return (
    <>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={
                'text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-' +
                color +
                '-600 bg-' +
                color +
                '-200'
              }
            >
              Task uncompleted
            </span>
          </div>
          <div className="text-right">
            <span
              className={
                'text-xs font-semibold inline-block text-' + color + '-600'
              }
            >
              0%
            </span>
          </div>
        </div>
        <div
          className={
            'overflow-hidden h-2 mb-4 text-xs flex rounded bg-' + color + '-200'
          }
        ></div>
      </div>
    </>
  );
};

export default function ProgressBadge() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Progress key={key} color={prop} />;
      })}
    </>
  );
}
