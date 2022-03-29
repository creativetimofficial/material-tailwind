/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { MaterialTailwindTheme } from "context/theme";

import objectsToString from "utils/objectsToString";

export const Checkbox = forwardRef(
  ({ color, label, icon, ripple, className, containerProps, labelProps, ...rest }, ref) => {
    const { checkbox } = useContext(MaterialTailwindTheme);
    const { defaultProps } = checkbox;
    const { root, container, input, label: inputLabel, colors } = checkbox.styles;

    color = color || defaultProps.color;
    ripple = ripple === undefined ? defaultProps.ripple : ripple;
    className = className || defaultProps.className;

    const rippleEffect = ripple !== undefined && new Ripple();

    const containerClasses = classnames(
      objectsToString(container),
      containerProps && containerProps.className ? containerProps.className : "",
    );

    const inputClasses = classnames(
      objectsToString(input),
      colors && colors[color] ? colors[color].background : "checked:bg-light-blue-500",
      colors && colors[color] ? colors[color].border : "checked:border-light-blue-500",
      colors && colors[color] ? colors[color].before : "checked:before:bg-light-blue-500",
      className,
    );

    const labelClasses = classnames(
      objectsToString(inputLabel),
      labelProps && labelProps.className ? labelProps.className : "",
    );

    return (
      <div ref={ref} className={root}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || "checkbox"}
          onMouseDown={(e) => {
            const onMouseDown =
              containerProps && containerProps.onMouseDown ? containerProps.onMouseDown : undefined;

            if (ripple) {
              rippleEffect.create(e, "dark");
            }

            return typeof onMouseDown === "function" && onMouseDown();
          }}
        >
          <input {...rest} type="checkbox" className={inputClasses} id={rest.id || "checkbox"} />
          <div className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </label>
        {label && (
          <label {...labelProps} className={labelClasses} htmlFor={rest.id || "checkbox"}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Checkbox.propTypes = {
  color: PropTypes.oneOf([
    "blue-grey",
    "grey",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  label: PropTypes.string,
  icon: PropTypes.node,
  ripple: PropTypes.bool,
  className: PropTypes.string,
  containerProps: PropTypes.instanceOf(Object),
  labelProps: PropTypes.instanceOf(Object),
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
