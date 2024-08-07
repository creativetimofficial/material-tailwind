"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { textareaTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type TextareaProps<T extends React.ElementType = "textarea"> = Omit<
  BaseProps<
    T,
    {
      resize?: boolean;
      isError?: boolean;
      isSuccess?: boolean;
    } & Omit<SharedProps, "variant">
  >,
  "as"
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/textarea) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/textarea#textarea-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/textarea#textarea-theme)
 */
function TextareaRoot<T extends React.ElementType = "textarea">(
  {
    color,
    size,
    resize,
    isError,
    isSuccess,
    className,
    ...props
  }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>,
) {
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
      {...props}
      ref={ref}
      className={styles}
      data-error={isError}
      data-success={isSuccess}
    />
  );
}

TextareaRoot.displayName = "MaterialTailwind.Textarea";

export const Textarea = React.forwardRef(TextareaRoot) as <
  T extends React.ElementType = "textarea",
>(
  props: TextareaProps<T> & { ref?: React.Ref<HTMLTextAreaElement> },
) => JSX.Element;

export default Textarea;
