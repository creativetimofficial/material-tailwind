import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import validColors from "utils/validColors";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

export const Progress = forwardRef(
  ({ variant, color, value, label, className, barProps, ...rest }, ref) => {
    const { progress } = useContext(MaterialTailwindTheme);
    const { defaultProps } = progress;
    const { root, variants, typography, spacing, border, withLabel, bar } = progress.styles;

    variant = variant || defaultProps.variant;
    color = color || defaultProps.color;
    label = label || defaultProps.label;
    className = className || defaultProps.className;
    barProps = barProps || defaultProps.barProps;

    const progressVariant = variants[variant]
      ? objectsToString(variants[variant][validColors[color] || defaultProps.color])
      : "";
    const progressTypography = objectsToString(typography);
    const progressSpacing = objectsToString(spacing);
    const progressBorder = objectsToString(border);
    const progressLabel = objectsToString(withLabel);
    const progressBar = objectsToString(bar);

    const containerClasses = classnames(
      root,
      progressTypography,
      { [progressSpacing]: !label },
      { [progressBorder]: !label },
      { [progressLabel]: label },
      className,
    );

    const barClasses = classnames(
      progressBar,
      progressVariant,
      barProps && barProps.className ? barProps.className : "",
    );

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
  variant: PropTypes.oneOf(["filled", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  className: PropTypes.string,
  barProps: PropTypes.instanceOf(Object),
};

Progress.displayName = "Progress";

export default Progress;
