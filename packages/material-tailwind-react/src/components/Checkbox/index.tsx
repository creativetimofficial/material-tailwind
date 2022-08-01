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

export interface CheckboxProps extends React.ComponentProps<"input"> {
  color?: color;
  label?: label;
  icon?: icon;
  ripple?: ripple;
  className?: className;
  containerProps?: containerProps;
  labelProps?: labelProps;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ color, label, icon, ripple, className, containerProps, labelProps, ...rest }, ref) => {
    // 1. init
    const { checkbox } = useTheme();
    const { defaultProps, valid, styles } = checkbox;
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

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || "checkbox"}
          onMouseDown={(e) => {
            const onMouseDown = containerProps?.onMouseDown;

            if (ripple) {
              rippleEffect.create(e, "dark");
            }

            return typeof onMouseDown === "function" && onMouseDown(e);
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
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  icon: propTypesIcon,
  ripple: propTypesRipple,
  className: propTypesClassName,
  containerProps: propTypesContainerProps,
  labelProps: propTypesLabelProps,
};

Checkbox.displayName = "MaterialTailwind.Checkbox";

export default Checkbox;
