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

const Alerts = ({ color, text }) => {
  return (
    <>
      <div
        className={`flex justify-between items-center text-white px-8 py-6 border-0 rounded-md relative mb-4 bg-${color}`}
      >
        <span className="inline-block mr-8">
          <b className="capitalize">{color}!</b> {text}
        </span>
        <button className="bg-transparent uppercase font-semibold outline-none focus:outline-none">
          Dismiss
        </button>
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
