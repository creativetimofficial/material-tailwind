import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import findMatch from "utils/findMatch";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

// card components
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

const Card = forwardRef(({ variant, color, shadow, className, children, ...rest }, ref) => {
  // 1. init
  const { card } = useTheme();
  const { defaultProps, styles, valid } = card;
  const { base, variants } = styles;

  // 2. set default props
  variant = variant ?? defaultProps.variant;
  color = color ?? defaultProps.color;
  shadow = shadow ?? defaultProps.shadow;
  className = className ?? defaultProps.className;

  // 3. set styles
  const cardRoot = objectsToString(base.initial);
  const cardVariant = objectsToString(
    variants[findMatch(valid.variants, variant, "filled")][findMatch(valid.colors, color, "white")],
  );
  const classes = classnames(
    cardRoot,
    cardVariant,
    { [objectsToString(base.shadow)]: shadow },
    className,
  );

  // 4. return
  return (
    <div {...rest} ref={ref} className={classes}>
      {children}
    </div>
  );
});

Card.propTypes = {
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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.displayName = "Card";
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export { Card, CardHeader, CardBody, CardFooter };
export default Card;
