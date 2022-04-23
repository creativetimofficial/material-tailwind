import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

const Input = forwardRef(
  ({ variant, color, size, label, error, success, icon, labelProps, className, ...rest }, ref) => {
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
      inputVariant.colors.input[findMatch(valid.colors, color, "light-blue")],
    );
    const labelError = objectsToString(inputVariant.error.label);
    const labelSuccess = objectsToString(inputVariant.success.label);
    const labelColor = objectsToString(
      inputVariant.colors.label[findMatch(valid.colors, color, "light-blue")],
    );
    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(inputSize.container),
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
      <div ref={ref} className={containerClasses}>
        {icon && <div className={iconClasses}>{icon}</div>}
        <input {...rest} className={inputClasses} placeholder={rest?.placeholder || " "} />
        <label className={labelClasses}>{label}</label>
      </div>
    );
  },
);

Input.propTypes = {
  variant: PropTypes.oneOf(["standard", "outlined", "static"]),
  size: PropTypes.oneOf(["md", "lg"]),
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
  error: PropTypes.bool,
  success: PropTypes.bool,
  icon: PropTypes.node,
  labelProps: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};

Input.displayName = "Input";

export { Input };
export default Input;
