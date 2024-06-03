"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { textareaTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

export interface TextareaProps
  extends Omit<BaseComponent<HTMLTextAreaElement>, "variant"> {
  className?: string;
  resize?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/textarea) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/textarea#textarea-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/textarea#textarea-theme)
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ color, size, resize, isError, isSuccess, className, ...rest }, ref) => {
    const contextTheme = useTheme();
    const theme = contextTheme?.textarea ?? textareaTheme;
    const defaultProps = theme?.defaultProps;

    size ??= (defaultProps?.size as TextareaProps["size"]) ?? "md";
    color ??= (defaultProps?.color as TextareaProps["color"]) ?? "primary";
    resize ??= (defaultProps?.resize as TextareaProps["resize"]) ?? false;
    isError ??= (defaultProps?.isError as TextareaProps["isError"]) ?? false;
    isSuccess ??=
      (defaultProps?.isSuccess as TextareaProps["isSuccess"]) ?? false;

    const styles = twMerge(
      theme.baseStyle,
      theme.color[color],
      theme.size[size],
      resize && theme["resize"],
      isError && theme["isError"],
      isSuccess && theme["isSuccess"],
      className,
    );

    return (
      <textarea
        rows={8}
        {...rest}
        ref={ref}
        className={styles}
        data-error={isError}
        data-success={isSuccess}
      />
    );
  },
);

Textarea.displayName = "MaterialTailwind.Textarea";

export default Textarea;