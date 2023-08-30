import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import buttonTheme from "../theme/button";
import Ripple from "material-ripple-effects";
import type { BaseComponent } from "@types";

export interface ButtonProps extends BaseComponent<"button"> {
  ripple?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { color, variant, size, ripple, rounded, fullWidth, children, ...rest },
    ref,
  ) => {
    size ??= "md";
    variant ??= "solid";
    color ??= "primary";
    ripple ??= true;

    const rippleEffect = ripple !== undefined && new Ripple();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const onClick = rest?.onClick;
      const isDarkRipple =
        variant === "ghost" ||
        variant === "outline" ||
        color === "secondary" ||
        color === "warning";

      if (ripple) {
        rippleEffect.create(e, isDarkRipple ? "dark" : "light");
      }

      return typeof onClick === "function" && onClick(e);
    };

    const styles = twMerge(
      buttonTheme.baseStyle,
      buttonTheme["size"][size],
      buttonTheme["variant"][variant][color],
      rounded && buttonTheme["rounded"],
      fullWidth && buttonTheme["fullWidth"],
    );

    return (
      <button ref={ref} className={styles} onClick={handleClick}>
        {children}
      </button>
    );
  },
);

Button.displayName = "MaterialTailwind.Button";

export default Button;
