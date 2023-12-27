import React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

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
import type { BaseComponent, Props } from "@types";

// alert context
export interface AlertContextProps extends Props<"div"> {
  variant?: BaseComponent<"div">["variant"];
  color?: BaseComponent<"div">["color"];
  rounded?: boolean;
}

export const AlertContext = React.createContext<AlertContextProps>({
  color: "primary",
  variant: "solid",
  rounded: false,
});

// alert root
type BaseAlertProps = Omit<BaseComponent<"div">, "size"> & Props<any>;

export interface AlertProps extends BaseAlertProps {
  as?: React.ElementType;
  className?: string;
  visible?: boolean;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button#button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button#button-theme)
 *
 * @example
 * ```tsx
 * import { Button } from "@material-tailwind/react";
 *
 * export default function Example() {
 *  return <Button>Button</Button>;
 * }
 * ```
 */
const AlertRoot = React.forwardRef<HTMLDivElement | HTMLElement, AlertProps>(
  (
    {
      as,
      color,
      variant,
      rounded,
      className,
      visible = true,
      children,
      ...rest
    },
    ref,
  ) => {
    const Element = as ?? "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.alert ?? alertTheme;
    const defaultProps = contextTheme?.alert?.defaultProps;

    color ??= (defaultProps?.color as AlertProps["color"]) ?? "primary";
    variant ??= (defaultProps?.variant as AlertProps["variant"]) ?? "solid";
    rounded ??= (defaultProps?.rounded as AlertProps["rounded"]) ?? false;

    const styles = twMerge(
      theme.baseStyle,
      theme["variant"][variant][color],
      rounded && theme.rounded,
      className,
    );

    const contextValue = React.useMemo(
      () => ({
        color,
        variant,
        rounded,
      }),
      [color, variant, rounded],
    );

    return visible ? (
      <Element role="alert" {...rest} ref={ref} className={styles}>
        <AlertContext.Provider value={contextValue}>
          {children}
        </AlertContext.Provider>
      </Element>
    ) : null;
  },
);

AlertRoot.displayName = "MaterialTailwind.Alert";

// alert content
export interface AlertContentProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const AlertContent = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  AlertContentProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as ?? "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.alertContent ?? alertContentTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

AlertContent.displayName = "MaterialTailwind.AlertContent";

// alert icon
export interface AlertIconProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const AlertIcon = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  AlertIconProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as ?? "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.alertIcon ?? alertIconTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

AlertIcon.displayName = "MaterialTailwind.AlertIcon";

// alert close trigger
export interface AlertDismissTriggerProps extends Props<"button" | any> {
  as?: React.ElementType;
  ripple?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const AlertDismissTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  AlertDismissTriggerProps
>(({ as, ripple, className, children, ...rest }, ref) => {
  const Element = as ?? "button";
  const contextTheme = useTheme();
  const { color, variant, rounded } = React.useContext(AlertContext);
  const theme = contextTheme?.alertDismissTrigger ?? alertDismissTriggerTheme;
  const defaultProps = contextTheme?.alertDismissTrigger?.defaultProps;

  ripple ??=
    (defaultProps?.ripple as AlertDismissTriggerProps["ripple"]) ?? true;

  const rippleEffect = ripple !== undefined && new Ripple();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const onClick = rest?.onClick;
    const isDarkRipple =
      variant === "ghost" ||
      variant === "outline" ||
      color === "secondary" ||
      color === "warning";

    if (ripple) {
      rippleEffect.create(e, isDarkRipple ? "dark" : "light");
    }

    return typeof onClick === "function" && onClick(e);
  };

  const styles = twMerge(
    theme.baseStyle,
    theme["variant"][variant || "solid"][color || "primary"],
    rounded && theme.rounded,
    className,
  );

  return (
    <Element {...rest} ref={ref} className={styles} onClick={handleClick}>
      {children || (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          className="h-full w-full"
        >
          <path
            d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
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
