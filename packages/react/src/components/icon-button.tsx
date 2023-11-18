import React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @context
import { useTheme } from "@context";

// @theme
import { iconButtonTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

type BaseButtonProps = BaseComponent<"button"> & Props<any>;

export interface IconButtonProps extends BaseButtonProps {
  as?: React.ElementType;
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
 *  return (
 *    <IconButton>
 *      <svg
 *       xmlns="http://www.w3.org/2000/svg"
 *       viewBox="0 0 24 24"
 *       fill="currentColor"
 *       className="w-5 h-5"
 *     >
 *       <path
 *         fillRule="evenodd"
 *         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
 *         clipRule="evenodd"
 *       />
 *     </svg>
 *   </IconButton>;
 *  );
 * }
 * ```
 */
export const IconButton = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  IconButtonProps
>(
  (
    { as, color, variant, size, ripple, rounded, className, children, ...rest },
    ref,
  ) => {
    const Element = as ?? "button";
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
      <Element {...rest} ref={ref} className={styles} onClick={handleClick}>
        {children}
      </Element>
    );
  },
);

IconButton.displayName = "MaterialTailwind.IconButton";

export default IconButton;
