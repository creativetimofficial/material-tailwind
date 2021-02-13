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
        className={`text-white px-6 py-4 border-0 rounded relative mb-4 bg-${color}`}
      >
        <span className="material-icons mr-4 align-middle text-2xl">
          notifications
        </span>
        <span className="inline-block align-middle mr-8">
          <b className="capitalize">{color}!</b> {text}
        </span>
        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
          <span className="px-2 rounded-full hover:bg-white hover:bg-opacity-20">
            ×
          </span>
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
