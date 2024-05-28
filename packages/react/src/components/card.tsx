"use client";

import * as React from "react";

// @context
import { useTheme } from "@context";

// @types
import type { BaseComponent } from "@types";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import {
  cardTheme,
  cardHeaderTheme,
  cardBodyTheme,
  cardFooterTheme,
} from "@theme";

// card root
export interface CardProps
  extends Omit<BaseComponent<HTMLElement>, "size" | "color"> {
  as?: React.ElementType;
  className?: string;
  color?: "default" | BaseComponent<HTMLElement>["color"];
  children?: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/card) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/card#card-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/card#card-theme)
 */

export const CardRoot = React.forwardRef<HTMLElement, CardProps>(
  ({ as, color, variant, className, children, ...rest }, ref) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme.card || cardTheme;
    const defaultProps = theme.defaultProps;

    color ??= (defaultProps?.color as CardProps["color"]) ?? "default";
    variant ??= (defaultProps?.variant as CardProps["variant"]) ?? "solid";

    const styles = twMerge(
      theme.baseStyle,
      theme.variant[variant][color],
      className,
    );

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

CardRoot.displayName = "MaterialTailwind.Card";

// card header
export interface CardHeaderProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const CardHeader = React.forwardRef<HTMLElement, CardHeaderProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme.cardHeader || cardHeaderTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
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
    const contextTheme = useTheme();
    const theme = contextTheme.cardBody || cardBodyTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
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
    const contextTheme = useTheme();
    const theme = contextTheme.cardFooter || cardFooterTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
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
