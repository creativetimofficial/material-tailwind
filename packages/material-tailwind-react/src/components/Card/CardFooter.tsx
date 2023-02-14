import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { divider, className, children } from "../../types/components/card";
import {
  propTypesDivider,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/card";

export interface CardFooterProps extends React.ComponentProps<"div"> {
  divider?: divider;
  className?: className;
  children: children;
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ divider, className, children, ...rest }, ref) => {
    // 1. init
    const { cardFooter } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = cardFooter;

    // 2. set default props
    className = className ?? defaultProps.className;
    divider = divider ?? defaultProps.divider;

    // 3. set styles
    const cardFooterClasses = twMerge(
      classnames(objectsToString(base.initial), { [objectsToString(base.divider)]: divider }),
      className,
    );

    // 4. return
    return (
      <div {...rest} ref={ref} className={cardFooterClasses}>
        {children}
      </div>
    );
  },
);

CardFooter.propTypes = {
  divider: propTypesDivider,
  className: propTypesClassName,
  children: propTypesChildren,
};

CardFooter.displayName = "MaterialTailwind.CardFooter";

export default CardFooter;
