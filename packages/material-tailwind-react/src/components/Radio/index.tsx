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

export interface RadioProps extends React.ComponentProps<"input"> {
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

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
    const { radio } = useTheme();
    const { defaultProps, valid, styles } = radio;
    const { base, colors } = styles;
    const radioId = React.useId();

    // 2. set default props
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    icon = icon ?? defaultProps.icon;
    ripple = ripple ?? defaultProps.ripple;
    disabled = disabled ?? defaultProps.disabled;
    containerProps = containerProps ?? defaultProps.containerProps;
    labelProps = labelProps ?? defaultProps.labelProps;
    iconProps = iconProps ?? defaultProps.iconProps;
    className = twMerge(defaultProps.className || "", className);

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
        objectsToString(colors[findMatch(valid.colors, color, "gray")]),
      ),
      className,
    );
    const labelClasses = twMerge(classnames(objectsToString(base.label)), labelProps?.className);
    const radioIconClasses = classnames(
      classnames(objectsToString(base.icon)),
      colors[findMatch(valid.colors, color, "gray")].color,
      iconProps?.className,
    );

    return (
      <div ref={ref} className={rootClasses}>
        <label
          {...containerProps}
          className={containerClasses}
          htmlFor={rest.id || radioId}
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
            type="radio"
            disabled={disabled}
            className={inputClasses}
            id={rest.id || radioId}
          />
          <span className={radioIconClasses}>
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
          </span>
        </label>
        {label && (
          <label {...labelProps} className={labelClasses} htmlFor={rest.id || radioId}>
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
  disabled: propTypesDisabled,
  containerProps: propTypesObject,
  labelProps: propTypesObject,
};

Radio.displayName = "MaterialTailwind.Radio";

export default Radio;
