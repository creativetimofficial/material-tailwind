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
import type { BaseComponent } from "@types";

// alert context
export interface AlertContextProps
  extends Omit<BaseComponent<HTMLElement>, "size"> {
  isPill?: boolean;
  open?: boolean;
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
export interface AlertProps extends Omit<BaseComponent<HTMLElement>, "size"> {
  as?: React.ElementType;
  className?: string;
  isPill?: boolean;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: () => void;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/alert) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/alert#alert-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/alert#alert-theme)
 */
const AlertRoot = React.forwardRef<HTMLElement, AlertProps>(
  (
    {
      as,
      color,
      variant,
      isPill,
      className,
      open: controlledOpen,
      onOpenChange: setControlledOpen,
      children,
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "div";
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
      <Element
        {...rest}
        ref={ref}
        role="alert"
        data-open={open}
        data-pill={isPill}
        className={styles}
      >
        <AlertContext.Provider value={contextValue}>
          {children}
        </AlertContext.Provider>
      </Element>
    ) : null;
  },
);

AlertRoot.displayName = "MaterialTailwind.Alert";

// alert content
export interface AlertContentProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const AlertContent = React.forwardRef<HTMLElement, AlertContentProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.alertContent ?? alertContentTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

AlertContent.displayName = "MaterialTailwind.AlertContent";

// alert icon
export interface AlertIconProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const AlertIcon = React.forwardRef<HTMLElement, AlertIconProps>(
  ({ as, className, children, ...rest }, ref) => {
    const Element = as ?? "span";
    const contextTheme = useTheme();
    const theme = contextTheme?.alertIcon ?? alertIconTheme;

    const styles = twMerge(theme.baseStyle, className);

    return (
      <Element {...rest} ref={ref} className={styles}>
        {children}
      </Element>
    );
  },
);

AlertIcon.displayName = "MaterialTailwind.AlertIcon";

// alert close trigger
export interface AlertDismissTriggerProps
  extends Omit<React.AllHTMLAttributes<HTMLElement>, "as"> {
  as?: React.ElementType;
  ripple?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const AlertDismissTrigger = React.forwardRef<
  HTMLElement,
  AlertDismissTriggerProps
>(({ as, ripple, className, children, ...rest }, ref) => {
  const Element = as ?? "button";
  const contextTheme = useTheme();
  const { setOpen } = React.useContext(AlertContext);
  const theme = contextTheme?.alertDismissTrigger ?? alertDismissTriggerTheme;

  const styles = children ? className : twMerge(theme.baseStyle, className);

  function closeAlert(event: React.MouseEvent<HTMLElement>) {
    setOpen?.(false);
    rest.onClick?.(event);
  }

  return (
    <Element {...rest} ref={ref} className={styles} onClick={closeAlert}>
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
    </Element>
  );
});

AlertDismissTrigger.displayName = "MaterialTailwind.AlertDismissTrigger";

export const Alert = Object.assign(AlertRoot, {
  Icon: AlertIcon,
  Content: AlertContent,
  DismissTrigger: AlertDismissTrigger,
});

export default Alert;
