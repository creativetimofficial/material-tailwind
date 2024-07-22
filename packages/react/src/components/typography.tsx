"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { typographyTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type TypographyProps<T extends React.ElementType = any> = BaseProps<
  T,
  {
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "p" | "small";
    color?: SharedProps["color"] | "inherit" | "default";
  }
>;

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
function TypographyRoot<T extends React.ElementType = any>(
  { as, color, type, className, children, ...props }: TypographyProps,
  ref: React.Ref<Element>,
) {
  const Component = as ? as : type === "lead" ? "p" : type || "p";
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
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

TypographyRoot.displayName = "MaterialTailwind.Typography";

export const Typography = React.forwardRef(TypographyRoot) as <
  T extends React.ElementType = any,
>(
  props: TypographyProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default Typography;
