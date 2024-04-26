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
import { BaseComponent } from "@types";

// @theme
import {
  dialogTheme,
  dialogTriggerTheme,
  dialogOverlayTheme,
  dialogContentTheme,
  dialogDismissTriggerTheme,
} from "@theme";

type size = "xs" | BaseComponent<HTMLElement>["size"] | "xl" | "screen";

// dialog context
type FloatingType = Partial<UseFloatingReturn> &
  Partial<ReturnType<typeof useInteractions>>;

export interface DialogContextProps extends FloatingType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  size?: size;
}

const DialogContext = React.createContext<DialogContextProps>({
  open: false,
  setOpen: () => {},
} as DialogContextProps);

// dialog root
export interface DialogRootProps {
  size?: size;
  open?: boolean;
  onOpenChange?: () => void;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/dialog) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/dialog#dialog-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/dialog#dialog-theme)
 *
 * @example
 * ```tsx
import {
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Xmark } from "iconoir-react";
 
export function DialogDemo() {
  return (
    <Dialog>
      <Dialog.Trigger as={Button}>Open Dialog</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content>
          <div className="flex items-center justify-between gap-4">
            <Typography type="h6">Material Tailwind</Typography>
            <Dialog.DismissTrigger
              as={IconButton}
              size="sm"
              variant="ghost"
              className="absolute right-2 top-2"
              isCircular
            >
              <Xmark className="w-5 h-5" />
            </Dialog.DismissTrigger>
          </div>
          <Typography className="mt-2 mb-6 text-foreground">
            Material Tailwind is an open-source library that uses the power of
            Tailwind CSS and React to help you build unique web projects faster
            and easier. The stunning design inspired by Material Design is a
            bonus! Get Material Tailwind and take advantage of its free
            components and features that will help you set up your web project
            quickly.
          </Typography>
          <div className="flex items-center justify-end gap-2 mb-1">
            <Dialog.DismissTrigger as={Button} variant="ghost" color="error">
              Cancel
            </Dialog.DismissTrigger>
            <Button>Get Started</Button>
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}
 * ```
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
export interface DialogTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  DialogTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.dialogTrigger ?? dialogTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(DialogContext);

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

DialogTrigger.displayName = "MaterialTailwind.DialogTrigger";

// dialog overlay
export interface DialogOverlayProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  className?: string;
  lockScroll?: boolean;
  children: React.ReactNode;
}

export const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  DialogOverlayProps
>(({ className, lockScroll, children, ...rest }, ref) => {
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

DialogOverlay.displayName = "MaterialTailwind.DialogOverlay";

// dialog content
type DialogContentBaseProps = React.HtmlHTMLAttributes<HTMLElement> &
  FloatingFocusManagerProps;

export interface DialogContentProps
  extends Omit<DialogContentBaseProps, "context" | "children"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement | HTMLElement,
  DialogContentProps
>(
  (
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
      ...rest
    },
    ref,
  ) => {
    const Element = as || "div";
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
    order ??= (defaultProps?.order as DialogContentProps["order"]) ?? [
      "content",
    ];

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
        <Element
          {...rest}
          ref={elementRef}
          data-open={open}
          className={styles}
          {...(getFloatingProps && getFloatingProps())}
        >
          {children}
        </Element>
      </FloatingFocusManager>
    ) : null;
  },
);

DialogContent.displayName = "MaterialTailwind.DialogContent";

// dialog dismiss trigger
export interface DialogDismissTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const DialogDismissTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  DialogDismissTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.dialogDismissTrigger ?? dialogDismissTriggerTheme;
  const { open, setOpen } = React.useContext(DialogContext);

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

DialogDismissTrigger.displayName = "MaterialTailwind.DialogDismissTrigger";

export const Dialog = Object.assign(DialogRoot, {
  Trigger: DialogTrigger,
  Overlay: DialogOverlay,
  Content: DialogContent,
  DismissTrigger: DialogDismissTrigger,
});

export default Dialog;
