"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { radioTheme, radioItemTheme, radioIndicatorTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

// radio context
export interface RadioContextProps {
  globalValue?: string;
  color?: BaseComponent<any>["color"];
  setGlobalValue?: (e: string) => void;
}

export const RadioContext = React.createContext<RadioContextProps>({
  globalValue: "",
  color: "primary",
  setGlobalValue: () => {},
});

// radio root
export interface RadioProps extends Props<"div" | any> {
  as?: React.ElementType;
  value?: string;
  defaultValue?: string;
  onChange?: (e: string) => void;
  color?: BaseComponent<any>["color"];
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: React.ReactNode;
}

export const RadioRoot = React.forwardRef<
  HTMLDivElement | HTMLElement,
  RadioProps
>(
  (
    {
      as,
      value,
      defaultValue,
      onChange,
      color,
      orientation,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.radio ?? radioTheme;
    const defaultProps = theme?.defaultProps;

    const [innerValue, setInnerValue] = React.useState(defaultValue || "");

    value ??= innerValue;
    onChange ??= setInnerValue;
    color ??= (defaultProps?.color as RadioProps["color"]) ?? "primary";
    orientation ??=
      (defaultProps?.orientation as RadioProps["orientation"]) ?? "vertical";

    const styles = twMerge(theme.baseStyle, className);

    const contextValue = React.useMemo(
      () => ({
        color,
        globalValue: value,
        setGlobalValue: onChange,
      }),
      [color, value, onChange],
    );

    return (
      <Element
        {...props}
        ref={ref}
        className={styles}
        data-value={value}
        data-orientation={orientation}
      >
        <RadioContext.Provider value={contextValue}>
          {children}
        </RadioContext.Provider>
      </Element>
    );
  },
);

RadioRoot.displayName = "MaterialTailwind.Radio";

// radio item
export interface RadioItemProps extends Props<"input"> {
  disabled?: boolean;
  className?: string;
  value?: string;
  children: React.ReactNode;
}

export const RadioItem = React.forwardRef<HTMLLabelElement, RadioItemProps>(
  ({ disabled, className, children, value, ...props }, ref) => {
    const contextTheme = useTheme();
    const theme = contextTheme?.radioItem ?? radioItemTheme;
    const { globalValue, setGlobalValue, color } =
      React.useContext(RadioContext);

    const innerId = React.useId();
    const innerValue = React.useId();
    const mainValue = value || innerValue;
    const isChecked = globalValue === mainValue;

    const styles = twMerge(theme.baseStyle, theme.color[color], className);

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
  },
);

// radio indicator
export interface RadioIndicatorProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const RadioIndicator = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  RadioIndicatorProps
>(({ as, className, children, ...props }, ref) => {
  const Element = as || "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.radioIndicator ?? radioIndicatorTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...props} className={styles} ref={ref}>
      {children || (
        <svg
          width="9px"
          height="9px"
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
    </Element>
  );
});

RadioIndicator.displayName = "MaterialTailwind.RadioIndicator";

export const Radio = Object.assign(RadioRoot, {
  Item: RadioItem,
  Indicator: RadioIndicator,
});

export default Radio;
