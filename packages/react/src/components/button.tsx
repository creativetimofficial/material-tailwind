import React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @context
import { useTheme } from "src/context";

// @theme
import { buttonTheme } from "src/theme";

// @types
import type { BaseComponent } from "@types";

export interface ButtonProps extends BaseComponent<"button"> {
  ripple?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button#button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button#button-theme)
 *
 * @example
 * ```tsx
 * import { Button } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Button>Button</Button>;
 * }
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color,
      variant,
      size,
      ripple,
      rounded,
      fullWidth,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const contextTheme = useTheme();
    const theme = contextTheme?.button ?? buttonTheme;
    const defaultProps = contextTheme?.button?.defaultProps;

    size ??= (defaultProps?.size as ButtonProps["size"]) ?? "md";
    ripple ??= (defaultProps?.ripple as ButtonProps["ripple"]) ?? true;
    color ??= (defaultProps?.color as ButtonProps["color"]) ?? "primary";
    variant ??= (defaultProps?.variant as ButtonProps["variant"]) ?? "solid";
    fullWidth ??=
      (defaultProps?.fullWidth as ButtonProps["fullWidth"]) ?? false;

    const rippleEffect = ripple !== undefined && new Ripple();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const onClick = rest?.onClick;
      const isDarkRipple =
        variant === "ghost" || color === "secondary" || color === "warning";

      if (ripple) {
        rippleEffect.create(e, isDarkRipple ? "dark" : "light");
      }

      return typeof onClick === "function" && onClick(e);
    };

    const styles = twMerge(
      theme.baseStyle,
      theme["size"][size],
      theme["variant"][variant][color],
      rounded && theme["rounded"],
      fullWidth && theme["fullWidth"],
      className,
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
