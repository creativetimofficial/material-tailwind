import React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @context
import { useTheme } from "src/context";

// @theme
import { iconButtonTheme } from "src/theme";

// @types
import type { BaseComponent } from "@types";

export interface IconButtonProps extends BaseComponent<"button"> {
  ripple?: boolean;
  rounded?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/icon-button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/icon-button#icon-button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/icon-button#icon-button-theme)
 *
 * @example
 * ```tsx
 * import { IconButton } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <IconButton>Button</IconButton>;
 * }
 * ```
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { color, variant, size, ripple, rounded, className, children, ...rest },
    ref,
  ) => {
    const contextTheme = useTheme();
    const theme = contextTheme?.iconButton ?? iconButtonTheme;
    const defaultProps = contextTheme?.iconButton?.defaultProps;

    size ??= (defaultProps?.size as IconButtonProps["size"]) ?? "md";
    ripple ??= (defaultProps?.ripple as IconButtonProps["ripple"]) ?? true;
    color ??= (defaultProps?.color as IconButtonProps["color"]) ?? "primary";
    variant ??=
      (defaultProps?.variant as IconButtonProps["variant"]) ?? "solid";

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
      className,
    );

    return (
      <button ref={ref} className={styles} onClick={handleClick}>
        {children}
      </button>
    );
  },
);

IconButton.displayName = "MaterialTailwind.IconButton";

export default IconButton;
