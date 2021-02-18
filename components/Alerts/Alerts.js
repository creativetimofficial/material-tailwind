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

const Alerts = ({ children, color }) => {
  return (
    <>
      <div
        className={`flex items-center gap-3 text-white p-4 pr-12 border-0 rounded relative mb-4 bg-${color}`}
      >
        {children}
      </div>
    </>
  );
};

export default Alerts;

// export default function Alerts() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return (
//           <Alert
//             key={key}
//             color={prop}
//             text={`This is a ${prop} alert - check it out!`}
//           />
//         );
//       })}
//     </>
//   );
// }
