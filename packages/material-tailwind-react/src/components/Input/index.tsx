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
  shrink,
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
  propTypesShrink,
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
  shrink?: shrink;
  inputRef?: React.Ref<HTMLInputElement>;
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
      shrink,
      inputRef,
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
    containerProps = containerProps ?? defaultProps.containerProps;
    className = className ?? defaultProps.className;
    shrink = shrink ?? defaultProps.shrink;
    icon = icon ?? defaultProps.icon;

    // 3. set styles
    const inputVariant = variants[findMatch(valid.variants, variant, "outlined")];
    const inputSize = inputVariant.sizes[findMatch(valid.sizes, size, "md")];
    const inputError = objectsToString(inputVariant.error.input);
    const inputSuccess = objectsToString(inputVariant.success.input);
    const inputShrink = objectsToString(inputVariant.shrink.input);
    const inputColor = objectsToString(
      inputVariant.colors.input[findMatch(valid.colors, color, "blue")],
    );
    const labelError = objectsToString(inputVariant.error.label);
    const labelSuccess = objectsToString(inputVariant.success.label);
    const labelShrink = objectsToString(inputVariant.shrink.label);
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
      { [inputShrink]: shrink },
      className,
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(inputVariant.base.label),
      objectsToString(inputSize.label),
      { [labelColor]: !error && !success },
      { [labelError]: error },
      { [labelSuccess]: success },
      { [labelShrink]: shrink },
      labelProps?.className,
    );
    const iconClasses = classnames(
      objectsToString(base.icon),
      objectsToString(inputVariant.base.icon),
      objectsToString(inputSize.icon),
    );
    const asteriskClasses = classnames(objectsToString(base.asterisk));

    // 4. return
    return (
      <div {...containerProps} ref={ref} className={containerClasses}>
        {icon && <div className={iconClasses}>{icon}</div>}
        <input
          {...rest}
          ref={inputRef}
          className={inputClasses}
          placeholder={rest?.placeholder || " "}
        />
        <label {...labelProps} className={labelClasses}>
          {label} {rest.required ? <span className={asteriskClasses}>*</span> : ""}
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
  shrink: propTypesShrink,
  className: propTypesClassName,
};

Input.displayName = "MaterialTailwind.Input";

export default Input;
