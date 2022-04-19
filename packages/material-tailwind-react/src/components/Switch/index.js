/* eslint-disable jsx-a11y/no-static-element-interactions */
import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Switch = forwardRef(
  ({ color, label, ripple, className, containerProps, circleProps, labelProps, ...rest }, ref) => {
    // 1. init
    const { switch: toggle } = useTheme();
    const { defaultProps, valid, styles } = toggle;
    const { base, colors } = styles;

    // 2. set default props
    color = color ?? defaultProps.color;
    ripple = ripple ?? defaultProps.ripple;
    className = className ?? defaultProps.className;

    // 3. set ripple effect instance
    const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const rootClasses = classnames(objectsToString(base.root));
    const containerClasses = classnames(objectsToString(base.container), containerProps?.className);
    const inputClasses = classnames(
      objectsToString(base.input),
      objectsToString(colors[findMatch(valid.colors, color, "light-blue")]),
      className,
    );
    const circleClasses = classnames(
      objectsToString(base.circle),
      colors[findMatch(valid.colors, color, "light-blue")].circle,
      colors[findMatch(valid.colors, color, "light-blue")].before,
      circleProps?.className,
    );
    const rippleClasses = classnames(objectsToString(base.ripple));
    const labelClasses = classnames(objectsToString(base.label), labelProps?.className);

    // 4. return
    return (
      <div ref={ref} className={rootClasses}>
        <div {...containerProps} htmlFor={rest.id || "switch"} className={containerClasses}>
          <input {...rest} type="checkbox" id={rest.id || "switch"} className={inputClasses} />
          <label {...circleProps} htmlFor={rest.id || "switch"} className={circleClasses}>
            {ripple && (
              <div
                className={rippleClasses}
                onMouseDown={(e) => {
                  const onMouseDown = containerProps?.onMouseDown;

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
