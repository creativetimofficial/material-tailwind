"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { switchTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type SwitchProps<T extends React.ElementType = "input"> = Omit<
  BaseProps<T, Omit<SharedProps, "size" | "variant">>,
  "as"
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/switch) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/switch#switch-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/switch#switch-theme)
 */
function SwitchRoot<T extends React.ElementType = "input">(
  { color, className, ...props }: SwitchProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const innerID = React.useId();
  const contextTheme = useTheme();
  const theme = contextTheme?.switch ?? switchTheme;
  const defaultProps = theme?.defaultProps;

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
      {...props}
      ref={ref}
      type="checkbox"
      className={styles}
      id={props?.id || innerID}
    />
  );
}

SwitchRoot.displayName = "MaterialTailwind.Switch";

export const Switch = React.forwardRef(SwitchRoot) as <
  T extends React.ElementType = "input",
>(
  props: SwitchProps<T> & { ref?: React.Ref<HTMLInputElement> },
) => JSX.Element;

export default Switch;
