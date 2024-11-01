"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @context
import { useTheme } from "@context";

// @theme
import { iconButtonTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type IconButtonProps<T extends React.ElementType = "button"> = BaseProps<
  T,
  {
    ripple?: boolean;
    isCircular?: boolean;
  } & Omit<SharedProps, "size"> & {
      size?: SharedProps["size"] | "xs" | "xl";
    }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/icon-button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/icon-button#icon-button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/icon-button#icon-button-theme)
 */
function IconButtonRoot<T extends React.ElementType = "button">(
  {
    as,
    color,
    variant,
    size,
    ripple,
    isCircular,
    className,
    children,
    ...props
  }: IconButtonProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("button" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.iconButton ?? iconButtonTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as IconButtonProps["size"]) ?? "md";
  ripple ??= (defaultProps?.ripple as IconButtonProps["ripple"]) ?? true;
  color ??= (defaultProps?.color as IconButtonProps["color"]) ?? "primary";
  variant ??= (defaultProps?.variant as IconButtonProps["variant"]) ?? "solid";
  isCircular ??=
    (defaultProps?.isCircular as IconButtonProps["isCircular"]) ?? false;

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
      data-shape={isCircular ? "circular" : "default"}
    >
      {children}
    </Component>
  );
}

IconButtonRoot.displayName = "MaterialTailwind.IconButton";

export const IconButton = React.forwardRef(IconButtonRoot) as <
  T extends React.ElementType = "button",
>(
  props: IconButtonProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default IconButton;
