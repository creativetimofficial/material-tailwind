"use client";

import * as React from "react";

// @context
import { useTheme } from "@context";

// @types
import type { BaseComponent } from "@types";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import { navbarTheme } from "@theme";

// card root
export interface NavbarProps
  extends Omit<BaseComponent<HTMLElement>, "size" | "color"> {
  as?: React.ElementType;
  className?: string;
  color?: "default" | BaseComponent<HTMLElement>["color"];
  children?: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/navbar) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/navbar#navbar-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/navbar#navbar-theme)
 */

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ as, color, variant, className, children, ...rest }, ref) => {
    const Element = as || "nav";
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
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

Navbar.displayName = "MaterialTailwind.Navbar";

export default Navbar;
