/* eslint-disable jsx-a11y/no-static-element-interactions */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

export const Switch = forwardRef(
  ({ color, label, ripple, className, containerProps, circleProps, labelProps, ...rest }, ref) => {
    const { switch: toggle } = useContext(MaterialTailwindTheme);
    const { defaultProps } = toggle;
    const {
      root,
      container,
      input,
      circle,
      ripple: circleRipple,
      label: inputLabel,
      colors,
    } = toggle.styles;

    color = color || defaultProps.color;
    ripple = ripple === undefined ? defaultProps.ripple : ripple;
    className = className || defaultProps.className;

    const rippleEffect = ripple !== undefined && new Ripple();

    const containerClasses = classnames(
      objectsToString(container),
      containerProps && containerProps.className ? containerProps.className : "",
    );

    const inputClasses = classnames(
      "peer",
      objectsToString(input),
      colors && colors[color] ? colors[color].input : "checked:bg-blue-500",
      className,
    );

    const circleClasses = classnames(
      objectsToString(circle),
      colors && colors[color] ? colors[color].circle : "peer-checked:border-light-blue-500",
      colors && colors[color] ? colors[color].before : "before:bg-light-blue-500",
      circleProps && circleProps.className ? circleProps.className : "",
    );

    const rippleClasses = classnames(objectsToString(circleRipple));

    const labelClasses = classnames(
      objectsToString(inputLabel),
      labelProps && labelProps.className ? labelProps.className : "",
    );

    return (
      <div ref={ref} className={root}>
        <div {...containerProps} htmlFor={rest.id || "switch"} className={containerClasses}>
          <input {...rest} type="checkbox" id={rest.id || "switch"} className={inputClasses} />
          <label {...circleProps} htmlFor={rest.id || "switch"} className={circleClasses}>
            {ripple && (
              <div
                className={rippleClasses}
                onMouseDown={(e) => {
                  const onMouseDown =
                    containerProps && containerProps.onMouseDown
                      ? containerProps.onMouseDown
                      : undefined;

                  if (ripple) {
                    rippleEffect.create(e, "dark");
                  }

                  return typeof onMouseDown === "function" && onMouseDown();
                }}
              />
            )}
          </label>
        </div>
        {label && (
          <label {...labelProps} htmlFor={rest.id || "switch"} className={labelClasses}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Switch.propTypes = {
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
  ripple: PropTypes.bool,
  className: PropTypes.string,
  containerProps: PropTypes.instanceOf(Object),
  circleProps: PropTypes.instanceOf(Object),
  labelProps: PropTypes.instanceOf(Object),
};

Switch.displayName = "Switch";

export default Switch;
