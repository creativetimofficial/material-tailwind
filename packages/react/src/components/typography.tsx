"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { typographyTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

export interface TypographyProps
  extends React.HtmlHTMLAttributes<HTMLElement | HTMLAnchorElement> {
  as?: React.ElementType;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  color?: BaseComponent<HTMLElement>["color"] | "inherit";
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
export const Typography = React.forwardRef<
  HTMLElement | HTMLAnchorElement,
  TypographyProps
>(({ as, color, type, className, children, ...rest }, ref) => {
  const Element = as ?? type ?? "p";
  const contextTheme = useTheme();
  const theme = contextTheme?.typography ?? typographyTheme;
  const defaultProps = theme?.defaultProps;

  color ??= (defaultProps?.color as TypographyProps["color"]) ?? "inherit";
  type ??= (defaultProps?.type as TypographyProps["type"]) ?? "p";

  const styles = twMerge(
    theme.baseStyle,
    theme["type"][type],
    theme["color"][color!],
    className,
  );

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

Typography.displayName = "MaterialTailwind.Typography";

export default Typography;
