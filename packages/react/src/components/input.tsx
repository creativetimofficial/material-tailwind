"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { inputTheme, inputFieldTheme, inputIconTheme } from "@theme";

// @types
import type { BaseComponent } from "@types";

// input context
export interface InputContextProps
  extends Omit<BaseComponent<HTMLElement>, "variant"> {
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
export interface InputProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as" | "size"> {
  as?: React.ElementType;
  size?: BaseComponent<HTMLElement>["size"];
  color?: BaseComponent<HTMLElement>["color"];
  isPill?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/input) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/input#input-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/input#input-theme)
 */
export const InputRoot = React.forwardRef<HTMLElement, InputProps>(
  (
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
    },
    ref,
  ) => {
    const Element = as ?? "div";
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
      <Element {...props} ref={ref} className={styles} aria-disabled={disabled}>
        <InputContext.Provider value={contextValue}>
          {children}
        </InputContext.Provider>
      </Element>
    );
  },
);

InputRoot.displayName = "MaterialTailwind.Input";

// input field
export interface InputFieldProps
  extends React.AllHTMLAttributes<HTMLInputElement> {
  type?:
    | "text"
    | "email"
    | "password"
    | "search"
    | "number"
    | "tel"
    | "url"
    | "hidden";
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type = "text", ...rest }, ref) => {
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
      rest?.className,
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
        {...rest}
        ref={ref}
        type={inputType}
        className={styles}
        disabled={disabled}
        data-error={isError}
        data-success={isSuccess}
        data-icon-placement={isIconDefined ? iconPlacement : ""}
      />
    );
  },
);

InputField.displayName = "MaterialTailwind.InputField";

// input icon
export interface InputIconProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  placement?: "start" | "end";
}

export const InputIcon = React.forwardRef<HTMLElement, InputIconProps>(
  ({ as, placement, ...props }, ref) => {
    const Element = as ?? "span";
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

    const styles = twMerge(
      theme.baseStyle,
      theme.size[size!],
      props?.className,
    );

    return (
      <Element
        {...props}
        ref={ref}
        className={styles}
        data-error={isError}
        data-success={isSuccess}
        aria-disabled={disabled}
        data-placement={iconPlacement}
      />
    );
  },
);

InputIcon.displayName = "MaterialTailwind.InputIcon";

export const Input = Object.assign(InputRoot, {
  Field: InputField,
  Icon: InputIcon,
});

export default Input;
