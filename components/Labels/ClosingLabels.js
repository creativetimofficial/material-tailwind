import React from 'react';
import PropTypes from 'prop-types';

const divBgColors = {
  blueGray: 'bg-blue-gray-100',
  gray: 'bg-gray-100',
  brown: 'bg-brown-100',
  deepOrange: 'bg-deep-orange-100',
  orange: 'bg-orange-100',
  amber: 'bg-amber-100',
  yellow: 'bg-yellow-100',
  lime: 'bg-lime-100',
  lightGreen: 'bg-light-green-100',
  green: 'bg-green-100',
  teal: 'bg-teal-100',
  cyan: 'bg-cyan-100',
  lightBlue: 'bg-light-blue-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  deepPurple: 'bg-deep-purple-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
  red: 'bg-red-100',
};

const spanBgColors = {
  blueGray: 'bg-blue-gray-700',
  gray: 'bg-gray-700',
  brown: 'bg-brown-700',
  deepOrange: 'bg-deep-orange-700',
  orange: 'bg-orange-700',
  amber: 'bg-amber-700',
  yellow: 'bg-yellow-700',
  lime: 'bg-lime-700',
  lightGreen: 'bg-light-green-700',
  green: 'bg-green-700',
  teal: 'bg-teal-700',
  cyan: 'bg-cyan-700',
  lightBlue: 'bg-light-blue-700',
  blue: 'bg-blue-700',
  indigo: 'bg-indigo-700',
  deepPurple: 'bg-deep-purple-700',
  purple: 'bg-purple-700',
  pink: 'bg-pink-700',
  red: 'bg-red-700',
};

const textColors = {
  blueGray: 'text-blue-gray-800',
  gray: 'text-gray-800',
  brown: 'text-brown-800',
  deepOrange: 'text-deep-orange-800',
  orange: 'text-orange-800',
  amber: 'text-amber-800',
  yellow: 'text-yellow-800',
  lime: 'text-lime-800',
  lightGreen: 'text-light-green-800',
  green: 'text-green-800',
  teal: 'text-teal-800',
  cyan: 'text-cyan-800',
  lightBlue: 'text-light-blue-800',
  blue: 'text-blue-800',
  indigo: 'text-indigo-800',
  deepPurple: 'text-deep-purple-800',
  purple: 'text-purple-800',
  pink: 'text-pink-800',
  red: 'text-red-800',
};

const Label = ({ children, color }) => {
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
          className={`flex items-center justify-between py-1 pl-3 pr-1 rounded-full ${divBgColors[color]} last:mr-0 mr-1 transition-all duration-300`}
        >
          <span
            className={`text-xs font-semibold uppercase ${textColors[color]} uppercase mr-2`}
          >
            {children}
          </span>
          <span
            className={`material-icons ${spanBgColors[color]} text-white text-sm rounded-full p-0.5 cursor-pointer grid place-items-center`}
            onClick={closeLabel}
          >
            close
          </span>
        </div>
      ) : null}
    </>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Label;
