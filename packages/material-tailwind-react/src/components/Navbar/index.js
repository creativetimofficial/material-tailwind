import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

const Navbar = forwardRef(
  ({ variant, color, shadow, blurred, fullWidth, className, children, ...rest }, ref) => {
    // 1. init
    const { navbar } = useTheme();
    const { defaultProps, valid, styles } = navbar;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    blurred = blurred ?? defaultProps.blurred;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = className ?? defaultProps.className;

    // 3. set styles
    const navbarRoot = classnames(objectsToString(base.initial), {
      [objectsToString(base.shadow)]: shadow,
      [objectsToString(base.blurred)]: blurred && color === "white",
      [objectsToString(base.fullWidth)]: fullWidth,
    });
    const navbarVariant = classnames(
      objectsToString(
        variants[findMatch(valid.variants, variant, "filled")][
          findMatch(valid.colors, color, "white")
        ],
      ),
    );
    const navbarClasses = classnames(navbarRoot, navbarVariant, className);

    // 4. return
    return (
      <nav {...rest} ref={ref} className={navbarClasses}>
        {children}
      </nav>
    );
  },
);

Navbar.propTypes = {
  variant: PropTypes.oneOf(["filled", "gradient"]),
  color: PropTypes.oneOf([
    "transparent",
    "white",
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
  shadow: PropTypes.bool,
  blurred: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Navbar.displayName = "Navbar";

export { Navbar };
export default Navbar;
