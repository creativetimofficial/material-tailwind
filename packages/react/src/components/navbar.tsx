"use client";

import * as React from "react";

// @context
import { useTheme } from "@context";

// @types
import type { BaseProps, SharedProps } from "@types";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import { navbarTheme } from "@theme";

// card root
export type NavbarProps<T extends React.ElementType = "nav"> = BaseProps<
  T,
  {
    color?: "default" | SharedProps["color"];
  } & Omit<SharedProps, "size" | "color">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/navbar) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/navbar#navbar-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/navbar#navbar-theme)
 */
function NavbarRoot<T extends React.ElementType = "nav">(
  { as, color, variant, className, children, ...props }: NavbarProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("nav" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.navbar || navbarTheme;
  const defaultProps = theme.defaultProps;

  color ??= (defaultProps?.color as NavbarProps["color"]) ?? "default";
  variant ??= (defaultProps?.variant as NavbarProps["variant"]) ?? "solid";

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

NavbarRoot.displayName = "MaterialTailwind.Navbar";

export const Navbar = React.forwardRef(NavbarRoot) as <
  T extends React.ElementType = "nav",
>(
  props: NavbarProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default Navbar;
