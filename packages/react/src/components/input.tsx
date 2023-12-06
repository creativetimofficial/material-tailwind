import React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";
import { useElementSize } from "usehooks-ts";

// @theme
import { inputTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

export interface InputProps extends Omit<BaseComponent<"input">, "variant"> {
  as?: React.ElementType;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  inputClassName?: string;
  iconClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/input) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/input#input-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/input#input-theme)
 *
 * @example
 * ```tsx
 * import { Input } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Input />;
 * }
 * ```
 */
export const Input = React.forwardRef<HTMLDivElement | HTMLElement, InputProps>(
  (
    {
      as,
      color,
      size,
      startIcon,
      endIcon,
      rounded,
      fullWidth,
      isError,
      isSuccess,
      className,
      inputClassName,
      iconClassName,
      inputRef,
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.input ?? inputTheme;
    const defaultProps = contextTheme?.input?.defaultProps;

    const [iconRef, { width }] = useElementSize();

    size ??= (defaultProps?.size as InputProps["size"]) ?? "md";
    color ??= (defaultProps?.color as InputProps["color"]) ?? "primary";
    rounded ??= (defaultProps?.rounded as InputProps["rounded"]) ?? false;
    fullWidth ??= (defaultProps?.fullWidth as InputProps["fullWidth"]) ?? false;
    isError ??= (defaultProps?.isError as InputProps["isError"]) ?? false;
    isSuccess ??= (defaultProps?.isSuccess as InputProps["isSuccess"]) ?? false;

    const baseStyles = twMerge(
      theme.baseStyle,
      fullWidth && theme["fullWidth"],
      className,
    );

    const inputStyles = twMerge(
      theme.inputStyle,
      theme.color[color],
      theme.size[size],
      rounded && theme["rounded"],
      fullWidth && theme["fullWidth"],
      isError && theme["isError"],
      isSuccess && theme["isSuccess"],
      inputClassName,
    );

    const iconStyles = twMerge(
      theme.iconStyle,
      startIcon && theme["startIcon"],
      endIcon && theme["endIcon"],
      iconClassName,
    );

    return (
      <Element ref={ref} className={baseStyles}>
        <input
          {...rest}
          ref={inputRef}
          className={inputStyles}
          style={{
            paddingLeft: startIcon ? `${width + 12}px` : undefined,
            paddingRight: endIcon ? `${width + 12}px` : undefined,
          }}
        />
        <span ref={iconRef} className={iconStyles}>
          {startIcon || endIcon}
        </span>
      </Element>
    );
  },
);

Input.displayName = "MaterialTailwind.Input";

export default Input;
