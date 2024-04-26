"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @context
import { useTheme } from "@context";

// @theme
import { buttonGroupTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";
import type { ButtonProps } from "@components";

export interface ButtonGroupProps extends BaseComponent<HTMLElement> {
  as?: React.ElementType;
  ripple?: boolean;
  isPill?: boolean;
  isFullWidth?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button-group) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button-group#button-group-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button-group#button-group-theme)
 *
 * @example
 * ```tsx
 import { ButtonGroup, Button } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <ButtonGroup>
      <Button>React</Button>
      <Button>Vue</Button>
      <Button>Svelte</Button>
    </ButtonGroup>
  );
}
 * ```
 */
export const ButtonGroup = React.forwardRef<
  HTMLDivElement | HTMLElement,
  ButtonGroupProps
>(
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
      orientation,
      children,
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.buttonGroup ?? buttonGroupTheme;
    const defaultProps = theme?.defaultProps;

    size ??= (defaultProps?.size as ButtonGroupProps["size"]) ?? "md";
    ripple ??= (defaultProps?.ripple as ButtonGroupProps["ripple"]) ?? true;
    color ??= (defaultProps?.color as ButtonGroupProps["color"]) ?? "primary";
    variant ??=
      (defaultProps?.variant as ButtonGroupProps["variant"]) ?? "solid";
    orientation ??=
      (defaultProps?.orientation as ButtonGroupProps["orientation"]) ??
      "horizontal";
    isFullWidth ??=
      (defaultProps?.isFullWidth as ButtonGroupProps["isFullWidth"]) ?? false;
    isPill ??= (defaultProps?.isPill as ButtonGroupProps["isPill"]) ?? false;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element
        {...rest}
        ref={ref}
        className={styles}
        data-variant={variant}
        data-orientation={orientation}
        data-shape={isPill ? "pill" : "default"}
        data-width={isFullWidth ? "full" : "default"}
      >
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              variant,
              size,
              color,
              ripple,
              isPill,
              isFullWidth,
              "data-variant": variant,
              "data-orientation": orientation,
              ...child.props,
            } as ButtonProps),
        )}
      </Element>
    );
  },
);

ButtonGroup.displayName = "MaterialTailwind.ButtonGroup";

export default ButtonGroup;
