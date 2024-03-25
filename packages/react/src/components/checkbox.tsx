"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { checkboxTheme, checkboxIndicatorTheme } from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

// checkbox context
export interface CheckboxContextProps {
  disabled?: boolean;
  checked?: boolean;
  color?: BaseComponent<any>["color"];
}

export const CheckboxContext = React.createContext<CheckboxContextProps>({
  color: "primary",
  disabled: false,
  checked: false,
});

// checkbox root
export interface CheckboxProps extends Props<"input"> {
  color?: BaseComponent<any>["color"];
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/checkbox) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/checkbox#checkbox-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/checkbox#checkbox-theme)
 *
 * @example
 * ```tsx
import { Checkbox } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Checkbox>
      <Checkbox.Indicator />
    </Checkbox>
  );
}
 * ```
 */

export const CheckboxRoot = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ color, disabled, className, children, ...props }, ref) => {
    const contextTheme = useTheme();
    const theme = contextTheme?.checkbox ?? checkboxTheme;
    const defaultProps = theme?.defaultProps;

    const innerId = React.useId();
    const [checked, setChecked] = React.useState(props?.checked || false);

    color ??= (defaultProps?.color as CheckboxProps["color"]) ?? "primary";

    const styles = twMerge(theme.baseStyle, theme.color[color], className);

    React.useEffect(() => {
      if (props?.defaultChecked) {
        setChecked(props?.defaultChecked);
      }
    }, []);

    const contextValue = React.useMemo(
      () => ({
        color,
        checked,
        disabled,
      }),
      [color, checked, disabled],
    );

    return (
      <label
        ref={ref}
        className={styles}
        data-checked={checked}
        aria-disabled={disabled}
        htmlFor={props?.id || innerId}
      >
        <input
          {...props}
          id={props?.id || innerId}
          type="checkbox"
          checked={
            props?.defaultChecked ? undefined : props?.checked || checked
          }
          onChange={(e) => {
            props?.onChange?.(e);
            setChecked((cur) => !cur);
          }}
          style={{ display: "none" }}
        />
        <CheckboxContext.Provider value={contextValue}>
          {children}
        </CheckboxContext.Provider>
      </label>
    );
  },
);

CheckboxRoot.displayName = "MaterialTailwind.Checkbox";

// checkbox indicator
export interface CheckboxIndicatorProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

export const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  CheckboxIndicatorProps
>(({ as, className, children, ...props }, ref) => {
  const Element = as || "span";
  const contextTheme = useTheme();
  const { checked } = React.useContext(CheckboxContext);
  const theme = contextTheme?.checkboxIndicator ?? checkboxIndicatorTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...props} data-checked={checked} className={styles} ref={ref}>
      {children || (
        <svg
          fill="none"
          width="18px"
          height="18px"
          strokeWidth="2"
          color="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Element>
  );
});

CheckboxIndicator.displayName = "MaterialTailwind.CheckboxIndicator";

export const Checkbox = Object.assign(CheckboxRoot, {
  Indicator: CheckboxIndicator,
});

export default Checkbox;
