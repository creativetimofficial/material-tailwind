import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Progress = forwardRef(
  ({ variant, color, value, label, className, barProps, ...rest }, ref) => {
    // 1. init
    const { progress } = useTheme();
    const { defaultProps, valid } = progress;
    const { base, variants, withLabel } = progress.styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    className = className ?? defaultProps.className;
    barProps = barProps ?? defaultProps.barProps;

    // 3. set styles
    const progressVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "light-blue")
      ],
    );
    const progressWithLabel = objectsToString(withLabel);
    const progressContainer = objectsToString(base.container);
    const progressBar = objectsToString(base.bar);
    const containerClasses = classnames(
      progressContainer,
      { [progressWithLabel]: label },
      className,
    );
    const barClasses = classnames(progressBar, progressVariant, barProps?.className);

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
