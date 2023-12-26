import React from "react";

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
import type { Props } from "@types";

// list root
export interface ListProps extends Props<"ul" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const ListRoot = React.forwardRef<
  HTMLUListElement | HTMLElement,
  ListProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as ?? "ul";
  const contextTheme = useTheme();
  const theme = contextTheme?.list ?? listTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

ListRoot.displayName = "MaterialTailwind.List";

// list item
export interface ListItemProps extends Props<"li" | any> {
  as?: React.ElementType;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  ripple?: boolean;
  children: React.ReactNode;
}

export const ListItem = React.forwardRef<
  HTMLLIElement | HTMLElement,
  ListItemProps
>(({ as, className, disabled, selected, ripple, children, ...rest }, ref) => {
  const Element = as ?? "li";
  const contextTheme = useTheme();
  const theme = contextTheme?.listItem ?? listItemTheme;
  const defaultProps = contextTheme?.listItem?.defaultProps;

  ripple ??= (defaultProps?.ripple as ListItemProps["ripple"]) ?? true;

  const rippleEffect = ripple !== undefined && new Ripple();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const onClick = rest?.onClick;

    if (ripple) {
      rippleEffect.create(e, "dark");
    }

    return typeof onClick === "function" && onClick(e);
  };

  const styles = twMerge(
    theme.baseStyle,
    selected && theme["selected"],
    className,
  );

  return (
    <Element
      {...rest}
      ref={ref}
      className={styles}
      aria-disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </Element>
  );
});

ListItem.displayName = "MaterialTailwind.ListItem";

// list item start
export interface ListItemStartProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const ListItemStart = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  ListItemStartProps
>(({ as, className, disabled, selected, ripple, children, ...rest }, ref) => {
  const Element = as ?? "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.listItemStart ?? listItemStartTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

ListItemStart.displayName = "MaterialTailwind.ListItemStart";

// list item end
export interface ListItemEndProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const ListItemEnd = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  ListItemEndProps
>(({ as, className, disabled, selected, ripple, children, ...rest }, ref) => {
  const Element = as ?? "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.listItemEnd ?? listItemEndTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

ListItemEnd.displayName = "MaterialTailwind.ListItemEnd";

export const List = Object.assign(ListRoot, {
  Item: ListItem,
  ItemStart: ListItemStart,
  ItemEnd: ListItemEnd,
});

export default List;
