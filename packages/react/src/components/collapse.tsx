"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { collapseTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

export interface CollapseProps extends BaseComponent<HTMLElement> {
  as?: React.ElementType;
  open: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/collapse) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/collapse#collapse-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/collapse#collapse-theme)
 */
export const Collapse = React.forwardRef<HTMLElement, CollapseProps>(
  ({ as, open, className, children, ...rest }, ref) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.collapse ?? collapseTheme;

    const styles = twMerge(theme.baseStyle, className);

    return open ? (
      <Element {...rest} ref={ref} data-open={open} className={styles}>
        {children}
      </Element>
    ) : null;
  },
);

Collapse.displayName = "MaterialTailwind.Collapse";

export default Collapse;
