import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// card components
import { CardHeader, CardHeaderProps } from "./CardHeader";
import { CardBody, CardBodyProps } from "./CardBody";
import { CardFooter, CardFooterProps } from "./CardFooter";

// types
import type { variant, color, shadow, className, children } from "../../types/components/card";
import {
  propTypesVariant,
  propTypesColor,
  propTypesShadow,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/card";

export interface CardProps extends React.ComponentProps<"div"> {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  className?: className;
  children: children;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant, color, shadow, className, children, ...rest }, ref) => {
    // 1. init
    const { card } = useTheme();
    const { defaultProps, styles, valid } = card;
    const { base, variants } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    shadow = shadow ?? defaultProps.shadow;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const cardRoot = objectsToString(base.initial);
    const cardVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "white")
      ],
    );
    const classes = twMerge(
      classnames(cardRoot, cardVariant, { [objectsToString(base.shadow)]: shadow }),
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

Card.propTypes = {
  variant: PropTypes.oneOf(propTypesVariant),
  color: PropTypes.oneOf(propTypesColor),
  shadow: propTypesShadow,
  className: propTypesClassName,
  children: propTypesChildren,
};

Card.displayName = "MaterialTailwind.Card";

export type { CardHeaderProps, CardBodyProps, CardFooterProps };
export { Card, CardHeader, CardBody, CardFooter };
export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
