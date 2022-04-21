import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const CardHeader = forwardRef(
  ({ variant, color, shadow, floated, className, children, ...rest }, ref) => {
    // 1. init
    const { cardHeader } = useTheme();
    const { defaultProps, styles, valid } = cardHeader;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    floated = floated ?? defaultProps.floated;
    className = className ?? defaultProps.className;

    // 3. set styles
    const cardHeaderRoot = objectsToString(base.initial);
    const cardHeaderVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "white")
      ],
    );
    const classes = classnames(
      cardHeaderRoot,
      cardHeaderVariant,
      { [objectsToString(base.shadow)]: shadow },
      { [objectsToString(base.floated)]: floated },
      className,
    );

    // 4. return
    return (
      <div {...rest} ref={ref} className={classes}>
        {children}
      </div>
    );
  },
);

CardHeader.propTypes = {
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
  floated: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardHeader.displayName = "CardHeader";

export default CardHeader;
