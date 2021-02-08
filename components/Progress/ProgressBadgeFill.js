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
              {(10 - percentage) * 10 === 100
                ? 'Task completed'
                : 'Task in progress'}
            </span>
          </div>
          <div className="text-right">
            <span
              className={
                'text-xs font-semibold inline-block text-' + color + '-600'
              }
            >
              {(10 - percentage) * 10}%
            </span>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default function ProgressBadgeFill() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Progress key={key} color={prop} percentage={key} />;
      })}
    </>
  );
}
