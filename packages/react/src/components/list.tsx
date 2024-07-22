"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @hooks
import { useTheme } from "@context";

// @theme
import {
  listTheme,
  listItemTheme,
  listItemStartTheme,
  listItemEndTheme,
} from "@theme";

// @types
import type { BaseProps } from "@types";

// list root
/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/list) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/list#list-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/list#list-theme)
 */
export type ListProps<T extends React.ElementType = "ul"> = BaseProps<T>;

function ListRootBase<T extends React.ElementType = "ul">(
  { as, className, children, ...props }: ListProps<T>,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("ul" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.list ?? listTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

ListRootBase.displayName = "MaterialTailwind.List";

export const ListRoot = React.forwardRef(ListRootBase) as <
  T extends React.ElementType = "ul",
>(
  props: ListProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// list item
export type ListItemProps<T extends React.ElementType = "li"> = BaseProps<
  T,
  {
    disabled?: boolean;
    selected?: boolean;
    ripple?: boolean;
  }
>;

function ListItemRoot<T extends React.ElementType = "li">(
  {
    as,
    className,
    disabled,
    selected,
    ripple,
    children,
    ...props
  }: ListItemProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("li" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.listItem ?? listItemTheme;
  const defaultProps = theme?.defaultProps;

  ripple ??= (defaultProps?.ripple as ListItemProps["ripple"]) ?? true;

  const rippleEffect = ripple !== undefined && new Ripple();

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const onClick = props?.onClick;

    if (ripple) {
      rippleEffect.create(e, "dark");
    }

    return typeof onClick === "function" && onClick(e);
  };

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      data-selected={selected}
      aria-disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Component>
  );
}

ListItemRoot.displayName = "MaterialTailwind.ListItem";

export const ListItem = React.forwardRef(ListItemRoot) as <
  T extends React.ElementType = "li",
>(
  props: ListItemProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// list item start
export type ListItemStartProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function ListItemStartRoot<T extends React.ElementType = "span">(
  { as, className, disabled, children, ...props }: ListItemStartProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.listItemStart ?? listItemStartTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

ListItemStartRoot.displayName = "MaterialTailwind.ListItemStart";

export const ListItemStart = React.forwardRef(ListItemStartRoot) as <
  T extends React.ElementType = "span",
>(
  props: ListItemStartProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// list item end
export type ListItemEndProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function ListItemEndRoot<T extends React.ElementType = "span">(
  { as, className, disabled, children, ...props }: ListItemEndProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.listItemEnd ?? listItemEndTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

ListItemEndRoot.displayName = "MaterialTailwind.ListItemEnd";

export const ListItemEnd = React.forwardRef(ListItemEndRoot) as <
  T extends React.ElementType = "span",
>(
  props: ListItemEndProps & { ref?: React.Ref<Element> },
) => JSX.Element;

export const List = Object.assign(ListRoot, {
  Item: ListItem,
  ItemStart: ListItemStart,
  ItemEnd: ListItemEnd,
});

export default List;
