import { forwardRef, useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import validColors from "utils/validColors";
import objectsToString from "utils/objectsToString";
import { MaterialTailwindTheme } from "context/theme";

export const Button = forwardRef(
  ({ variant, size, color, fullWidth, ripple, className, children, ...rest }, ref) => {
    const { button } = useContext(MaterialTailwindTheme);
    const { defaultProps } = button;
    const { root, variants, sizes, typography, fullWidth: block, transition } = button.styles;

    variant = variant || defaultProps.variant;
    size = size || defaultProps.size;
    color = color || defaultProps.color;
    fullWidth = fullWidth || defaultProps.fullWidth;
    ripple = ripple === undefined ? defaultProps.ripple : ripple;
    className = className || defaultProps.className;

    const rippleEffect = ripple !== undefined && new Ripple();

    const buttonVariant = variants[variant]
      ? objectsToString(variants[variant][validColors[color] || defaultProps.color])
      : "";
    const buttonSize = sizes[size] ? objectsToString(sizes[size]) : "";
    const buttonTypography = objectsToString(typography);

    const classes = classnames(
      root,
      buttonSize,
      buttonVariant,
      buttonTypography,
      { [block]: fullWidth },
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

Button.propTypes = {
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
  fullWidth: PropTypes.bool,
  ripple: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.displayName = "Button";

export default Button;
