"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { inputTheme, inputIconTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

// input context
export interface InputContextProps extends Omit<SharedProps, "variant"> {
  iconPlacement?: "start" | "end" | string;
  isIconDefined?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  disabled?: boolean;
  isPill?: boolean;
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
  isPill: false,
  disabled: false,
  setIconPlacement: () => null,
  setIsIconDefined: () => null,
});

// input root
export type InputProps<T extends React.ElementType = "input"> = BaseProps<
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
function InputRootBase<T extends React.ElementType = "input">(
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
    type = "text",
    ...props
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
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
    theme.color[color],
    className,
    "peer",
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
      isPill,
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
      isPill,
      setIconPlacement,
      setIsIconDefined,
    ],
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
    <Component className="relative w-full">
      <InputContext.Provider value={contextValue}>
        <input
          {...props}
          ref={ref}
          type={inputType}
          className={styles}
          disabled={disabled}
          data-error={isError}
          data-success={isSuccess}
          data-shape={isPill ? "pill" : "default"}
          data-icon-placement={isIconDefined ? iconPlacement : ""}
        />
        {children}
      </InputContext.Provider>
    </Component>
  );
}

InputRootBase.displayName = "MaterialTailwind.Input";

export const InputRoot = React.forwardRef(InputRootBase) as <
  T extends React.ElementType = "input",
>(
  props: InputProps<T> & { ref?: React.Ref<Element> },
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
  Icon: InputIcon,
});

export default Input;
