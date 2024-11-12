"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @hooks
import { useTheme } from "@context";

// @theme
import { buttonTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type ButtonProps<T extends React.ElementType = "button"> = BaseProps<
  T,
  {
    ripple?: boolean;
    isPill?: boolean;
    isFullWidth?: boolean;
  } & Omit<SharedProps, "size"> & {
      size?: SharedProps["size"] | "xs" | "xl";
    }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button#button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button#button-theme)
 */
function ButtonRoot<T extends React.ElementType = "button">(
  {
    as,
    color,
    variant,
    size,
    ripple,
    isPill,
    isFullWidth,
    className,
    children,
    ...props
  }: ButtonProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);

  const contextTheme = useTheme();
  const theme = contextTheme?.button ?? buttonTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as ButtonProps["size"]) ?? "md";
  ripple ??= (defaultProps?.ripple as ButtonProps["ripple"]) ?? true;
  color ??= (defaultProps?.color as ButtonProps["color"]) ?? "primary";
  variant ??= (defaultProps?.variant as ButtonProps["variant"]) ?? "solid";
  isPill ??= (defaultProps?.isPill as ButtonProps["isPill"]) ?? false;
  isFullWidth ??=
    (defaultProps?.isFullWidth as ButtonProps["isFullWidth"]) ?? false;

  const rippleEffect = ripple !== undefined && new Ripple();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const onClick = props?.onClick;
    const isDarkRipple = variant === "ghost" || color === "secondary";

    if (ripple) {
      rippleEffect.create(e, isDarkRipple ? "dark" : "light");
    }

    return typeof onClick === "function" && onClick(e);
  };

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size],
    theme["variant"][variant][color],
    className,
  );

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      onClick={handleClick}
      data-shape={isPill ? "pill" : "default"}
      data-width={isFullWidth ? "full" : "default"}
    >
      {children}
    </Component>
  );
}

ButtonRoot.displayName = "MaterialTailwind.Button";

export const Button = React.forwardRef(ButtonRoot) as <
  T extends React.ElementType = "button",
>(
  props: ButtonProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default Button;
