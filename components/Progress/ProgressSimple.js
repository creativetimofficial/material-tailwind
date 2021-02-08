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
      <div
        className={
          'overflow-hidden h-2 mb-4 text-xs flex rounded bg-' + color + '-200'
        }
      ></div>
    </>
  );
};

export default function ProgressSimple() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Progress key={key} color={prop} />;
      })}
    </>
  );
}
