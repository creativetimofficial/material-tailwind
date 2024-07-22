"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { avatarTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type AvatarProps<T extends React.ElementType = "img"> = BaseProps<
  T,
  {
    shape?: "circular" | "rounded" | "square";
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/avatar) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/avatar#avatar-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/avatar#avatar-theme)
 */
function AvatarRoot<T extends React.ElementType = "img">(
  { as, src, alt, shape, size, className, ...props }: AvatarProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("img" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.avatar ?? avatarTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as AvatarProps["size"]) ?? "md";
  shape ??= (defaultProps?.shape as AvatarProps["shape"]) ?? "circular";

  const styles = twMerge(theme.baseStyle, theme["size"][size], className);

  return (
    <Component
      {...props}
      ref={ref}
      src={src}
      alt={alt}
      className={styles}
      data-shape={shape}
    />
  );
}

AvatarRoot.displayName = "MaterialTailwind.Avatar";

export const Avatar = React.forwardRef(AvatarRoot) as <
  T extends React.ElementType = "img",
>(
  props: AvatarProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default Avatar;
