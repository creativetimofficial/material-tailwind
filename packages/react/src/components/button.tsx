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
import type { BaseComponent } from "@types";

export interface ButtonProps extends BaseComponent<HTMLElement> {
  as?: React.ElementType;
  ripple?: boolean;
  isPill?: boolean;
  isFullWidth?: boolean;
  className?: string;
  children: string;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button#button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button#button-theme)
 */
export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
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
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "button";
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
        data-shape={isPill ? "pill" : "default"}
        data-width={isFullWidth ? "full" : "default"}
      >
        {children}
      </Element>
    );
  },
);

Button.displayName = "MaterialTailwind.Button";

export default Button;