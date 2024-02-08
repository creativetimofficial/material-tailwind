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
  resize,
  labelProps,
  className,
  shrink,
  containerProps,
} from "../../types/components/input";
import {
  propTypesVariant,
  propTypesColor,
  propTypesSize,
  propTypesLabel,
  propTypesError,
  propTypesSuccess,
  propTypesResize,
  propTypesLabelProps,
  propTypesClassName,
  propTypesShrink,
  propTypesContainerProps,
} from "../../types/components/input";
import { twMerge } from "tailwind-merge";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  variant?: variant;
  size?: size;
  color?: color;
  label?: label;
  error?: error;
  success?: success;
  resize?: resize;
  labelProps?: labelProps;
  containerProps?: containerProps;
  shrink?: shrink;
  className?: className;
}

export const Textarea = React.forwardRef<HTMLDivElement, TextareaProps>(
  (
    {
      variant,
      color,
      size,
      label,
      error,
      success,
      resize,
      labelProps,
      containerProps,
      shrink,
      className,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { textarea } = useTheme();
    const { defaultProps, valid, styles } = textarea;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    labelProps = labelProps ?? defaultProps.labelProps;
    containerProps = containerProps ?? defaultProps.containerProps;
    shrink = shrink ?? defaultProps.shrink;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const textareaVariant = variants[findMatch(valid.variants, variant, "outlined")];
    const textareaError = objectsToString(textareaVariant.error.textarea);
    const textareaSuccess = objectsToString(textareaVariant.success.textarea);
    const textareaShrink = objectsToString(textareaVariant.shrink.textarea);
    const textareaColor = objectsToString(
      textareaVariant.colors.textarea[findMatch(valid.colors, color, "gray")],
    );
    const labelError = objectsToString(textareaVariant.error.label);
    const labelSuccess = objectsToString(textareaVariant.success.label);
    const labelShrink = objectsToString(textareaVariant.shrink.label);
    const labelColor = objectsToString(
      textareaVariant.colors.label[findMatch(valid.colors, color, "gray")],
    );
    const containerClasses = classnames(objectsToString(base.container), containerProps?.className);
    const textareaClasses = classnames(
      objectsToString(base.textarea),
      objectsToString(textareaVariant.base.textarea),
      objectsToString(textareaVariant.sizes[findMatch(valid.sizes, size, "md")].textarea),
      { [textareaColor]: !error && !success },
      { [textareaError]: error },
      { [textareaSuccess]: success },
      { [textareaShrink]: shrink },
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
      { [labelShrink]: shrink },
      labelProps?.className,
    );
    const asteriskClasses = classnames(objectsToString(base.asterisk));

    // 4. return
    return (
      <div ref={ref} className={containerClasses}>
        <textarea {...rest} className={textareaClasses} placeholder={rest?.placeholder || " "} />
        <label className={labelClasses}>
          {label} {rest.required ? <span className={asteriskClasses}>*</span> : ""}
        </label>
      </div>
    );
  },
);

Textarea.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  size: PropTypes.oneOf(propTypesSize),
  color: PropTypes.oneOf(propTypesColor),
  label: propTypesLabel,
  error: propTypesError,
  success: propTypesSuccess,
  resize: propTypesResize,
  labelProps: propTypesLabelProps,
  containerProps: propTypesContainerProps,
  shrink: propTypesShrink,
  className: propTypesClassName,
};

Textarea.displayName = "MaterialTailwind.Textarea";

export default Textarea;
