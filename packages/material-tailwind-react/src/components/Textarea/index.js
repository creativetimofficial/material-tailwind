/* eslint-disable jsx-a11y/label-has-associated-control */
import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

const Textarea = forwardRef(
  (
    { variant, color, size, label, error, success, resize, labelProps, className, ...rest },
    ref,
  ) => {
    // 1. init
    const { textarea } = useContext(MaterialTailwindTheme);
    const { defaultProps, valid } = textarea;
    const { base, variants } = textarea.styles;

    // 2. set default props
    variant = variant || defaultProps.variant;
    size = size || defaultProps.size;
    color = color || defaultProps.color;
    label = label || defaultProps.label;
    labelProps = labelProps || defaultProps.labelProps;
    className = className || defaultProps.className;

    // 3. set styles
    const textareaVariant = variants[findMatch(valid.variants, variant, "outlined")];
    const textareaError = objectsToString(textareaVariant.error.textarea);
    const textareaSuccess = objectsToString(textareaVariant.success.textarea);
    const textareaColor = objectsToString(
      textareaVariant.colors.textarea[findMatch(valid.colors, color, "light-blue")],
    );
    const labelError = objectsToString(textareaVariant.error.label);
    const labelSuccess = objectsToString(textareaVariant.success.label);
    const labelColor = objectsToString(
      textareaVariant.colors.label[findMatch(valid.colors, color, "light-blue")],
    );
    const containerClasses = classnames(objectsToString(base.container));
    const textareaClasses = classnames(
      objectsToString(base.textarea),
      objectsToString(textareaVariant.base.textarea),
      objectsToString(textareaVariant.sizes[findMatch(valid.sizes, size, "md")].textarea),
      { [textareaColor]: !error && !success },
      { [textareaError]: error },
      { [textareaSuccess]: success },
      !resize ? "!resize-none" : "",
      className,
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(textareaVariant.base.label),
      objectsToString(textareaVariant.sizes[findMatch(valid.sizes, size, "md")].label),
      { [labelColor]: !error && !success },
      { [labelError]: error },
      { [labelSuccess]: success },
      labelProps && labelProps.className ? labelProps.className : "",
    );

    // 4. return
    return (
      <div ref={ref} className={containerClasses}>
        <textarea
          {...rest}
          className={textareaClasses}
          placeholder={rest && rest.placeholder ? rest.placeholder : " "}
        />
        <label className={labelClasses}>{label}</label>
      </div>
    );
  },
);

Textarea.propTypes = {
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
  resize: PropTypes.bool,
  labelProps: PropTypes.instanceOf(Object),
  className: PropTypes.string,
};

Textarea.displayName = "Textarea";

export default Textarea;
