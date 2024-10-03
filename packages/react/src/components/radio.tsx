"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { radioTheme, radioItemTheme, radioIndicatorTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

// radio context
export interface RadioContextProps {
  globalValue?: string;
  color?: SharedProps["color"];
  setGlobalValue?: (e: string) => void;
}

export const RadioContext = React.createContext<RadioContextProps>({
  globalValue: "",
  color: "primary",
  setGlobalValue: () => {},
});

// radio root
export type RadioProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value?: string;
    defaultValue?: string;
    color?: SharedProps["color"];
    onValueChange?: (e: string) => void;
    orientation?: "horizontal" | "vertical";
  }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/radio) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/radio#radio-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/radio#radio-theme)
 */
function RadioRootBase<T extends React.ElementType = "div">(
  {
    as,
    value,
    defaultValue,
    onValueChange,
    color,
    orientation,
    className,
    children,
    ...props
  }: RadioProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.radio ?? radioTheme;
  const defaultProps = theme?.defaultProps;

  const [innerValue, setInnerValue] = React.useState(defaultValue || "");

  value ??= innerValue;
  onValueChange ??= setInnerValue;
  color ??= (defaultProps?.color as RadioProps["color"]) ?? "primary";
  orientation ??=
    (defaultProps?.orientation as RadioProps["orientation"]) ?? "vertical";

  const styles = twMerge(theme.baseStyle, className);

  const contextValue = React.useMemo(
    () => ({
      color,
      globalValue: value,
      setGlobalValue: onValueChange,
    }),
    [color, value, onValueChange],
  );

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      data-value={value}
      data-orientation={orientation}
    >
      <RadioContext.Provider value={contextValue}>
        {children}
      </RadioContext.Provider>
    </Component>
  );
}

RadioRootBase.displayName = "MaterialTailwind.Radio";

export const RadioRoot = React.forwardRef(RadioRootBase) as <
  T extends React.ElementType = "div",
>(
  props: RadioProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// radio item
export type RadioItemProps<T extends React.ElementType = "input"> = Omit<
  BaseProps<T>,
  "as"
>;

function RadioItemRoot<T extends React.ElementType = "input">(
  { disabled, className, children, value, ...props }: RadioItemProps,
  ref: React.Ref<HTMLLabelElement>,
) {
  const contextTheme = useTheme();
  const theme = contextTheme?.radioItem ?? radioItemTheme;
  const { globalValue, setGlobalValue, color } = React.useContext(RadioContext);

  const innerId = React.useId();
  const innerValue = React.useId();
  const mainValue = value || innerValue;
  const isChecked = globalValue === mainValue;

  const styles = twMerge(theme.baseStyle, theme.color[color!], className);

  return (
    <label
      ref={ref}
      className={styles}
      data-value={mainValue}
      data-checked={isChecked}
      aria-disabled={disabled}
      htmlFor={props?.id || innerId}
    >
      <input
        {...props}
        id={props?.id || innerId}
        type="radio"
        checked={isChecked}
        value={mainValue}
        onChange={(e) => {
          props?.onChange?.(e);
          setGlobalValue?.(mainValue);
        }}
        style={{ display: "none" }}
      />
      {children}
    </label>
  );
}

RadioItemRoot.displayName = "MaterialTailwind.RadioItem";

export const RadioItem = React.forwardRef(RadioItemRoot) as <
  T extends React.ElementType = "input",
>(
  props: RadioItemProps<T> & { ref?: React.Ref<HTMLLabelElement> },
) => JSX.Element;

// radio indicator
export type RadioIndicatorProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function RadioIndicatorRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: RadioIndicatorProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.radioIndicator ?? radioIndicatorTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} className={styles} ref={ref}>
      {children || (
        <svg
          width="10px"
          height="10px"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Component>
  );
}

RadioIndicatorRoot.displayName = "MaterialTailwind.RadioIndicator";

export const RadioIndicator = React.forwardRef(RadioIndicatorRoot) as <
  T extends React.ElementType = "span",
>(
  props: RadioIndicatorProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Radio = Object.assign(RadioRoot, {
  Item: RadioItem,
  Indicator: RadioIndicator,
});

export default Radio;
