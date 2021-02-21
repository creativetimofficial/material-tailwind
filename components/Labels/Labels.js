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
  const [showLabel, setShowLabel] = React.useState(true);

  function closeLabel(e) {
    let delay;

    const parentClassName = e.target.parentNode;

    parentClassName.classList.add('opacity-0');

    Array.from(parentClassName.classList).map((el) =>
      el.includes('duration') ? (delay = el.split('-')[1]) : null,
    );

    setTimeout(
      () => setShowLabel(false),
      delay ? parseInt(delay, 10) + 100 : 250,
    );
  }

  return (
    <>
      {showLabel ? (
        <div
          className={`flex items-center justify-between py-1.5 pl-3 pr-1.5 rounded-full bg-${color}-100 last:mr-0 mr-1 transition-all duration-300`}
        >
          <span
            className={`text-xs font-semibold uppercase text-${color}-700 uppercase mr-2`}
          >
            {children}
          </span>
          <span
            className={`material-icons bg-${color}-900 text-white text-sm rounded-full p-0.5 cursor-pointer`}
            onClick={closeLabel}
          >
            close
          </span>
        </div>
      ) : null}
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
