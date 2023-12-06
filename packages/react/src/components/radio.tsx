import React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { radioTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

export interface RadioProps extends Props<"input"> {
  as?: React.ElementType;
  color?: BaseComponent<"input">["color"];
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  iconRef?: React.RefObject<HTMLSpanElement>;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/radio) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/radio#radio-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/radio#radio-theme)
 *
 * @example
 * ```tsx
 * import { Radio, Typography } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return (
 *    <div className="flex gap-10">
 *      <div className="flex items-center gap-2">
 *        <Radio id="html" name="type" />
 *        <Typography as="label" htmlFor="html" className="text-gray-500 dark:text-gray-400">
 *          HTML
 *        </Typography>
 *      </div>
 *      <div className="flex items-center gap-2">
 *        <Radio id="react" name="type" />
 *        <Typography as="label" htmlFor="react" className="text-gray-500 dark:text-gray-400">
 *          React
 *        </Typography>
 *      </div>
 *    </div>
 *  )
 * }
 * ```
 */
export const Radio = React.forwardRef<HTMLDivElement | HTMLElement, RadioProps>(
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
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "div";
    const innerID = React.useId();
    const contextTheme = useTheme();
    const theme = contextTheme?.radio ?? radioTheme;
    const defaultProps = contextTheme?.radio?.defaultProps;

    icon ??= (defaultProps?.icon as RadioProps["icon"]) ?? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-2 w-2"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <circle data-name="ellipse" cx="8" cy="8" r="8" />
      </svg>
    );
    color ??= (defaultProps?.color as RadioProps["color"]) ?? "primary";

    const baseStyles = twMerge(theme.baseStyle, className);

    const inputStyles = twMerge(
      theme.inputStyle,
      theme.inputColor[color],
      inputClassName,
    );

    const iconStyles = twMerge(
      theme.iconStyle,
      theme.iconColor[color],
      iconClassName,
    );

    return (
      <Element ref={ref} className={baseStyles}>
        <input
          {...rest}
          ref={inputRef}
          type="radio"
          className={inputStyles}
          id={rest?.id || innerID}
        />
        <span ref={iconRef} className={iconStyles}>
          {icon}
        </span>
      </Element>
    );
  },
);

Radio.displayName = "MaterialTailwind.Radio";

export default Radio;
