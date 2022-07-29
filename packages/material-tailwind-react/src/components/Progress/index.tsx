import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  variant,
  color,
  value,
  label,
  barProps,
  className,
} from "../../types/components/progress";
import {
  propTypesVariant,
  propTypesColor,
  propTypesValue,
  propTypesLabel,
  propTypesBarProps,
  propTypesClassName,
} from "../../types/components/progress";

export interface ProgressProps extends React.ComponentProps<"div"> {
  variant?: variant;
  color?: color;
  value?: value;
  label?: label;
  barProps?: barProps;
  className?: className;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ variant, color, value, label, className, barProps, ...rest }, ref) => {
    // 1. init
    const { progress } = useTheme();
    const { defaultProps, valid, styles } = progress;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    className = className ?? defaultProps.className;
    barProps = barProps ?? defaultProps.barProps;

    // 3. set styles
    const progressVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "blue")
      ],
    );
    const progressContainer = objectsToString(base.container.initial);
    const progressWithLabel = objectsToString(base.container.withLabel);
    const progressBar = objectsToString(base.bar);
    const containerClasses = twMerge(
      classnames(progressContainer, { [progressWithLabel]: label }),
      className,
    );
    const barClasses = twMerge(classnames(progressBar, progressVariant), barProps?.className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={containerClasses}>
        <div {...barProps} className={barClasses} style={{ width: `${value}%` }}>
          {label && `${value}% ${typeof label === "string" ? label : ""}`}
        </div>
      </div>
    );
  },
);

Progress.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  value: propTypesValue,
  label: propTypesLabel,
  barProps: propTypesBarProps,
  className: propTypesClassName,
};

Progress.displayName = "MaterialTailwind.Progress";

export default Progress;
