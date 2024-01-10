import * as React from "react";

// @types
import type { Props, BaseComponent } from "@types";

// card root
export interface CardProps extends Omit<BaseComponent<"div" | any>, "size"> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const CardRoot = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CardProps
>(({ as, color, variant, className, children, ...rest }, ref) => {
  const Element = as || "div";

  return (
    <Element {...rest} ref={ref}>
      {children}
    </Element>
  );
});

CardRoot.displayName = "MaterialTailwind.Card";

// card header
export interface CardHeaderProps extends Props<any> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLElement, CardHeaderProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as || "div";

    return (
      <Element {...rest} ref={ref}>
        {children}
      </Element>
    );
  },
);

CardHeader.displayName = "MaterialTailwind.CardHeader";

// card body
export interface CardBodyProps extends CardHeaderProps {}

export const CardBody = React.forwardRef<HTMLElement, CardBodyProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as || "div";

    return (
      <Element {...rest} ref={ref}>
        {children}
      </Element>
    );
  },
);

CardBody.displayName = "MaterialTailwind.CardBody";

// card footer
export interface CardFooterProps extends CardHeaderProps {}

export const CardFooter = React.forwardRef<HTMLElement, CardFooterProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as || "div";

    return (
      <Element {...rest} ref={ref}>
        {children}
      </Element>
    );
  },
);

CardFooter.displayName = "MaterialTailwind.CardFooter";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default CardFooter;
