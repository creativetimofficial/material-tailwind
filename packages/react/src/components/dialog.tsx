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
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
} from "@floating-ui/react";
import { useTheme } from "@context";

// @utils
import { twMerge } from "tailwind-merge";

// @types
import type {
  UseFloatingReturn,
  FloatingFocusManagerProps,
} from "@floating-ui/react";
import { BaseProps, SharedProps } from "@types";

// @theme
import {
  dialogTheme,
  dialogTriggerTheme,
  dialogOverlayTheme,
  dialogContentTheme,
  dialogDismissTriggerTheme,
} from "@theme";

type size = "xs" | SharedProps["size"] | "xl" | "screen";

// dialog context
type FloatingType = Partial<UseFloatingReturn> &
  Partial<ReturnType<typeof useInteractions>>;

export interface DialogContextProps extends FloatingType {
  size?: size;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogContext = React.createContext<DialogContextProps>({
  open: false,
  setOpen: () => {},
} as DialogContextProps);

// dialog root
export interface DialogRootProps {
  size?: size;
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/dialog) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/dialog#dialog-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/dialog#dialog-theme)
 */

export function DialogRoot({
  size,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  children,
}: DialogRootProps) {
  const contextTheme = useTheme();
  const theme = contextTheme?.dialog ?? dialogTheme;
  const defaultProps = theme?.defaultProps;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  size ??= (defaultProps?.size as DialogRootProps["size"]) ?? "md";

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
      size,
      ...interactions,
      ...data,
    }),
    [open, setOpen, size, interactions, data],
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
}

DialogRoot.displayName = "MaterialTailwind.Dialog";

// dialog trigger
export type DialogTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<T>;

function DialogTriggerRoot<T extends React.ElementType>(
  { as, className, children, ...props }: DialogTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.dialogTrigger ?? dialogTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(DialogContext);

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

DialogTriggerRoot.displayName = "MaterialTailwind.DialogTrigger";

export const DialogTrigger = React.forwardRef(DialogTriggerRoot) as <
  T extends React.ElementType = "button",
>(
  props: DialogTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// dialog overlay
export type DialogOverlayProps<T extends React.ElementType = "div"> = Omit<
  BaseProps<
    T,
    {
      lockScroll?: boolean;
    }
  >,
  "as"
>;

function DialogOverlayRoot<T extends React.ElementType = "div">(
  { className, lockScroll, children, ...props }: DialogOverlayProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const contextTheme = useTheme();
  const theme = contextTheme?.dialogOverlay ?? dialogOverlayTheme;
  const defaultProps = theme?.defaultProps;
  const { open } = React.useContext(DialogContext);

  lockScroll ??=
    (defaultProps?.lockScroll as DialogOverlayProps["lockScroll"]) ?? true;

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

DialogOverlayRoot.displayName = "MaterialTailwind.DialogOverlay";

export const DialogOverlay = React.forwardRef(DialogOverlayRoot) as <
  T extends React.ElementType = "div",
>(
  props: DialogOverlayProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => JSX.Element;

// dialog content
export type DialogContentProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  Omit<FloatingFocusManagerProps, "context" | "children">
>;

function DialogContentRoot<T extends React.ElementType = "div">(
  {
    as,
    className,
    children,
    disabled,
    initialFocus,
    returnFocus,
    guards,
    modal,
    visuallyHiddenDismiss,
    closeOnFocusOut,
    order,
    ...props
  }: DialogContentProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.dialogContent ?? dialogContentTheme;
  const defaultProps = theme.defaultProps;
  const { context, refs, getFloatingProps, open, size } =
    React.useContext(DialogContext);

  disabled ??=
    (defaultProps?.disabled as DialogContentProps["disabled"]) ?? false;
  initialFocus ??=
    (defaultProps?.initialFocus as DialogContentProps["initialFocus"]) ?? 0;
  returnFocus ??=
    (defaultProps?.returnFocus as DialogContentProps["returnFocus"]) ?? true;
  guards ??= (defaultProps?.guards as DialogContentProps["guards"]) ?? true;
  modal ??= (defaultProps?.modal as DialogContentProps["modal"]) ?? false;
  visuallyHiddenDismiss ??=
    (defaultProps?.visuallyHiddenDismiss as DialogContentProps["visuallyHiddenDismiss"]) ??
    true;
  closeOnFocusOut ??=
    (defaultProps?.closeOnFocusOut as DialogContentProps["closeOnFocusOut"]) ??
    true;
  order ??= (defaultProps?.order as DialogContentProps["order"]) ?? ["content"];

  const styles = twMerge(theme.baseStyle, theme.size[size!], className);
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
        data-open={open}
        className={styles}
        {...(getFloatingProps && getFloatingProps())}
      >
        {children}
      </Component>
    </FloatingFocusManager>
  ) : null;
}

DialogContentRoot.displayName = "MaterialTailwind.DialogContent";

export const DialogContent = React.forwardRef(DialogContentRoot) as <
  T extends React.ElementType = "div",
>(
  props: DialogContentProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// dialog dismiss trigger
export type DialogDismissTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<T>;

function DialogDismissTriggerRoot<T extends React.ElementType = "button">(
  { as, className, children, ...props }: DialogDismissTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.dialogDismissTrigger ?? dialogDismissTriggerTheme;
  const { open, setOpen } = React.useContext(DialogContext);

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

DialogDismissTriggerRoot.displayName = "MaterialTailwind.DialogDismissTrigger";

export const DialogDismissTrigger = React.forwardRef(
  DialogDismissTriggerRoot,
) as <T extends React.ElementType = "button">(
  props: DialogDismissTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Overlay: DialogOverlay,
  Content: DialogContent,
  DismissTrigger: DialogDismissTrigger,
});

export default Dialog;
