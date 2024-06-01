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
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "p" | "small";
  color?: BaseComponent<HTMLElement>["color"] | "inherit" | "default";
  className?: string;
  children: React.ReactNode;
}

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/typography) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/typography#props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/typography#theme) •
 * [Report an Issue](https://github.com/creativetimofficial/material-tailwind/issues/new)
 *
 * @prop as: `Element`, default to `p`
 * @prop type: `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `lead` | `p` | `small`, default to `p`
 * @prop color: `primary` | `secondary` | `info` | `success` | `warning` | `error` | `inherit` | `default`, default to `inherit`
 * @prop className: `string`
 * @prop children: `ReactNode`
 */
export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ as, color, type, className, children, ...rest }, ref) => {
    const Element = as ? as : type === "lead" ? "p" : type || "p";
    const contextTheme = useTheme();
    const theme = contextTheme?.typography ?? typographyTheme;
    const defaultProps = theme?.defaultProps;

    if (headings.includes(type!) && color === "inherit") {
      color = "default";
    } else {
      color ??= (defaultProps?.color as TypographyProps["color"]) ?? "inherit";
    }

    color ??= (defaultProps?.color as TypographyProps["color"]) ?? "inherit";
    type ??= (defaultProps?.type as TypographyProps["type"]) ?? "p";

    const styles = twMerge(
      theme.baseStyle,
      theme["type"][type],
      theme["color"][color!],
      className,
    );

    return (
      <Element {...rest} ref={ref as any} className={styles}>
        {children}
      </Element>
    );
  },
);

Typography.displayName = "MaterialTailwind.Typography";

export default Typography;
