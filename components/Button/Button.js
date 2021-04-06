import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Ripple from "material-ripple-effects";

const filledBgColors = {
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

const filledBgHoverColors = {
  blueGray: "hover:bg-blue-gray-700",
  gray: "hover:bg-gray-700",
  brown: "hover:bg-brown-700",
  deepOrange: "hover:bg-deep-orange-700",
  orange: "hover:bg-orange-700",
  amber: "hover:bg-amber-700",
  yellow: "hover:bg-yellow-700",
  lime: "hover:bg-lime-700",
  lightGreen: "hover:bg-light-green-700",
  green: "hover:bg-green-700",
  teal: "hover:bg-teal-700",
  cyan: "hover:bg-cyan-700",
  lightBlue: "hover:bg-light-blue-700",
  blue: "hover:bg-blue-700",
  indigo: "hover:bg-indigo-700",
  deepPurple: "hover:bg-deep-purple-700",
  purple: "hover:bg-purple-700",
  pink: "hover:bg-pink-700",
  red: "hover:bg-red-700",
};

const filledBgFocusColors = {
  blueGray: "focus:bg-blue-gray-400",
  gray: "focus:bg-gray-400",
  brown: "focus:bg-brown-400",
  deepOrange: "focus:bg-deep-orange-400",
  orange: "focus:bg-orange-400",
  amber: "focus:bg-amber-400",
  yellow: "focus:bg-yellow-500",
  lime: "focus:bg-lime-400",
  lightGreen: "focus:bg-light-green-400",
  green: "focus:bg-green-400",
  teal: "focus:bg-teal-400",
  cyan: "focus:bg-cyan-400",
  lightBlue: "focus:bg-light-blue-400",
  blue: "focus:bg-blue-400",
  indigo: "focus:bg-indigo-400",
  deepPurple: "focus:bg-deep-purple-400",
  purple: "focus:bg-purple-400",
  pink: "focus:bg-pink-400",
  red: "focus:bg-red-400",
};

const filledBgActiveColors = {
  blueGray: "active:bg-blue-gray-800",
  gray: "active:bg-gray-800",
  brown: "active:bg-brown-800",
  deepOrange: "active:bg-deep-orange-800",
  orange: "active:bg-orange-800",
  amber: "active:bg-amber-800",
  yellow: "active:bg-yellow-800",
  lime: "active:bg-lime-800",
  lightGreen: "active:bg-light-green-800",
  green: "active:bg-green-800",
  teal: "active:bg-teal-800",
  cyan: "active:bg-cyan-800",
  lightBlue: "active:bg-light-blue-800",
  blue: "active:bg-blue-800",
  indigo: "active:bg-indigo-800",
  deepPurple: "active:bg-deep-purple-800",
  purple: "active:bg-purple-800",
  pink: "active:bg-pink-800",
  red: "active:bg-red-800",
};

const outlineTextColors = {
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

const outlineBorderColors = {
  blueGray: "border-blue-gray-500",
  gray: "border-gray-500",
  brown: "border-brown-500",
  deepOrange: "border-deep-orange-500",
  orange: "border-orange-500",
  amber: "border-amber-500",
  yellow: "border-yellow-600",
  lime: "border-lime-500",
  lightGreen: "border-light-green-500",
  green: "border-green-500",
  teal: "border-teal-500",
  cyan: "border-cyan-500",
  lightBlue: "border-light-blue-500",
  blue: "border-blue-500",
  indigo: "border-indigo-500",
  deepPurple: "border-deep-purple-500",
  purple: "border-purple-500",
  pink: "border-pink-500",
  red: "border-red-500",
};

const outlineBgHoverColors = {
  blueGray: "hover:bg-blue-gray-50",
  gray: "hover:bg-gray-50",
  brown: "hover:bg-brown-50",
  deepOrange: "hover:bg-deep-orange-50",
  orange: "hover:bg-orange-50",
  amber: "hover:bg-amber-50",
  yellow: "hover:bg-yellow-50",
  lime: "hover:bg-lime-50",
  lightGreen: "hover:bg-light-green-50",
  green: "hover:bg-green-50",
  teal: "hover:bg-teal-50",
  cyan: "hover:bg-cyan-50",
  lightBlue: "hover:bg-light-blue-50",
  blue: "hover:bg-blue-50",
  indigo: "hover:bg-indigo-50",
  deepPurple: "hover:bg-deep-purple-50",
  purple: "hover:bg-purple-50",
  pink: "hover:bg-pink-50",
  red: "hover:bg-red-50",
};

const outlineBorderHoverColors = {
  blueGray: "hover:border-blue-gray-700",
  gray: "hover:border-gray-700",
  brown: "hover:border-brown-700",
  deepOrange: "hover:border-deep-orange-700",
  orange: "hover:border-orange-700",
  amber: "hover:border-amber-700",
  yellow: "hover:border-yellow-700",
  lime: "hover:border-lime-700",
  lightGreen: "hover:border-light-green-700",
  green: "hover:border-green-700",
  teal: "hover:border-teal-700",
  cyan: "hover:border-cyan-700",
  lightBlue: "hover:border-light-blue-700",
  blue: "hover:border-blue-700",
  indigo: "hover:border-indigo-700",
  deepPurple: "hover:border-deep-purple-700",
  purple: "hover:border-purple-700",
  pink: "hover:border-pink-700",
  red: "hover:border-red-700",
};

const outlineTextHoverColors = {
  blueGray: "hover:text-blue-gray-700",
  gray: "hover:text-gray-700",
  brown: "hover:text-brown-700",
  deepOrange: "hover:text-deep-orange-700",
  orange: "hover:text-orange-700",
  amber: "hover:text-amber-700",
  yellow: "hover:text-yellow-700",
  lime: "hover:text-lime-700",
  lightGreen: "hover:text-light-green-700",
  green: "hover:text-green-700",
  teal: "hover:text-teal-700",
  cyan: "hover:text-cyan-700",
  lightBlue: "hover:text-light-blue-700",
  blue: "hover:text-blue-700",
  indigo: "hover:text-indigo-700",
  deepPurple: "hover:text-deep-purple-700",
  purple: "hover:text-purple-700",
  pink: "hover:text-pink-700",
  red: "hover:text-red-700",
};

const outlineBgActiveColors = {
  blueGray: "active:bg-blue-gray-100",
  gray: "active:bg-gray-100",
  brown: "active:bg-brown-100",
  deepOrange: "active:bg-deep-orange-100",
  orange: "active:bg-orange-100",
  amber: "active:bg-amber-100",
  yellow: "active:bg-yellow-100",
  lime: "active:bg-lime-100",
  lightGreen: "active:bg-light-green-100",
  green: "active:bg-green-100",
  teal: "active:bg-teal-100",
  cyan: "active:bg-cyan-100",
  lightBlue: "active:bg-light-blue-100",
  blue: "active:bg-blue-100",
  indigo: "active:bg-indigo-100",
  deepPurple: "active:bg-deep-purple-100",
  purple: "active:bg-purple-100",
  pink: "active:bg-pink-100",
  red: "active:bg-red-100",
};

const Button = forwardRef(
  (
    {
      children,
      color,
      buttonType,
      size = "regular",
      rounded,
      iconOnly,
      ripple,
      ...rest
    },
    ref
  ) => {
    const rippleEffect = new Ripple();
    let classes = [];

    rounded = rounded ? "rounded-full" : "rounded-lg";

    const sharedClasses = [
      "flex",
      "items-center",
      "gap-1",
      "font-bold",
      "outline-none",
      "uppercase",
      "tracking-wider",
      "focus:outline-none",
      "focus:shadow-none",
      "transition-all",
      "duration-300",
      rounded,
    ];

    const buttonFilled = [
      filledBgColors[color],
      filledBgHoverColors[color],
      filledBgFocusColors[color],
      filledBgActiveColors[color],
      "text-white",
      "shadow-md",
      "hover:shadow-xl",
    ];

    const buttonOutline = [
      "bg-transparent",
      "border",
      "border-solid",
      "shadow-none",
      outlineTextColors[color],
      outlineBorderColors[color],
      outlineBgHoverColors[color],
      outlineBorderHoverColors[color],
      outlineTextHoverColors[color],
      outlineBgHoverColors[color],
      outlineBgActiveColors[color],
    ];

    const buttonLink = [
      `bg-transparent`,
      outlineTextColors[color],
      outlineBgHoverColors[color],
      outlineTextHoverColors[color],
      outlineBgHoverColors[color],
      outlineBgActiveColors[color],
    ];

    const buttonSM = [
      ...sharedClasses,
      iconOnly ? "w-8 h-8 p-0 grid place-items-center" : "py-1.5 px-4",
      "text-xs",
      "leading-normal",
    ];
    const buttonRegular = [
      ...sharedClasses,
      iconOnly ? "w-10 h-10 p-0 grid place-items-center" : "py-2.5 px-6",
      "text-xs",
      "leading-normal",
    ];
    const buttonLG = [
      ...sharedClasses,
      iconOnly ? "w-12 h-12 p-0 grid place-items-center" : "py-3 px-7",
      "text-sm",
      "leading-relaxed",
    ];

    if (size === "sm") {
      classes.push(...buttonSM);
    } else if (size === "lg") {
      classes.push(...buttonLG);
    } else {
      classes.push(...buttonRegular);
    }

    if (buttonType === "outline") {
      classes.push(...buttonOutline);
    } else if (buttonType === "link") {
      classes.push(...buttonLink);
    } else {
      classes.push(...buttonFilled);
    }

    classes = classes.join(" ");

    return (
      <button
        {...rest}
        className={classes}
        ref={ref}
        onMouseUp={(e) => {
          ripple === "dark" && rippleEffect.create(e, "dark");
          ripple === "light" && rippleEffect.create(e, "light");
        }}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  ripple: PropTypes.string,
};

export default Button;
