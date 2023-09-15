import React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @context
import { useTheme } from "@context";

// @theme
import { buttonGroupTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";
import type { ButtonProps } from "@components";

export interface ButtonGroupProps extends BaseComponent<"div"> {
  ripple?: boolean;
  rounded?: boolean;
  fullWidth?: boolean;
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
 * import { ButtonGroup } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return (
 *    <ButtonGroup>
 *      <Button>Button</Button>
 *      <Button>Button</Button>
 *      <Button>Button</Button>
 *    </ButtonGroup>
 *  );
 * }
 * ```
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      color,
      variant,
      size,
      ripple,
      rounded,
      fullWidth,
      className,
      orientation,
      children,
      ...rest
    },
    ref,
  ) => {
    const contextTheme = useTheme();
    const theme = contextTheme?.buttonGroup ?? buttonGroupTheme;
    const defaultProps = contextTheme?.buttonGroup?.defaultProps;

    size ??= (defaultProps?.size as ButtonGroupProps["size"]) ?? "md";
    ripple ??= (defaultProps?.ripple as ButtonGroupProps["ripple"]) ?? true;
    color ??= (defaultProps?.color as ButtonGroupProps["color"]) ?? "primary";
    variant ??=
      (defaultProps?.variant as ButtonGroupProps["variant"]) ?? "solid";
    orientation ??=
      (defaultProps?.orientation as ButtonGroupProps["orientation"]) ??
      "horizontal";
    fullWidth ??=
      (defaultProps?.fullWidth as ButtonGroupProps["fullWidth"]) ?? false;

    const isGhost = variant === "ghost";
    const isVertical = orientation === "vertical";
    const isHorizontal = orientation === "horizontal";

    const styles = twMerge(
      theme.baseStyle,
      isVertical && theme["vertical"],
      isHorizontal && theme["horizontal"],
      isVertical && !isGhost && theme["verticalAppearance"],
      isHorizontal && !isGhost && theme["horizontalAppearance"],
      fullWidth && theme["fullWidth"],
      className,
    );

    return (
      <div {...rest} ref={ref} className={styles}>
        {React.Children.map(
          children,
          (child) =>
            React.isValidElement(child) &&
            React.cloneElement(child, {
              variant,
              size,
              color,
              ripple,
              rounded,
              fullWidth,
              ...child.props,
            } as ButtonProps),
        )}
      </div>
    );
  },
);

ButtonGroup.displayName = "MaterialTailwind.ButtonGroup";

export default ButtonGroup;
