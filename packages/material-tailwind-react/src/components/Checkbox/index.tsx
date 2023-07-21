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
  disabled,
  objectType,
} from "../../types/components/checkbox";
import {
  propTypesColor,
  propTypesLabel,
  propTypesIcon,
  propTypesRipple,
  propTypesClassName,
  propTypesDisabled,
  propTypesObject,
} from "../../types/components/checkbox";

export interface CheckboxProps extends React.ComponentProps<"input"> {
  color?: color;
  label?: label;
  icon?: icon;
  ripple?: ripple;
  className?: className;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  iconProps?: objectType;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      color,
      label,
      icon,
      ripple,
      className,
      disabled,
      containerProps,
      labelProps,
      iconProps,
      inputRef,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { checkbox } = useTheme();
    const { defaultProps, valid, styles } = checkbox;
    const { base, colors } = styles;
    const checkboxId = React.useId();

    // 2. set default props
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    icon = icon ?? defaultProps.icon;
    ripple = ripple ?? defaultProps.ripple;
    className = className ?? defaultProps.className;
    disabled = disabled ?? defaultProps.disabled;
    containerProps = containerProps ?? defaultProps.containerProps;
    labelProps = labelProps ?? defaultProps.labelProps;
    iconProps = iconProps ?? defaultProps.iconProps;

    // 3. set ripple effect instance
    const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const rootClasses = classnames(objectsToString(base.root), {
      [objectsToString(base.disabled)]: disabled,
    });
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
    const iconContainerClasses = twMerge(
      classnames(objectsToString(base.icon)),
      iconProps?.className,
    );

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || checkboxId}
          onMouseDown={(e) => {
            const onMouseDown = containerProps?.onMouseDown;

            if (ripple) {
              rippleEffect.create(e, "dark");
            }

            return typeof onMouseDown === "function" && onMouseDown(e);
          }}
        >
          <input
            {...rest}
            ref={inputRef}
            type="checkbox"
            disabled={disabled}
            className={inputClasses}
            id={rest.id || checkboxId}
          />
          <span className={iconContainerClasses}>
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
          </span>
        </label>
        {label && (
          <label {...labelProps} className={labelClasses} htmlFor={rest.id || checkboxId}>
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
  disabled: propTypesDisabled,
  containerProps: propTypesObject,
  labelProps: propTypesObject,
};

Checkbox.displayName = "MaterialTailwind.Checkbox";

export default Checkbox;
