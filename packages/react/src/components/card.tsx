"use client";

import * as React from "react";

// @context
import { useTheme } from "@context";

// @types
import type { BaseProps, SharedProps } from "@types";

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
export type CardProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    color?: "default" | SharedProps["color"];
  } & Omit<SharedProps, "size" | "color">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/card) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/card#card-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/card#card-theme)
 */
function CardRootBase<T extends React.ElementType = "div">(
  { as, color, variant, className, children, ...props }: CardProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
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
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

CardRootBase.displayName = "MaterialTailwind.Card";

export const CardRoot = React.forwardRef(CardRootBase) as <
  T extends React.ElementType = "div",
>(
  props: CardProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// card header
export type CardHeaderProps<T extends React.ElementType = "div"> = BaseProps<T>;

function CardHeaderRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: CardHeaderProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.cardHeader || cardHeaderTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

CardHeaderRoot.displayName = "MaterialTailwind.CardHeader";

export const CardHeader = React.forwardRef(CardHeaderRoot) as <
  T extends React.ElementType = "div",
>(
  props: CardHeaderProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// card body
export type CardBodyProps<T extends React.ElementType = "div"> = BaseProps<T>;

function CardBodyRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: CardBodyProps,
  ref: React.Ref<Element>,
) {
  const Component = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.cardBody || cardBodyTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

CardBodyRoot.displayName = "MaterialTailwind.CardBody";

export const CardBody = React.forwardRef(CardBodyRoot) as <
  T extends React.ElementType = "div",
>(
  props: CardBodyProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// card footer
export type CardFooterProps<T extends React.ElementType = "div"> = BaseProps<T>;

function CardFooterRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: CardFooterProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.cardFooter || cardFooterTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

CardFooterRoot.displayName = "MaterialTailwind.CardFooter";

export const CardFooter = React.forwardRef(CardFooterRoot) as <
  T extends React.ElementType = "div",
>(
  props: CardFooterProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});

export default Card;
