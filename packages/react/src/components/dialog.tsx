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
import { Props, BaseComponent } from "@types";

// @theme
import {
  dialogTheme,
  dialogTriggerTheme,
  dialogOverlayTheme,
  dialogContentTheme,
  dialogDismissTriggerTheme,
} from "@theme";

type size = "xs" | BaseComponent<any>["size"] | "xl" | "screen";

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
export interface DialogTriggerProps extends Props<"button" | any> {
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
export interface DialogOverlayProps extends Props<"div"> {
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
type DialogContentBaseProps = Props<"div" | any> & FloatingFocusManagerProps;

export interface DialogContentProps
  extends Omit<DialogContentBaseProps, "context"> {
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

    const styles = twMerge(theme.baseStyle, theme.size[size], className);
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

// dialog trigger
export interface DialogDismissTriggerProps extends Props<"button" | any> {
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
