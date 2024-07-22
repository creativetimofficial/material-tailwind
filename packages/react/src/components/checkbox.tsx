"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { checkboxTheme, checkboxIndicatorTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

// checkbox context
export interface CheckboxContextProps {
  disabled?: boolean;
  checked?: boolean;
  color?: SharedProps["color"];
}

export const CheckboxContext = React.createContext<CheckboxContextProps>({
  color: "primary",
  disabled: false,
  checked: false,
});

// checkbox root
export type CheckboxProps<T extends React.ElementType = "input"> = BaseProps<
  T,
  {
    disabled?: boolean;
  } & Omit<SharedProps, "variant" | "size">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/checkbox) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/checkbox#checkbox-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/checkbox#checkbox-theme)
 */
function CheckboxRootBase<T extends React.ElementType = "input">(
  { color, disabled, className, children, ...props }: CheckboxProps,
  ref: React.Ref<HTMLLabelElement>,
) {
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
        checked={props?.defaultChecked ? undefined : props?.checked || checked}
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
}

CheckboxRootBase.displayName = "MaterialTailwind.Checkbox";

export const CheckboxRoot = React.forwardRef(CheckboxRootBase) as <
  T extends React.ElementType = "input",
>(
  props: CheckboxProps<T> & { ref?: React.Ref<HTMLLabelElement> },
) => JSX.Element;

// checkbox indicator
export type CheckboxIndicatorProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function CheckboxIndicatorRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: CheckboxIndicatorProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("span" as any);
  const contextTheme = useTheme();
  const { checked } = React.useContext(CheckboxContext);
  const theme = contextTheme?.checkboxIndicator ?? checkboxIndicatorTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} data-checked={checked} className={styles} ref={ref}>
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
    </Component>
  );
}

CheckboxIndicatorRoot.displayName = "MaterialTailwind.CheckboxIndicator";

export const CheckboxIndicator = React.forwardRef(CheckboxIndicatorRoot) as <
  T extends React.ElementType = "span",
>(
  props: CheckboxIndicatorProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Checkbox = Object.assign(CheckboxRoot, {
  Indicator: CheckboxIndicator,
});

export default Checkbox;
