"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { avatarTheme } from "@theme";

export interface AvatarProps
  extends React.ImgHTMLAttributes<HTMLImageElement | HTMLElement> {
  as?: React.ElementType;
  src: string;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  shape?: "circular" | "rounded" | "square";
  className?: string;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/avatar) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/avatar#avatar-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/avatar#avatar-theme)
 *
 * @example
 * ```tsx
import { Avatar } from "@material-tailwind/react";
 
export default function Example() {
  return <Avatar src="https://dub.sh/TdSBP0D" alt="profile-picture" />;
}
 * ```
 */
export const Avatar = React.forwardRef<
  HTMLImageElement | HTMLElement,
  AvatarProps
>(({ as, src, alt, shape, size, className, ...rest }, ref) => {
  const Element = as ?? "img";
  const contextTheme = useTheme();
  const theme = contextTheme?.avatar ?? avatarTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as AvatarProps["size"]) ?? "md";
  shape ??= (defaultProps?.shape as AvatarProps["shape"]) ?? "circular";

  const styles = twMerge(theme.baseStyle, theme["size"][size], className);

  return (
    <Element
      {...rest}
      ref={ref}
      src={src}
      alt={alt}
      className={styles}
      data-shape={shape}
    />
  );
});

Avatar.displayName = "MaterialTailwind.Avatar";

export default Avatar;
