"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { badgeTheme, badgeContentTheme, badgeIndicatorTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

// badge context
export interface BadgeContextProps
  extends Omit<SharedProps, "size" | "variant"> {
  overlap?: "circular" | "square";
  placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end";
}

export const BadgeContext = React.createContext<BadgeContextProps>({
  color: "primary",
  overlap: "square",
  placement: "top-end",
});

// badge root
export type BadgeProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    overlap?: "circular" | "square";
    placement?: "top-start" | "top-end" | "bottom-start" | "bottom-end";
  } & Omit<SharedProps, "size" | "variant">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/badge) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/badge#badge-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/badge#badge-theme)
 */
function BadgeRootBase<T extends React.ElementType = "div">(
  { as, color, overlap, placement, className, children, ...props }: BadgeProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.badge ?? badgeTheme;
  const defaultProps = theme?.defaultProps;

  color ??= (defaultProps?.color as BadgeProps["color"]) ?? "primary";
  overlap ??= (defaultProps?.overlap as BadgeProps["overlap"]) ?? "square";
  placement ??=
    (defaultProps?.placement as BadgeProps["placement"]) ?? "top-end";

  const styles = twMerge(theme.baseStyle, className);

  const contextValue = React.useMemo(
    () => ({
      color,
      overlap,
      placement,
    }),
    [color, overlap, placement],
  );

  return (
    <Component {...props} ref={ref} className={styles}>
      <BadgeContext.Provider value={contextValue}>
        {children}
      </BadgeContext.Provider>
    </Component>
  );
}

BadgeRootBase.displayName = "MaterialTailwind.Badge";

const BadgeRoot = React.forwardRef(BadgeRootBase) as <
  T extends React.ElementType = "div",
>(
  props: BadgeProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// badge content
export type BadgeContentProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function BadgeContentRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: BadgeContentProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.badgeContent ?? badgeContentTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

BadgeContentRoot.displayName = "MaterialTailwind.BadgeContent";

export const BadgeContent = React.forwardRef(BadgeContentRoot) as <
  T extends React.ElementType = "div",
>(
  props: BadgeContentProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// badge indicator
export type BadgeIndicatorProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function BadgeIndicatorRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: BadgeIndicatorProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const { overlap, placement, color } = React.useContext(BadgeContext);
  const theme = contextTheme?.badgeIndicator ?? badgeIndicatorTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme.color[color || "primary"],
    className,
  );

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      data-overlap={overlap}
      data-placement={placement}
    >
      {children}
    </Component>
  );
}

BadgeIndicatorRoot.displayName = "MaterialTailwind.BadgeIndicator";

export const BadgeIndicator = React.forwardRef(BadgeIndicatorRoot) as <
  T extends React.ElementType = "span",
>(
  props: BadgeIndicatorProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Badge = Object.assign(BadgeRoot, {
  Content: BadgeContent,
  Indicator: BadgeIndicator,
});

export default Badge;
