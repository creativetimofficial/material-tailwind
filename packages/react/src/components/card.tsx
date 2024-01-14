import * as React from "react";

// @context
import { useTheme } from "@context";

// @types
import type { Props, BaseComponent } from "@types";

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
  extends Omit<BaseComponent<"div" | any>, "size" | "color"> {
  as?: React.ElementType;
  className?: string;
  color?: "default" | BaseComponent<any>["color"];
  children?: React.ReactNode;
}

export const CardRoot = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CardProps
>(({ as, color, variant, className, children, ...rest }, ref) => {
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
});

CardRoot.displayName = "MaterialTailwind.Card";

// card header
export interface CardHeaderProps extends Props<"div" | any> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const CardHeader = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CardHeaderProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.cardHeader || cardHeaderTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

CardHeader.displayName = "MaterialTailwind.CardHeader";

// card body
export interface CardBodyProps extends CardHeaderProps {}

export const CardBody = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CardBodyProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.cardBody || cardBodyTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

CardBody.displayName = "MaterialTailwind.CardBody";

// card footer
export interface CardFooterProps extends CardHeaderProps {}

export const CardFooter = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CardFooterProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.cardFooter || cardFooterTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

CardFooter.displayName = "MaterialTailwind.CardFooter";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default CardFooter;
