import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { className, children } from "../../types/components/card";
import { propTypesClassName, propTypesChildren } from "../../types/components/card";

export interface CardBodyProps extends React.ComponentProps<"div"> {
  className?: className;
  children: children;
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { cardBody } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = cardBody;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const cardBodyClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={cardBodyClasses}>
        {children}
      </div>
    );
  },
);

CardBody.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

CardBody.displayName = "MaterialTailwind.CardBody";

export default CardBody;
