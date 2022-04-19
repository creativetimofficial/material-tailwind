import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const Button = forwardRef(
  ({ variant, size, color, fullWidth, ripple, className, children, ...rest }, ref) => {
    // 1. init
    const { button } = useTheme();
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    ripple = ripple ?? defaultProps.ripple;
    className = className ?? defaultProps.className;

    // 3. set ripple effect instance
    const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    const buttonBase = objectsToString(base.initial);
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "light-blue")
      ],
    );
    const buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    const classes = classnames(
      buttonBase,
      buttonSize,
      buttonVariant,
      { [objectsToString(base.fullWidth)]: fullWidth },
      className,
    );

    // 5. return
    return (
      <button
        {...rest}
        ref={ref}
        className={classes}
        type={rest.type || "button"}
        onMouseDown={(e) => {
          const onMouseDown = rest?.onMouseDown;

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
