import React from "react";
import PropTypes from "prop-types";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  color,
  label,
  icon,
  ripple,
  className,
  containerProps,
  labelProps,
} from "../../types/components/checkbox";
import {
  propTypesColor,
  propTypesLabel,
  propTypesIcon,
  propTypesRipple,
  propTypesClassName,
  propTypesContainerProps,
  propTypesLabelProps,
} from "../../types/components/checkbox";

export interface RadioProps extends React.ComponentProps<"input"> {
  color?: color;
  label?: label;
  icon?: icon;
  ripple?: ripple;
  className?: className;
  containerProps?: containerProps;
  labelProps?: labelProps;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ color, label, icon, ripple, className, containerProps, labelProps, ...rest }, ref) => {
    // 1. init
    const { radio } = useTheme();
    const { defaultProps, valid, styles } = radio;
    const { base, colors } = styles;

    // 2. set default props
    color = color ?? defaultProps.color;
    ripple = ripple ?? defaultProps.ripple;
    className = className ?? defaultProps.className;

    // 3. set ripple effect instance
    const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const rootClasses = classnames(objectsToString(base.root));
    const containerClasses = twMerge(
      classnames(objectsToString(base.container)),
      containerProps?.className,
    );
    const inputClasses = twMerge(
      classnames(
        objectsToString(base.input),
        objectsToString(colors[findMatch(valid.colors, color, "blue")]),
      ),
      className,
    );
    const labelClasses = twMerge(classnames(objectsToString(base.label)), labelProps?.className);
    const radioIconClasses = classnames(
      "absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity",
      colors[findMatch(valid.colors, color, "blue")].color,
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

            return typeof onMouseDown === "function" && onMouseDown(e);
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
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  icon: propTypesIcon,
  ripple: propTypesRipple,
  className: propTypesClassName,
  containerProps: propTypesContainerProps,
  labelProps: propTypesLabelProps,
};

Radio.displayName = "MaterialTailwind.Radio";

export default Radio;
