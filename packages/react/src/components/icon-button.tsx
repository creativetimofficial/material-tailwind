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
import type { BaseComponent } from "@types";

export interface IconButtonProps extends BaseComponent<HTMLElement> {
  as?: React.ElementType;
  ripple?: boolean;
  isCircular?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/icon-button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/icon-button#icon-button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/icon-button#icon-button-theme)
 */
export const IconButton = React.forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      as,
      color,
      variant,
      size,
      ripple,
      isCircular,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "button";
    const contextTheme = useTheme();
    const theme = contextTheme?.iconButton ?? iconButtonTheme;
    const defaultProps = theme?.defaultProps;

    size ??= (defaultProps?.size as IconButtonProps["size"]) ?? "md";
    ripple ??= (defaultProps?.ripple as IconButtonProps["ripple"]) ?? true;
    color ??= (defaultProps?.color as IconButtonProps["color"]) ?? "primary";
    variant ??=
      (defaultProps?.variant as IconButtonProps["variant"]) ?? "solid";
    isCircular ??=
      (defaultProps?.isCircular as IconButtonProps["isCircular"]) ?? false;

    const rippleEffect = ripple !== undefined && new Ripple();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      const onClick = rest?.onClick;
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
      <Element
        {...rest}
        ref={ref}
        className={styles}
        onClick={handleClick}
        data-shape={isCircular ? "circular" : "default"}
      >
        {children}
      </Element>
    );
  },
);

IconButton.displayName = "MaterialTailwind.IconButton";

export default IconButton;
