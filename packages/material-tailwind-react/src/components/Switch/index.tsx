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
  ripple,
  className,
  disabled,
  objectType,
} from "../../types/components/checkbox";
import {
  propTypesColor,
  propTypesLabel,
  propTypesRipple,
  propTypesClassName,
  propTypesDisabled,
  propTypesObject,
} from "../../types/components/checkbox";

export interface SwitchProps extends React.ComponentProps<"input"> {
  color?: color;
  label?: label;
  ripple?: ripple;
  className?: className;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  circleProps?: objectType;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      color,
      label,
      ripple,
      className,
      disabled,
      containerProps,
      circleProps,
      labelProps,
      inputRef,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { switch: toggle } = useTheme();
    const { defaultProps, valid, styles } = toggle;
    const { base, colors } = styles;
    const switchId = React.useId();

    // 2. set default props
    color = color ?? defaultProps.color;
    ripple = ripple ?? defaultProps.ripple;
    className = className ?? defaultProps.className;
    disabled = disabled ?? defaultProps.disabled;
    containerProps = containerProps ?? defaultProps.containerProps;
    labelProps = labelProps ?? defaultProps.labelProps;
    circleProps = circleProps ?? defaultProps.circleProps;

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
    const circleClasses = twMerge(
      classnames(
        objectsToString(base.circle),
        colors[findMatch(valid.colors, color, "blue")].circle,
        colors[findMatch(valid.colors, color, "blue")].before,
      ),
      circleProps?.className,
    );
    const rippleClasses = classnames(objectsToString(base.ripple));
    const labelClasses = twMerge(classnames(objectsToString(base.label)), labelProps?.className);

    // 4. return
    return (
      <div ref={ref} className={rootClasses}>
        <div {...containerProps} className={containerClasses}>
          <input
            {...rest}
            ref={inputRef}
            type="checkbox"
            disabled={disabled}
            id={rest.id || switchId}
            className={inputClasses}
          />
          <label {...circleProps} htmlFor={rest.id || switchId} className={circleClasses}>
            {ripple && (
              <div
                className={rippleClasses}
                onMouseDown={(e) => {
                  const onMouseDown = containerProps?.onMouseDown;

                  if (ripple) {
                    rippleEffect.create(e, "dark");
                  }

                  return typeof onMouseDown === "function" && onMouseDown(e);
                }}
              />
            )}
          </label>
        </div>
        {label && (
          <label {...labelProps} htmlFor={rest.id || switchId} className={labelClasses}>
            {label}
          </label>
        )}
      </div>
    );
  },
);

Switch.propTypes = {
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  ripple: propTypesRipple,
  className: propTypesClassName,
  disabled: propTypesDisabled,
  containerProps: propTypesObject,
  labelProps: propTypesObject,
  circleProps: propTypesObject,
};

Switch.displayName = "MaterialTailwind.Switch";

export default Switch;
