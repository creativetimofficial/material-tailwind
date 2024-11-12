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
import type { BaseProps, SharedProps } from "@types";

// chip context
export interface ChipContextProps extends SharedProps {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChipContext = React.createContext<ChipContextProps>({
  size: "md",
  color: "primary",
  variant: "solid",
  open: true,
  setOpen: () => {},
});

// chip root
export type ChipProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    open?: boolean;
    onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
    isPill?: boolean;
  } & SharedProps
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/chip) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/chip#chip-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/chip#chip-theme)
 */
function ChipRootBase<T extends React.ElementType = "div">(
  {
    as,
    size,
    color,
    variant,
    className,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    children,
    isPill,
    ...props
  }: ChipProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.chip ?? chipTheme;
  const defaultProps = theme?.defaultProps;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(true);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  size ??= (defaultProps?.size as ChipProps["size"]) ?? "md";
  color ??= (defaultProps?.color as ChipProps["color"]) ?? "primary";
  variant ??= (defaultProps?.variant as ChipProps["variant"]) ?? "solid";
  isPill ??= (defaultProps?.isPill as ChipProps["isPill"]) ?? true;

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
    <Component
      {...props}
      ref={ref}
      data-open={open}
      data-shape={isPill ? "pill" : "default"}
      className={styles}
    >
      <ChipContext.Provider value={contextValue}>
        {children}
      </ChipContext.Provider>
    </Component>
  ) : null;
}

ChipRootBase.displayName = "MaterialTailwind.Chip";

export const ChipRoot = React.forwardRef(ChipRootBase) as <
  T extends React.ElementType = "div",
>(
  props: ChipProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// chip label
export type ChipLabelProps<T extends React.ElementType = "span"> = BaseProps<T>;

function ChipLabelRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: ChipLabelProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const { size } = React.useContext(ChipContext);
  const theme = contextTheme?.chipLabel ?? chipLabelTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size || "md"],
    className,
  );

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

ChipLabelRoot.displayName = "MaterialTailwind.ChipLabel";

export const ChipLabel = React.forwardRef(ChipLabelRoot) as <
  T extends React.ElementType = "span",
>(
  props: ChipLabelProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// chip icon
export type ChipIconProps<T extends React.ElementType = "span"> = BaseProps<T>;

function ChipIconRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: ChipIconProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("span" as any);
  const contextTheme = useTheme();
  const { size } = React.useContext(ChipContext);
  const theme = contextTheme?.chipIcon ?? chipIconTheme;

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size || "md"],
    className,
  );

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

ChipIconRoot.displayName = "MaterialTailwind.ChipIcon";

export const ChipIcon = React.forwardRef(ChipIconRoot) as <
  T extends React.ElementType = "span",
>(
  props: ChipIconProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// chip close trigger
export type ChipDismissTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<
    T,
    {
      ripple?: boolean;
    }
  >;

function ChipDismissTriggerRoot<T extends React.ElementType = "button">(
  { as, ripple, className, children, ...props }: ChipDismissTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("button" as any);
  const contextTheme = useTheme();
  const { size, color, variant, setOpen } = React.useContext(ChipContext);
  const theme = contextTheme?.chipDismissTrigger ?? chipDismissTriggerTheme;
  const defaultProps = theme?.defaultProps;

  ripple ??=
    (defaultProps?.ripple as ChipDismissTriggerProps["ripple"]) ?? true;

  const rippleEffect = ripple !== undefined && new Ripple();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen?.(false);
    props.onClick?.(event);

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
    <Component {...props} ref={ref} className={styles} onClick={handleClick}>
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
    </Component>
  );
}

ChipDismissTriggerRoot.displayName = "MaterialTailwind.ChipDismissTrigger";

export const ChipDismissTrigger = React.forwardRef(ChipDismissTriggerRoot) as <
  T extends React.ElementType = "button",
>(
  props: ChipDismissTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Chip = Object.assign(ChipRoot, {
  Icon: ChipIcon,
  Label: ChipLabel,
  DismissTrigger: ChipDismissTrigger,
});

export default Chip;
