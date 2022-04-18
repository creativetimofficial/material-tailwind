/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Radio = forwardRef(
  ({ color, label, icon, ripple, className, containerProps, labelProps, ...rest }, ref) => {
    // 1. init
    const { radio } = useTheme();
    const { defaultProps, valid } = radio;
    const { base, colors } = radio.styles;

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
    const labelClasses = classnames(objectsToString(base.label), labelProps?.className);
    const radioIconClasses = classnames(
      "absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",
      colors[findMatch(valid.colors, color, "light-blue")].color,
    );

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || "radio"}
          onMouseDown={(e) => {
            const onMouseDown = containerProps?.onMouseDown;

            if (ripple) {
              rippleEffect.create(e, "dark");
            }

            return typeof onMouseDown === "function" && onMouseDown();
          }}
        >
          <input {...rest} type="radio" className={inputClasses} id={rest.id || "radio"} />
          <div className={radioIconClasses}>
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8" />
              </svg>
            )}
          </div>
        </label>
        {label && (
          <label {...labelProps} className={labelClasses} htmlFor={rest.id || "radio"}>
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
