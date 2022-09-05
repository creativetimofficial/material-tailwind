import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  variant,
  color,
  size,
  label,
  error,
  success,
  icon,
  labelProps,
  containerProps,
  className,
} from "../../types/components/input";
import {
  propTypesVariant,
  propTypesColor,
  propTypesSize,
  propTypesLabel,
  propTypesError,
  propTypesSuccess,
  propTypesIcon,
  propTypesLabelProps,
  propTypesContainerProps,
  propTypesClassName,
} from "../../types/components/input";

export interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  variant?: variant;
  size?: size;
  color?: color;
  label?: label;
  error?: error;
  success?: success;
  icon?: icon;
  labelProps?: labelProps;
  containerProps?: containerProps;
  className?: className;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      color,
      size,
      label,
      error,
      success,
      icon,
      containerProps,
      labelProps,
      className,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { input } = useTheme();
    const { defaultProps, valid, styles } = input;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    labelProps = labelProps ?? defaultProps.labelProps;
    className = className ?? defaultProps.className;
    icon = icon ?? defaultProps.icon;

    // 3. set styles
    const inputVariant = variants[findMatch(valid.variants, variant, "outlined")];
    const inputSize = inputVariant.sizes[findMatch(valid.sizes, size, "md")];
    const inputError = objectsToString(inputVariant.error.input);
    const inputSuccess = objectsToString(inputVariant.success.input);
    const inputColor = objectsToString(
      inputVariant.colors.input[findMatch(valid.colors, color, "blue")],
    );
    const labelError = objectsToString(inputVariant.error.label);
    const labelSuccess = objectsToString(inputVariant.success.label);
    const labelColor = objectsToString(
      inputVariant.colors.label[findMatch(valid.colors, color, "blue")],
    );
    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(inputSize.container),
      containerProps?.className,
    );
    const inputClasses = classnames(
      objectsToString(base.input),
      objectsToString(inputVariant.base.input),
      objectsToString(inputSize.input),
      { [objectsToString(inputVariant.base.inputWithIcon)]: icon },
      { [inputColor]: !error && !success },
      { [inputError]: error },
      { [inputSuccess]: success },
      className,
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(inputVariant.base.label),
      objectsToString(inputSize.label),
      { [labelColor]: !error && !success },
      { [labelError]: error },
      { [labelSuccess]: success },
      labelProps?.className,
    );
    const iconClasses = classnames(
      objectsToString(base.icon),
      objectsToString(inputVariant.base.icon),
      objectsToString(inputSize.icon),
    );

    // 4. return
    return (
      <div {...containerProps} ref={ref} className={containerClasses}>
        {icon && <div className={iconClasses}>{icon}</div>}
        <input {...rest} className={inputClasses} placeholder={rest?.placeholder || " "} />
        <label {...labelProps} className={labelClasses}>
          {label}
        </label>
      </div>
    );
  },
);

Input.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  error: propTypesError,
  success: propTypesSuccess,
  icon: propTypesIcon,
  labelProps: propTypesLabelProps,
  containerProps: propTypesContainerProps,
  className: propTypesClassName,
};

Input.displayName = "MaterialTailwind.Input";

export default Input;
