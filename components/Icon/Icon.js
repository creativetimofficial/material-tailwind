import React from "react";
import PropTypes from "prop-types";

const colors = {
  white: "text-white",
  blueGray: "text-blue-gray-500",
  gray: "text-gray-500",
  brown: "text-brown-500",
  deepOrange: "text-deep-orange-500",
  orange: "text-orange-500",
  amber: "text-amber-500",
  yellow: "text-yellow-600",
  lime: "text-lime-500",
  lightGreen: "text-light-green-500",
  green: "text-green-500",
  teal: "text-teal-500",
  cyan: "text-cyan-500",
  lightBlue: "text-light-blue-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  deepPurple: "text-deep-purple-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  red: "text-red-500",
};

export default function Icon({
  family = "material-icons",
  name,
  color,
  size,
  ...rest
}) {
  let iconUI;

  if (family === "material-icons") {
    iconUI = (
      <span
        {...rest}
        className={`${family} ${colors[color]} ${
          size ? `text-${size}` : "text-base"
        } leading-none`}
      >
        {name}
      </span>
    );
  } else if (family === "font-awesome") {
    iconUI = (
      <i {...rest} className={`${name} ${colors[color]} text-${size}`} />
    );
  }

  return iconUI;
}

Icon.propTypes = {
  family: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};
