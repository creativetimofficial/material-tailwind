"use client";

import * as React from "react";

// @components
import {
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
} from "@floating-ui/react";

// @hooks
import {
  useFloating,
  useClick,
  useRole,
  useDismiss,
  useInteractions,
  useMergeRefs,
} from "@floating-ui/react";
import { useTheme } from "@context";

// @types
import type {
  UseFloatingReturn,
  FloatingFocusManagerProps,
} from "@floating-ui/react";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import {
  drawerTriggerTheme,
  drawerOverlayTheme,
  drawerPanelTheme,
  drawerDismissTriggerTheme,
} from "@theme";

// drawer context
type FloatingType = Partial<UseFloatingReturn> &
  Partial<ReturnType<typeof useInteractions>>;

export interface DrawerContextProps extends FloatingType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerContext = React.createContext<DrawerContextProps>(
  {} as DrawerContextProps,
);

// drawer root
export interface DrawerRootProps {
  open?: boolean;
  onOpenChange?: () => void;
  children: React.ReactNode;
}

export function DrawerRoot({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  children,
}: DrawerRootProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const { context } = data;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  const contextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );

  return (
    <DrawerContext.Provider value={contextValue}>
      {children}
    </DrawerContext.Provider>
  );
}

DrawerRoot.displayName = "MaterialTailwind.Drawer";

// drawer trigger
export interface DrawerTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const DrawerTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  DrawerTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.drawerTrigger ?? drawerTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(DrawerContext);

  const styles = twMerge(theme.baseStyle, className);
  const elementRef = useMergeRefs([refs?.setReference, ref]);

  return (
    <Element
      {...rest}
      ref={elementRef}
      data-open={open}
      className={styles}
      {...(getReferenceProps && getReferenceProps())}
    >
      {children}
    </Element>
  );
});

DrawerTrigger.displayName = "MaterialTailwind.DrawerTrigger";

// drawer overlay
export interface DrawerOverlayProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  lockScroll?: boolean;
  children: React.ReactNode;
}

export const DrawerOverlay = React.forwardRef<
  HTMLDivElement,
  DrawerOverlayProps
>(({ className, lockScroll, children, ...rest }, ref) => {
  const contextTheme = useTheme();
  const theme = contextTheme?.drawerOverlay ?? drawerOverlayTheme;
  const defaultProps = theme?.defaultProps;
  const { open } = React.useContext(DrawerContext);

  lockScroll ??=
    (defaultProps?.lockScroll as DrawerOverlayProps["lockScroll"]) ?? true;

  const styles = twMerge(theme.baseStyle, className);

  return open ? (
    <FloatingPortal>
      <FloatingOverlay
        {...rest}
        ref={ref}
        data-open={open}
        className={styles}
        lockScroll={lockScroll}
      >
        {children}
      </FloatingOverlay>
    </FloatingPortal>
  ) : null;
});

DrawerOverlay.displayName = "MaterialTailwind.DrawerOverlay";

// drawer panel
type DrawerPanelBaseProps = React.HtmlHTMLAttributes<HTMLElement> &
  FloatingFocusManagerProps;

export interface DrawerPanelProps
  extends Omit<DrawerPanelBaseProps, "context" | "children"> {
  as?: React.ElementType;
  className?: string;
  placement?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

export const DrawerPanel = React.forwardRef<
  HTMLDivElement | HTMLElement,
  DrawerPanelProps
>(
  (
    {
      as,
      className,
      children,
      placement,
      disabled,
      initialFocus,
      returnFocus,
      guards,
      modal,
      visuallyHiddenDismiss,
      closeOnFocusOut,
      order,
      ...rest
    },
    ref,
  ) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.drawerPanel ?? drawerPanelTheme;
    const defaultProps = theme.defaultProps;
    const { context, refs, getFloatingProps, open } =
      React.useContext(DrawerContext);

    placement ??=
      (defaultProps?.placement as DrawerPanelProps["placement"]) ?? "right";
    disabled ??=
      (defaultProps?.disabled as DrawerPanelProps["disabled"]) ?? false;
    initialFocus ??=
      (defaultProps?.initialFocus as DrawerPanelProps["initialFocus"]) ?? 0;
    returnFocus ??=
      (defaultProps?.returnFocus as DrawerPanelProps["returnFocus"]) ?? true;
    guards ??= (defaultProps?.guards as DrawerPanelProps["guards"]) ?? true;
    modal ??= (defaultProps?.modal as DrawerPanelProps["modal"]) ?? false;
    visuallyHiddenDismiss ??=
      (defaultProps?.visuallyHiddenDismiss as DrawerPanelProps["visuallyHiddenDismiss"]) ??
      true;
    closeOnFocusOut ??=
      (defaultProps?.closeOnFocusOut as DrawerPanelProps["closeOnFocusOut"]) ??
      true;
    order ??= (defaultProps?.order as DrawerPanelProps["order"]) ?? ["content"];

    const styles = twMerge(theme.baseStyle, className);
    const elementRef = useMergeRefs([refs?.setFloating, ref]);

    return open ? (
      <FloatingFocusManager
        order={order}
        modal={modal}
        guards={guards}
        disabled={disabled}
        returnFocus={returnFocus}
        initialFocus={initialFocus}
        closeOnFocusOut={closeOnFocusOut}
        visuallyHiddenDismiss={visuallyHiddenDismiss}
        context={context as FloatingFocusManagerProps["context"]}
      >
        <Element
          {...rest}
          ref={elementRef}
          className={styles}
          data-open={open}
          data-placement={placement}
          {...(getFloatingProps && getFloatingProps())}
        >
          {children}
        </Element>
      </FloatingFocusManager>
    ) : null;
  },
);

DrawerPanel.displayName = "MaterialTailwind.DrawerPanel";

// drawer dismiss trigger
export interface DrawerDismissTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const DrawerDismissTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  DrawerDismissTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.drawerDismissTrigger ?? drawerDismissTriggerTheme;
  const { open, setOpen } = React.useContext(DrawerContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element
      {...rest}
      ref={ref}
      data-open={open}
      className={styles}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        rest.onClick?.(event);

        if (setOpen) {
          setOpen(false);
        }
      }}
    >
      {children}
    </Element>
  );
});

DrawerDismissTrigger.displayName = "MaterialTailwind.DrawerDismissTrigger";

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Overlay: DrawerOverlay,
  Panel: DrawerPanel,
  DismissTrigger: DrawerDismissTrigger,
});

export default Drawer;
