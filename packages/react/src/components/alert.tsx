"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import {
  alertTheme,
  alertContentTheme,
  alertIconTheme,
  alertDismissTriggerTheme,
} from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

// alert context
export interface AlertContextProps extends Omit<SharedProps, "size"> {
  open?: boolean;
  isPill?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertContext = React.createContext<AlertContextProps>({
  color: "primary",
  variant: "solid",
  isPill: false,
  open: true,
  setOpen: () => {},
});

// alert root
export type AlertProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    open?: boolean;
    isPill?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
  } & Omit<SharedProps, "size">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/alert) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/alert#alert-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/alert#alert-theme)
 */
function AlertRootBase<T extends React.ElementType = "div">(
  {
    as,
    color,
    variant,
    isPill,
    className,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    children,
    ...props
  }: AlertProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.alert ?? alertTheme;
  const defaultProps = theme?.defaultProps;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(true);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  color ??= (defaultProps?.color as AlertProps["color"]) ?? "primary";
  variant ??= (defaultProps?.variant as AlertProps["variant"]) ?? "solid";
  isPill ??= (defaultProps?.isPill as AlertProps["isPill"]) ?? false;

  const styles = twMerge(
    theme.baseStyle,
    theme["variant"][variant][color],
    className,
  );

  const contextValue = React.useMemo(
    () => ({
      color,
      variant,
      isPill,
      open,
      setOpen,
    }),
    [color, variant, isPill, open, setOpen],
  );

  return open ? (
    <Component
      {...props}
      ref={ref}
      role="alert"
      data-open={open}
      data-pill={isPill}
      className={styles}
    >
      <AlertContext.Provider value={contextValue}>
        {children}
      </AlertContext.Provider>
    </Component>
  ) : null;
}

AlertRootBase.displayName = "MaterialTailwind.Alert";

const AlertRoot = React.forwardRef(AlertRootBase) as <
  T extends React.ElementType = "div",
>(
  props: AlertProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// alert content
export type AlertContentProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function AlertContentRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: AlertContentProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.alertContent ?? alertContentTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

AlertContentRoot.displayName = "MaterialTailwind.AlertContent";

export const AlertContent = React.forwardRef(AlertContentRoot) as <
  T extends React.ElementType = "div",
>(
  props: AlertContentProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// alert icon
export type AlertIconProps<T extends React.ElementType = "span"> = BaseProps<T>;

function AlertIconRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: AlertIconProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.alertIcon ?? alertIconTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

AlertIconRoot.displayName = "MaterialTailwind.AlertIcon";

export const AlertIcon = React.forwardRef(AlertIconRoot) as <
  T extends React.ElementType = "span",
>(
  props: AlertIconProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// alert close trigger
export type AlertDismissTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<
    T,
    {
      ripple?: boolean;
    }
  >;

function AlertDismissTriggerRoot<T extends React.ElementType = "button">(
  { as, ripple, className, children, ...props }: AlertDismissTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("button" as any);
  const contextTheme = useTheme();
  const { setOpen } = React.useContext(AlertContext);
  const theme = contextTheme?.alertDismissTrigger ?? alertDismissTriggerTheme;

  const styles = children ? className : twMerge(theme.baseStyle, className);

  function closeAlert(event: React.MouseEvent<HTMLButtonElement>) {
    setOpen?.(false);
    props.onClick?.(event);
  }

  return (
    <Component {...props} ref={ref} className={styles} onClick={closeAlert}>
      {children || (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="m-1 h-5 w-5 stroke-2"
        >
          <path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Component>
  );
}

AlertDismissTriggerRoot.displayName = "MaterialTailwind.AlertDismissTrigger";

export const AlertDismissTrigger = React.forwardRef(
  AlertDismissTriggerRoot,
) as <T extends React.ElementType = "button">(
  props: AlertDismissTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
  Content: AlertContent,
  DismissTrigger: AlertDismissTrigger,
});

export default Alert;
