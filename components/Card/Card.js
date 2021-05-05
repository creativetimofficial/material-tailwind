import React from 'react';
import PropTypes from 'prop-types';


const filledBgColors = {
  white: "bg-white",
  blueGray: "bg-blue-gray-500",
  gray: "bg-gray-500",
  brown: "bg-brown-500",
  deepOrange: "bg-deep-orange-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-600",
  lime: "bg-lime-500",
  lightGreen: "bg-light-green-500",
  green: "bg-green-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  lightBlue: "bg-light-blue-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  deepPurple: "bg-deep-purple-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  red: "bg-red-500",
};

export default function Card({color="white", children }) {
  let classes = [];

  const sharedClasses = [
    "max-w-sm",
    "rounded-xl", 
    // "overflow-hidden", 
    "shadow",
    "p-3", 
    "my-8"
  ]
   const cardFilled = [
      filledBgColors[color],
    ];
  classes.push(...sharedClasses)  
  classes.push(...cardFilled)
  classes = classes.join(" ");
  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired
};
