import React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { checkboxTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

export interface CheckboxProps extends Props<"input"> {
  as?: React.ElementType;
  color?: BaseComponent<"input">["color"];
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  iconRef?: React.RefObject<HTMLSpanElement>;
  children?: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/checkbox) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/checkbox#checkbox-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/checkbox#checkbox-theme)
 *
 * @example
 * ```tsx
 * import { Checkbox } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Checkbox />;
 * }
 * ```
 */
export const Checkbox = React.forwardRef<
  HTMLDivElement | HTMLElement,
  CheckboxProps
>(
  (
    {
      as,
      color,
      icon,
      className,
      inputClassName,
      iconClassName,
      inputRef,
      iconRef,
      children,
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "div";
    const innerID = React.useId();
    const contextTheme = useTheme();
    const theme = contextTheme?.checkbox ?? checkboxTheme;
    const defaultProps = theme?.defaultProps;

    icon ??= (defaultProps?.icon as CheckboxProps["icon"]) ?? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
    color ??= (defaultProps?.color as CheckboxProps["color"]) ?? "primary";

    const baseStyles = twMerge(theme.baseStyle, className);

    const inputStyles = twMerge(
      theme.inputStyle,
      theme.inputColor[color],
      inputClassName,
      children && "hidden",
    );

    const iconStyles = twMerge(
      theme.iconStyle,
      theme.iconColor[color],
      iconClassName,
    );

    return (
      <Element ref={ref} className={baseStyles}>
        {children ? (
          <label htmlFor={rest?.id || innerID}>
            <input
              {...rest}
              ref={inputRef}
              type="checkbox"
              className={inputStyles}
              id={rest?.id || innerID}
            />
            {children}
          </label>
        ) : (
          <>
            <input
              {...rest}
              ref={inputRef}
              type="checkbox"
              className={inputStyles}
              id={rest?.id || innerID}
            />
            <span ref={iconRef} className={iconStyles}>
              {icon}
            </span>
          </>
        )}
      </Element>
    );
  },
);

Checkbox.displayName = "MaterialTailwind.Checkbox";

export default Checkbox;
