import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import validColors from "utils/validColors";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

export const IconButton = forwardRef(
  ({ variant, size, color, ripple, className, children, ...rest }, ref) => {
    const { iconButton } = useContext(MaterialTailwindTheme);
    const { defaultProps } = iconButton;
    const { root, variants, sizes, typography, transition } = iconButton.styles;

    variant = variant || defaultProps.variant;
    size = size || defaultProps.size;
    color = color || defaultProps.color;
    ripple = ripple === undefined ? defaultProps.ripple : ripple;
    className = className || defaultProps.className;

    const rippleEffect = ripple !== undefined && new Ripple();

    const iconButtonVariant = variants[variant]
      ? objectsToString(variants[variant][validColors[color] || defaultProps.color])
      : "";
    const iconButtonSize = sizes[size] ? objectsToString(sizes[size]) : "";
    const iconButtonTypography = objectsToString(typography);

    const classes = classnames(
      root,
      iconButtonSize,
      iconButtonVariant,
      iconButtonTypography,
      transition,
      className,
    );

    return (
      <button
        ref={ref}
        className={classes}
        {...rest}
        type={rest.type || "button"}
        onMouseDown={(e) => {
          const { onMouseDown } = rest || undefined;

          if (ripple) {
            rippleEffect.create(
              e,
              variant === "filled" || variant === "gradient" ? "light" : "dark",
            );
          }

          return typeof onMouseDown === "function" && onMouseDown();
        }}
      >
        {children}
      </button>
    );
  },
);

IconButton.propTypes = {
  variant: PropTypes.oneOf(["filled", "outlined", "gradient", "text"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
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
  ripple: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

IconButton.displayName = "IconButton";

export default IconButton;
