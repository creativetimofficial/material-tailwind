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

const Alerts = ({ children, color, text }) => {
  return (
    <>
      <div
        className={`flex items-center gap-3 text-white p-4 pr-12 border-0 rounded relative mb-4 bg-${color}`}
      >
        {children}
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none">
          <span className="material-icons leading-none">close</span>
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
