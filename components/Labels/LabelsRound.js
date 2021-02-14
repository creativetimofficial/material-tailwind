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
const LabelRound = ({ color }) => {
  return (
    <>
      <span
        className={
          'text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-' +
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

export default LabelRound;

// export default function LabelsRound() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Label key={key} color={prop} />;
//       })}
//     </>
//   );
// }
