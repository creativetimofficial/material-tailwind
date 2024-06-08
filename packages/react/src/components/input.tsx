"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { inputTheme, inputFieldTheme, inputIconTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

// input context
export interface InputContextProps extends Omit<SharedProps, "variant"> {
  iconPlacement?: "start" | "end" | string;
  isIconDefined?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  setIconPlacement: React.Dispatch<React.SetStateAction<string>>;
  setIsIconDefined: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InputContext = React.createContext<InputContextProps>({
  size: "md",
  color: "primary",
  isError: false,
  isSuccess: false,
  iconPlacement: "start",
  isIconDefined: false,
  disabled: false,
  setIconPlacement: () => null,
  setIsIconDefined: () => null,
});

// input root
export type InputProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    isPill?: boolean;
    isError?: boolean;
    isSuccess?: boolean;
    disabled?: boolean;
  } & Omit<SharedProps, "variant">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/input) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/input#input-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/input#input-theme)
 */
function InputRootBase<T extends React.ElementType = "div">(
  {
    as,
    color,
    size,
    isPill,
    isError,
    isSuccess,
    disabled,
    className,
    children,
    ...props
  }: InputProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.input ?? inputTheme;
  const defaultProps = theme?.defaultProps;
  const [isIconDefined, setIsIconDefined] = React.useState(false);
  const [iconPlacement, setIconPlacement] = React.useState("start");

  size ??= (defaultProps?.size as InputProps["size"]) ?? "md";
  color ??= (defaultProps?.color as InputProps["color"]) ?? "primary";
  isPill ??= (defaultProps?.isPill as InputProps["isPill"]) ?? false;
  isError ??= (defaultProps?.isError as InputProps["isError"]) ?? false;
  isSuccess ??= (defaultProps?.isSuccess as InputProps["isSuccess"]) ?? false;

  const styles = twMerge(
    theme.baseStyle,
    theme.size[size],
    isPill && theme["isPill"],
    className,
  );

  const contextValue = React.useMemo(
    () => ({
      size,
      color,
      isError,
      isSuccess,
      iconPlacement,
      isIconDefined,
      disabled,
      setIconPlacement,
      setIsIconDefined,
    }),
    [
      size,
      color,
      isError,
      isSuccess,
      iconPlacement,
      isIconDefined,
      disabled,
      setIconPlacement,
      setIsIconDefined,
    ],
  );

  return (
    <Component {...props} ref={ref} className={styles} aria-disabled={disabled}>
      <InputContext.Provider value={contextValue}>
        {children}
      </InputContext.Provider>
    </Component>
  );
}

InputRootBase.displayName = "MaterialTailwind.Input";

export const InputRoot = React.forwardRef(InputRootBase) as <
  T extends React.ElementType = "div",
>(
  props: InputProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// input field
export type InputFieldProps<T extends React.ElementType = "input"> = Omit<
  BaseProps<T>,
  "as"
>;

function InputFieldRoot<T extends React.ElementType = "input">(
  { type = "text", ...props }: InputFieldProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const contextTheme = useTheme();
  const {
    size,
    color,
    iconPlacement,
    isIconDefined,
    isError,
    isSuccess,
    disabled,
  } = React.useContext(InputContext);
  const theme = contextTheme?.inputField ?? inputFieldTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme.size[size!],
    theme.color[color!],
    props?.className,
    "peer",
  );

  const inputType = [
    "text",
    "email",
    "password",
    "search",
    "number",
    "tel",
    "url",
    "hidden",
  ].includes(type)
    ? type
    : "text";

  return (
    <input
      {...props}
      ref={ref}
      type={inputType}
      className={styles}
      disabled={disabled}
      data-error={isError}
      data-success={isSuccess}
      data-icon-placement={isIconDefined ? iconPlacement : ""}
    />
  );
}

InputFieldRoot.displayName = "MaterialTailwind.InputField";

export const InputField = React.forwardRef(InputFieldRoot) as <
  T extends React.ElementType = "input",
>(
  props: InputFieldProps<T> & { ref?: React.Ref<HTMLInputElement> },
) => JSX.Element;

// input icon
export type InputIconProps<T extends React.ElementType = "span"> = BaseProps<
  T,
  {
    placement?: "start" | "end";
  }
>;

function InputIconRoot<T extends React.ElementType = "span">(
  { as, placement, ...props }: InputIconProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const {
    size,
    iconPlacement,
    setIconPlacement,
    setIsIconDefined,
    isError,
    isSuccess,
    disabled,
  } = React.useContext(InputContext);
  const theme = contextTheme?.inputIcon ?? inputIconTheme;
  const defaultProps = theme?.defaultProps;

  placement ??=
    (defaultProps?.placement as InputIconProps["placement"]) ?? "start";

  React.useEffect(() => {
    setIsIconDefined(true);

    return () => {
      setIsIconDefined(false);
    };
  }, []);

  React.useEffect(() => {
    setIconPlacement(placement as string);

    return () => {
      setIconPlacement("start");
    };
  }, [placement]);

  const styles = twMerge(theme.baseStyle, theme.size[size!], props?.className);

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      data-error={isError}
      data-success={isSuccess}
      aria-disabled={disabled}
      data-placement={iconPlacement}
    />
  );
}

InputIconRoot.displayName = "MaterialTailwind.InputIcon";

export const InputIcon = React.forwardRef(InputIconRoot) as <
  T extends React.ElementType = "span",
>(
  props: InputIconProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Input = Object.assign(InputRoot, {
  Field: InputField,
  Icon: InputIcon,
});

export default Input;
