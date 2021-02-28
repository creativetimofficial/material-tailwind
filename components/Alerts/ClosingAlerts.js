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

const Alerts = ({ children, color, ...rest }) => {
  const [showAlert, setShowAlert] = React.useState(true);

  function closeAlert(e) {
    let delay;

    const parentClassName = e.target.parentNode.parentNode;

    parentClassName.classList.add('opacity-0');

    Array.from(parentClassName.classList).map((el) =>
      el.includes('duration') ? (delay = el.split('-')[1]) : null,
    );

    setTimeout(
      () => setShowAlert(false),
      delay ? parseInt(delay, 10) + 100 : 250,
    );
  }

  return (
    <>
      {showAlert ? (
        <div
          {...rest}
          className={`flex items-center gap-3 text-white p-4 pr-12 border-0 rounded relative mb-4 bg-${color} transition-all duration-300`}
        >
          {children}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none"
            onClick={closeAlert}
          >
            <span className="material-icons leading-none">close</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Alerts;
