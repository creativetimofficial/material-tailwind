import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-500',
  lightGreen: 'bg-light-green-500',
  green: 'bg-green-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  lightBlue: 'bg-light-blue-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  deepPurple: 'bg-deep-purple-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500',
};

const ClosingAlerts = ({ children, color, ...rest }) => {
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
          className={`flex items-center gap-3 text-white p-4 pr-12 border-0 rounded relative mb-4 ${colors[color]} transition-all duration-300`}
        >
          {children}
          <button
            className="absolute right-4 top-1/3 transform -translate-y-1/3 w-6 h-6 bg-transparent text-2xl outline-none focus:outline-none"
            onClick={closeAlert}
          >
            <span className="leading-none text-4xl">&times;</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

ClosingAlerts.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};

export default ClosingAlerts;
