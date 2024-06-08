"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { collapseTheme } from "@theme";

// @types
import type { BaseProps } from "@types";

export type CollapseProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    open: boolean;
  }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/collapse) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/collapse#collapse-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/collapse#collapse-theme)
 */
function CollapseRoot<T extends React.ElementType = "div">(
  { as, open, className, children, ...props }: CollapseProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.collapse ?? collapseTheme;

  const styles = twMerge(theme.baseStyle, className);

  return open ? (
    <Component {...props} ref={ref} data-open={open} className={styles}>
      {children}
    </Component>
  ) : null;
}

CollapseRoot.displayName = "MaterialTailwind.Collapse";

export const Collapse = React.forwardRef(CollapseRoot) as <
  T extends React.ElementType = "div",
>(
  props: CollapseProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default Collapse;
