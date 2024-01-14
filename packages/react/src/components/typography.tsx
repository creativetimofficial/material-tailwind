"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { typographyTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

type BaseTypographyProps = Props<"p"> &
  Props<"h1"> &
  Props<"h2"> &
  Props<"h3"> &
  Props<"h4"> &
  Props<"h5"> &
  Props<"h6"> &
  Props<"p"> &
  Props<"small"> &
  Props<any>;

export interface TypographyProps extends BaseTypographyProps {
  as?: React.ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  color?: BaseComponent<any>["color"];
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/typography) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/typography#typography-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/typography#typography-theme)
 *
 * @example
 * ```tsx
 * import { Typography } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Typography>Material Tailwind</Typography>;
 * }
 * ```
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as, color, variant, className, children, ...rest }, ref) => {
    const Element = as ?? variant ?? "p";
    const contextTheme = useTheme();
    const theme = contextTheme?.typography ?? typographyTheme;
    const defaultProps = theme?.defaultProps;

    color ??= (defaultProps?.color as TypographyProps["color"]) ?? "inherit";
    variant ??= (defaultProps?.variant as TypographyProps["variant"]) ?? "p";

    const styles = twMerge(
      theme.baseStyle,
      theme["variant"][variant],
      theme["color"][color],
      className,
    );

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

Typography.displayName = "MaterialTailwind.Typography";

export default Typography;
