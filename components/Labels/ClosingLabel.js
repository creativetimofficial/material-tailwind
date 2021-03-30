import React from "react";
import PropTypes from "prop-types";

const divBgColors = {
  blueGray: "bg-blue-gray-100",
  gray: "bg-gray-100",
  brown: "bg-brown-100",
  deepOrange: "bg-deep-orange-100",
  orange: "bg-orange-100",
  amber: "bg-amber-100",
  yellow: "bg-yellow-100",
  lime: "bg-lime-100",
  lightGreen: "bg-light-green-100",
  green: "bg-green-100",
  teal: "bg-teal-100",
  cyan: "bg-cyan-100",
  lightBlue: "bg-light-blue-100",
  blue: "bg-blue-100",
  indigo: "bg-indigo-100",
  deepPurple: "bg-deep-purple-100",
  purple: "bg-purple-100",
  pink: "bg-pink-100",
  red: "bg-red-100",
};

const spanBgColors = {
  blueGray: "bg-blue-gray-900",
  gray: "bg-gray-900",
  brown: "bg-brown-900",
  deepOrange: "bg-deep-orange-900",
  orange: "bg-orange-900",
  amber: "bg-amber-900",
  yellow: "bg-yellow-900",
  lime: "bg-lime-900",
  lightGreen: "bg-light-green-900",
  green: "bg-green-900",
  teal: "bg-teal-900",
  cyan: "bg-cyan-900",
  lightBlue: "bg-light-blue-900",
  blue: "bg-blue-900",
  indigo: "bg-indigo-900",
  deepPurple: "bg-deep-purple-900",
  purple: "bg-purple-900",
  pink: "bg-pink-900",
  red: "bg-red-900",
};

const textColors = {
  blueGray: "text-blue-gray-700",
  gray: "text-gray-700",
  brown: "text-brown-700",
  deepOrange: "text-deep-orange-700",
  orange: "text-orange-700",
  amber: "text-amber-700",
  yellow: "text-yellow-700",
  lime: "text-lime-700",
  lightGreen: "text-light-green-700",
  green: "text-green-700",
  teal: "text-teal-700",
  cyan: "text-cyan-700",
  lightBlue: "text-light-blue-700",
  blue: "text-blue-700",
  indigo: "text-indigo-700",
  deepPurple: "text-deep-purple-700",
  purple: "text-purple-700",
  pink: "text-pink-700",
  red: "text-red-700",
};

export default function ClosingLabel({ children, color }) {
  const [showLabel, setShowLabel] = React.useState(true);

  function closeLabel(e) {
    let delay;

    const parentClassName = e.target.parentNode;

    parentClassName.classList.add("opacity-0");

    Array.from(parentClassName.classList).map((el) =>
      el.includes("duration") ? (delay = el.split("-")[1]) : null
    );

    setTimeout(
      () => setShowLabel(false),
      delay ? parseInt(delay, 10) + 100 : 250
    );
  }

  return (
    <>
      {showLabel ? (
        <div
          className={`max-w-max flex items-center justify-between py-1 pl-3 pr-1 rounded-full ${divBgColors[color]} last:mr-0 mr-1 transition-all duration-300`}
        >
          <span
            className={`text-xs font-semibold uppercase ${textColors[color]} uppercase mr-2`}
          >
            {children}
          </span>
          <span
            className={`${spanBgColors[color]} text-white text-sm leading-none rounded-full w-4 h-4 cursor-pointer grid place-items-center p-0`}
            onClick={closeLabel}
          >
            &times;
          </span>
        </div>
      ) : null}
    </>
  );
}

ClosingLabel.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};
