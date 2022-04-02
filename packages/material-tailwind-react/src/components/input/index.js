/* eslint-disable jsx-a11y/label-has-associated-control */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

const Input = forwardRef(
  ({ variant, color, size, label, inputProps, labelProps, className, ...rest }, ref) => {
    const { input } = useContext(MaterialTailwindTheme);
    const { defaultProps } = input;
    const { base, variants } = input.styles;

    variant = variant || defaultProps.variant;
    size = size || defaultProps.size;
    color = color || defaultProps.color;
    label = label || defaultProps.label;
    inputProps = inputProps || defaultProps.inputProps;
    labelProps = labelProps || defaultProps.labelProps;
    className = className || defaultProps.className;
    const inputVariant = variants[variant || "outlined"];

    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(inputVariant.sizes[size || "md"].container),
      className,
    );

    const inputClasses = classnames(
      objectsToString(base.input),
      objectsToString(inputVariant.base.input),
      objectsToString(inputVariant.sizes[size || "md"].input),
      objectsToString(inputVariant.colors.input[color || "light-blue"]),
      inputProps && inputProps.className ? inputProps.className : "",
    );

    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(inputVariant.base.label),
      objectsToString(inputVariant.sizes[size || "md"].label),
      objectsToString(inputVariant.colors.label[color || "light-blue"]),
      labelProps && labelProps.className ? labelProps.className : "",
    );

    return (
      <div {...rest} ref={ref} className={containerClasses}>
        <input
          {...inputProps}
          className={inputClasses}
          placeholder={inputProps && inputProps.placeholder ? inputProps.placeholder : " "}
        />
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
  inputProps: PropTypes.instanceOf(Object),
  labelProps: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};

Input.displayName = "Input";

export default Input;
