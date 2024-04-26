"use client";

import * as React from "react";

// @components
import { FloatingPortal, FloatingFocusManager } from "@floating-ui/react";

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
import {
  autoUpdate,
  flip as fuiFlip,
  offset as fuiOffset,
  shift,
  arrow,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";

// @types
import type {
  OffsetOptions,
  Placement,
  UseFloatingReturn,
  FloatingFocusManagerProps,
} from "@floating-ui/react";

// @theme
import {
  popoverTheme,
  popoverTriggerTheme,
  popoverContentTheme,
  popoverArrowTheme,
} from "@theme";

// popover context
type FloatingType = Partial<UseFloatingReturn> &
  Partial<ReturnType<typeof useInteractions>>;

export interface PopoverContextProps extends FloatingType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  arrowRef?: React.MutableRefObject<null>;
}

export const PopoverContext = React.createContext<PopoverContextProps>({
  open: false,
  setOpen: () => {},
} as PopoverContextProps);

// popover root
export interface PopoverProps {
  open?: boolean;
  onOpenChange?: () => void;
  placement?: Placement;
  offset?: OffsetOptions;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/popover) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/popover#popover-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/popover#popover-theme)
 *
 * @example
 * ```tsx
import { Popover, Button, Typography } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <Popover>
      <Popover.Trigger as={Button}>Open</Popover.Trigger>
      <Popover.Content className="max-w-sm">
        <Typography
          type="small"
          className="text-foreground"
        >
          This is a very beautiful popover, show some love.
        </Typography>
        <Popover.Arrow />
      </Popover.Content>
    </Popover>
  );
}
 * ```
 */

export function PopoverRoot({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement,
  offset,
  children,
}: PopoverProps) {
  const arrowRef = React.useRef(null);
  const contextTheme = useTheme();
  const theme = contextTheme?.popover ?? popoverTheme;
  const defaultProps = theme?.defaultProps;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  placement ??=
    (defaultProps?.placement as PopoverProps["placement"]) ?? "bottom";
  offset ??= (defaultProps?.offset as PopoverProps["offset"]) ?? 10;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      fuiOffset(offset),
      fuiFlip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5,
      }),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef,
        padding: 5,
      }),
    ],
  });

  const { context } = data;

  const click = useClick(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  const contextValue = React.useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
    }),
    [open, setOpen, arrowRef, interactions, data],
  );

  return (
    <PopoverContext.Provider value={contextValue}>
      {children}
    </PopoverContext.Provider>
  );
}

PopoverRoot.displayName = "MaterialTailwind.Popover";

// popover trigger
export interface PopoverTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const PopoverTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  PopoverTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.popoverTrigger ?? popoverTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(PopoverContext);

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

PopoverTrigger.displayName = "MaterialTailwind.PopoverTrigger";

// popover content
type PopoverContentBaseProps = React.HtmlHTMLAttributes<HTMLElement> &
  FloatingFocusManagerProps;

export interface PopoverContentProps
  extends Omit<PopoverContentBaseProps, "context" | "children"> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement | HTMLElement,
  PopoverContentProps
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
    const theme = contextTheme?.popoverContent ?? popoverContentTheme;
    const defaultProps = theme.defaultProps;
    const { context, refs, getFloatingProps, open, floatingStyles } =
      React.useContext(PopoverContext);

    disabled ??=
      (defaultProps?.disabled as PopoverContentProps["disabled"]) ?? false;
    initialFocus ??=
      (defaultProps?.initialFocus as PopoverContentProps["initialFocus"]) ?? 0;
    returnFocus ??=
      (defaultProps?.returnFocus as PopoverContentProps["returnFocus"]) ?? true;
    guards ??= (defaultProps?.guards as PopoverContentProps["guards"]) ?? true;
    modal ??= (defaultProps?.modal as PopoverContentProps["modal"]) ?? false;
    visuallyHiddenDismiss ??=
      (defaultProps?.visuallyHiddenDismiss as PopoverContentProps["visuallyHiddenDismiss"]) ??
      true;
    closeOnFocusOut ??=
      (defaultProps?.closeOnFocusOut as PopoverContentProps["closeOnFocusOut"]) ??
      true;
    order ??= (defaultProps?.order as PopoverContentProps["order"]) ?? [
      "content",
    ];

    const styles = twMerge(theme.baseStyle, className);
    const elementRef = useMergeRefs([refs?.setFloating, ref]);

    return open ? (
      <FloatingPortal>
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
            style={{ ...floatingStyles, ...rest?.style }}
            className={styles}
            {...(getFloatingProps && getFloatingProps())}
          >
            {children}
          </Element>
        </FloatingFocusManager>
      </FloatingPortal>
    ) : null;
  },
);

PopoverContent.displayName = "MaterialTailwind.PopoverContent";

// popover arrow
export interface PopoverArrowProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  className?: string;
}

export const PopoverArrow = React.forwardRef<
  HTMLSpanElement,
  PopoverArrowProps
>(({ as, className, ...rest }, ref) => {
  const Element = as || "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.popoverArrow ?? popoverArrowTheme;
  const innerRef = React.useRef<React.ComponentRef<"span">>(null);
  const { placement, arrowRef, middlewareData } =
    React.useContext(PopoverContext);

  const elementRef = useMergeRefs([arrowRef, innerRef, ref]);

  const staticSide: any = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement ? placement.split("-")[0] : ""];

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element
      {...rest}
      ref={elementRef}
      style={{
        position: "absolute",
        left: middlewareData?.arrow?.x,
        top: middlewareData?.arrow?.y,
        [staticSide]: `${
          -(innerRef?.current?.clientHeight as number) / 2 - 1
        }px`,
        ...rest?.style,
      }}
      data-placement={placement}
      className={styles}
    />
  );
});

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Arrow: PopoverArrow,
});

export default Popover;
