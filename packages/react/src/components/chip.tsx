"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";
import Ripple from "material-ripple-effects";

// @hooks
import { useTheme } from "@context";

// @theme
import {
  chipTheme,
  chipLabelTheme,
  chipIconTheme,
  chipDismissTriggerTheme,
} from "@theme";

// @types
import type { BaseComponent } from "@types";

// chip context
export type ChipContextProps = BaseComponent<HTMLElement> & {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ChipContext = React.createContext<ChipContextProps>({
  size: "md",
  color: "primary",
  variant: "solid",
  open: true,
  setOpen: () => {},
});

// chip root
export interface ChipProps extends BaseComponent<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: () => void;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/chip) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/chip#chip-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/chip#chip-theme)
 *
 * @example
 * ```tsx
 import { Chip } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Chip>
      <Chip.Label>Material Tailwind</Chip.Label>
    </Chip>
  );
}
 * ```
 */
const ChipRoot = React.forwardRef<HTMLAnchorElement | HTMLElement, ChipProps>(
  (
    {
      as,
      size,
      color,
      variant,
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
    const theme = contextTheme?.chip ?? chipTheme;
    const defaultProps = theme?.defaultProps;
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(true);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    size ??= (defaultProps?.size as ChipProps["size"]) ?? "md";
    color ??= (defaultProps?.color as ChipProps["color"]) ?? "primary";
    variant ??= (defaultProps?.variant as ChipProps["variant"]) ?? "solid";

    const styles = twMerge(
      theme.baseStyle,
      theme["size"][size],
      theme["variant"][variant][color],
      className,
    );

    const contextValue = React.useMemo(
      () => ({
        size,
        color,
        variant,
        open,
        setOpen,
      }),
      [size, color, variant, open, setOpen],
    );

    return open ? (
      <Element {...rest} ref={ref} data-open={open} className={styles}>
        <ChipContext.Provider value={contextValue}>
          {children}
        </ChipContext.Provider>
      </Element>
    ) : null;
  },
);

ChipRoot.displayName = "MaterialTailwind.Chip";

// chip label
export interface ChipLabelProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const ChipLabel = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  ChipLabelProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as ?? "span";
  const contextTheme = useTheme();
  const { size } = React.useContext(ChipContext);
  const theme = contextTheme?.chipLabel ?? chipLabelTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size || "md"],
    className,
  );

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

ChipLabel.displayName = "MaterialTailwind.ChipLabel";

// chip icon
export interface ChipIconProps extends React.HtmlHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const ChipIcon = React.forwardRef<
  HTMLAnchorElement | HTMLElement,
  ChipIconProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as ?? "span";
  const contextTheme = useTheme();
  const { size } = React.useContext(ChipContext);
  const theme = contextTheme?.chipIcon ?? chipIconTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size || "md"],
    className,
  );

  return (
    <Element {...rest} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

ChipIcon.displayName = "MaterialTailwind.ChipIcon";

// chip close trigger
export interface ChipDismissTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLElement> {
  as?: React.ElementType;
  ripple?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ChipDismissTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  ChipDismissTriggerProps
>(({ as, ripple, className, children, ...rest }, ref) => {
  const Element = as ?? "button";
  const contextTheme = useTheme();
  const { size, color, variant, setOpen } = React.useContext(ChipContext);
  const theme = contextTheme?.chipDismissTrigger ?? chipDismissTriggerTheme;
  const defaultProps = theme?.defaultProps;

  ripple ??=
    (defaultProps?.ripple as ChipDismissTriggerProps["ripple"]) ?? true;

  const rippleEffect = ripple !== undefined && new Ripple();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen?.(false);
    rest.onClick?.(event);

    const isDarkRipple =
      variant === "ghost" ||
      variant === "outline" ||
      color === "secondary" ||
      color === "warning";

    if (ripple) {
      rippleEffect.create(event, isDarkRipple ? "dark" : "light");
    }
  };

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size || "md"],
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

ChipDismissTrigger.displayName = "MaterialTailwind.ChipDismissTrigger";

export const Chip = Object.assign(ChipRoot, {
  Icon: ChipIcon,
  Label: ChipLabel,
  DismissTrigger: ChipDismissTrigger,
});

export default Chip;
