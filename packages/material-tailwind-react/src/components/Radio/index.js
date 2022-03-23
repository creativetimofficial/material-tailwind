/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Ripple from "material-ripple-effects";
// import validColors from "utils/validColors";
import { MaterialTailwindTheme } from "context/theme";

import objectsToString from "utils/objectsToString";

export const Radio = forwardRef(
  ({ color, label, icon, ripple, className, containerProps, labelProps, ...rest }, ref) => {
    const { radio } = useContext(MaterialTailwindTheme);
    const { defaultProps } = radio;
    const { root, container, radio: input, label: inputLabel, colors } = radio.styles;

    color = color || defaultProps.color;
    ripple = ripple === undefined ? defaultProps.ripple : ripple;
    className = className || defaultProps.className;

    const rippleEffect = ripple !== undefined && new Ripple();

    const containerClasses = classnames(
      objectsToString(container),
      colors && colors[color] ? colors[color].container : "before:bg-light-blue-500",
      containerProps && containerProps.className ? containerProps.className : "",
    );

    const radioClasses = classnames(
      "peer",
      objectsToString(input),
      colors && colors[color] ? colors[color].border : "checked:border-light-blue-500",
      className,
    );

    const radioIconColor = classnames(
      "absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",
      colors && colors[color] ? colors[color].color : "checked:bg-light-blue-500",
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
          <input {...rest} type="radio" className={radioClasses} id={rest.id || "checkbox"} />
          <div className={radioIconColor}>
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle id="Ellipse_1" data-name="Ellipse 1" cx="8" cy="8" r="8" />
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

Radio.propTypes = {
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

Radio.displayName = "Radio";

export default Radio;
