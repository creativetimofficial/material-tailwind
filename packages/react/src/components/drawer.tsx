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

// @types
import type { BaseProps } from "@types";

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
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
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
export type DrawerTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<T>;

function DrawerTriggerRoot<T extends React.ElementType = "button">(
  { as, className, children, ...props }: DrawerTriggerProps<T>,
  ref: React.Ref<Element>,
) {
  const Component = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.drawerTrigger ?? drawerTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(DrawerContext);

  const styles = twMerge(theme.baseStyle, className);
  const elementRef = useMergeRefs([refs?.setReference, ref]);

  return (
    <Component
      {...props}
      ref={elementRef}
      data-open={open}
      className={styles}
      {...(getReferenceProps && getReferenceProps())}
    >
      {children}
    </Component>
  );
}

DrawerTriggerRoot.displayName = "MaterialTailwind.DrawerTrigger";

export const DrawerTrigger = React.forwardRef(DrawerTriggerRoot) as <
  T extends React.ElementType = "button",
>(
  props: DrawerTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// drawer overlay
export type DrawerOverlayProps<T extends React.ElementType = "div"> = Omit<
  BaseProps<
    T,
    {
      lockScroll?: boolean;
    }
  >,
  "as"
>;

function DrawerOverlayRoot<T extends React.ElementType = "div">(
  { className, lockScroll, children, ...props }: DrawerOverlayProps,
  ref: React.Ref<HTMLDivElement>,
) {
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
        {...props}
        ref={ref}
        data-open={open}
        className={styles}
        lockScroll={lockScroll}
      >
        {children}
      </FloatingOverlay>
    </FloatingPortal>
  ) : null;
}

DrawerOverlayRoot.displayName = "MaterialTailwind.DrawerOverlay";

export const DrawerOverlay = React.forwardRef(DrawerOverlayRoot) as <
  T extends React.ElementType = "div",
>(
  props: DrawerOverlayProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => JSX.Element;

// drawer panel
export type DrawerPanelProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    placement?: "top" | "right" | "bottom" | "left";
  } & Omit<FloatingFocusManagerProps, "context" | "children">
>;

function DrawerPanelRoot<T extends React.ElementType = "div">(
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
    ...props
  }: DrawerPanelProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
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
      <Component
        {...props}
        ref={elementRef}
        className={styles}
        data-open={open}
        data-placement={placement}
        {...(getFloatingProps && getFloatingProps())}
      >
        {children}
      </Component>
    </FloatingFocusManager>
  ) : null;
}

DrawerPanelRoot.displayName = "MaterialTailwind.DrawerPanel";

export const DrawerPanel = React.forwardRef(DrawerPanelRoot) as <
  T extends React.ElementType = "div",
>(
  props: DrawerPanelProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// drawer dismiss trigger
export type DrawerDismissTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<T>;

function DrawerDismissTriggerRoot<T extends React.ElementType = "button">(
  { as, className, children, ...props }: DrawerDismissTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.drawerDismissTrigger ?? drawerDismissTriggerTheme;
  const { open, setOpen } = React.useContext(DrawerContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
      ref={ref}
      data-open={open}
      className={styles}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(event);

        if (setOpen) {
          setOpen(false);
        }
      }}
    >
      {children}
    </Component>
  );
}

DrawerDismissTriggerRoot.displayName = "MaterialTailwind.DrawerDismissTrigger";

export const DrawerDismissTrigger = React.forwardRef(
  DrawerDismissTriggerRoot,
) as <T extends React.ElementType = "button">(
  props: DrawerDismissTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Drawer = Object.assign(DrawerRoot, {
  Trigger: DrawerTrigger,
  Overlay: DrawerOverlay,
  Panel: DrawerPanel,
  DismissTrigger: DrawerDismissTrigger,
});

export default Drawer;
