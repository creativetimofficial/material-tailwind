import React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { switchTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

export interface SwitchProps extends Props<"input"> {
  color?: BaseComponent<"input">["color"];
  className?: string;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/switch) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/switch#switch-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/switch#switch-theme)
 *
 * @example
 * ```tsx
 * import { Switch } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Switch />;
 * }
 * ```
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ color, className, ...rest }, ref) => {
    const innerID = React.useId();
    const contextTheme = useTheme();
    const theme = contextTheme?.switch ?? switchTheme;
    const defaultProps = contextTheme?.switch?.defaultProps;

    color ??= (defaultProps?.color as SwitchProps["color"]) ?? "primary";

    const styles = twMerge(
      theme.baseStyle,
      theme.trackStyle,
      theme.circleStyle,
      theme.color[color],
      className,
    );

    return (
      <input
        {...rest}
        ref={ref}
        type="checkbox"
        className={styles}
        id={rest?.id || innerID}
      />
    );
  },
);

Switch.displayName = "MaterialTailwind.Switch";

export default Switch;
