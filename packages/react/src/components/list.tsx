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

// list root
export interface ListProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/list) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/list#list-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/list#list-theme)
 */
export const ListRoot = React.forwardRef<HTMLElement, ListProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as ?? "ul";
    const contextTheme = useTheme();
    const theme = contextTheme?.list ?? listTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

ListRoot.displayName = "MaterialTailwind.List";

// list item
export interface ListItemProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  ripple?: boolean;
  children: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLElement, ListItemProps>(
  ({ as, className, disabled, selected, ripple, children, ...rest }, ref) => {
    const Element = as ?? "li";
    const contextTheme = useTheme();
    const theme = contextTheme?.listItem ?? listItemTheme;
    const defaultProps = theme?.defaultProps;

    ripple ??= (defaultProps?.ripple as ListItemProps["ripple"]) ?? true;

    const rippleEffect = ripple !== undefined && new Ripple();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const onClick = rest?.onClick;

      if (ripple) {
        rippleEffect.create(e, "dark");
      }

      return typeof onClick === "function" && onClick(e);
    };

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element
        {...rest}
        ref={ref}
        className={styles}
        data-selected={selected}
        aria-disabled={disabled}
        onClick={handleClick}
      >
        {children}
      </Element>
    );
  },
);

ListItem.displayName = "MaterialTailwind.ListItem";

// list item start
export interface ListItemStartProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  ripple?: boolean;
}

export const ListItemStart = React.forwardRef<HTMLElement, ListItemStartProps>(
  ({ as, className, disabled, selected, ripple, children, ...rest }, ref) => {
    const Element = as ?? "span";
    const contextTheme = useTheme();
    const theme = contextTheme?.listItemStart ?? listItemStartTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

ListItemStart.displayName = "MaterialTailwind.ListItemStart";

// list item end
export interface ListItemEndProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  ripple?: boolean;
}

export const ListItemEnd = React.forwardRef<HTMLElement, ListItemEndProps>(
  ({ as, className, disabled, selected, ripple, children, ...rest }, ref) => {
    const Element = as ?? "span";
    const contextTheme = useTheme();
    const theme = contextTheme?.listItemEnd ?? listItemEndTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

ListItemEnd.displayName = "MaterialTailwind.ListItemEnd";

export const List = Object.assign(ListRoot, {
  Item: ListItem,
  ItemStart: ListItemStart,
  ItemEnd: ListItemEnd,
});

export default List;
