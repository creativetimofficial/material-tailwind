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

const Label = ({ color }) => {
  return (
    <>
      <span
        className={
          'text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-' +
          color +
          '-700 bg-' +
          color +
          '-100 uppercase last:mr-0 mr-1'
        }
      >
        {color}
      </span>
    </>
  );
};

export default Label;

// export default function LabelsSquare() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Label key={key} color={prop} />;
//       })}
//     </>
//   );
// }
