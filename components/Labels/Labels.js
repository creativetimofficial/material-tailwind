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
const LabelRound = ({ children, color }) => {
  return (
    <>
      <div
        className={`flex items-center justify-between py-1.5 pl-3 pr-1.5 rounded-full bg-${color}-100 last:mr-0 mr-1`}
      >
        <span
          className={`text-xs font-semibold uppercase text-${color}-700 uppercase mr-2`}
        >
          {children}
        </span>
        <span
          className={`material-icons bg-${color}-900 text-white text-sm rounded-full p-0.5 cursor-pointer`}
        >
          close
        </span>
      </div>
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
