"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @context
import { useTheme } from "@context";

// @theme
import { buttonGroupTheme } from "@theme";

// @types
import type { ButtonProps } from "@components";
import type { BaseProps, SharedProps } from "@types";

export type ButtonGroupProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    ripple?: boolean;
    isPill?: boolean;
    isFullWidth?: boolean;
    orientation?: "horizontal" | "vertical";
  } & Omit<SharedProps, "size"> & {
      size?: SharedProps["size"] | "xs" | "xl";
    }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button-group) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button-group#button-group-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button-group#button-group-theme)
 */
function ButtonGroupRoot<T extends React.ElementType = "div">(
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
    ...props
  }: ButtonGroupProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.buttonGroup ?? buttonGroupTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as ButtonGroupProps["size"]) ?? "md";
  ripple ??= (defaultProps?.ripple as ButtonGroupProps["ripple"]) ?? true;
  color ??= (defaultProps?.color as ButtonGroupProps["color"]) ?? "primary";
  variant ??= (defaultProps?.variant as ButtonGroupProps["variant"]) ?? "solid";
  orientation ??=
    (defaultProps?.orientation as ButtonGroupProps["orientation"]) ??
    "horizontal";
  isFullWidth ??=
    (defaultProps?.isFullWidth as ButtonGroupProps["isFullWidth"]) ?? false;
  isPill ??= (defaultProps?.isPill as ButtonGroupProps["isPill"]) ?? false;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
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
    </Component>
  );
}

ButtonGroupRoot.displayName = "MaterialTailwind.ButtonGroup";

export const ButtonGroup = React.forwardRef(ButtonGroupRoot) as <
  T extends React.ElementType = "div",
>(
  props: ButtonGroupProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default ButtonGroup;
