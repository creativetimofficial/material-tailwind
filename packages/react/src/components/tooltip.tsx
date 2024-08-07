"use client";

import * as React from "react";

// @components
import { FloatingPortal } from "@floating-ui/react";

// @hooks
import {
  useFloating,
  useHover,
  useFocus,
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
  safePolygon,
} from "@floating-ui/react";
import { twMerge } from "tailwind-merge";

// @types
import type {
  OffsetOptions,
  Placement,
  UseFloatingReturn,
} from "@floating-ui/react";
import { BaseProps } from "@types";

// @theme
import {
  tooltipTheme,
  tooltipTriggerTheme,
  tooltipContentTheme,
  tooltipArrowTheme,
} from "@theme";

// tooltip context
type FloatingType = Partial<UseFloatingReturn> &
  Partial<ReturnType<typeof useInteractions>>;

export interface TooltipContextProps extends FloatingType {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  arrowRef?: React.MutableRefObject<null>;
}

export const TooltipContext = React.createContext<TooltipContextProps>({
  open: false,
  setOpen: () => {},
} as TooltipContextProps);

// tooltip root
export interface TooltipProps {
  open?: boolean;
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
  placement?: Placement;
  offset?: OffsetOptions;
  interactive?: boolean;
  children: React.ReactNode;
}

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/tooltip) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/tooltip#tooltip-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/tooltip#tooltip-theme)
 */
export function TooltipRoot({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  placement,
  offset,
  interactive,
  children,
}: TooltipProps) {
  const arrowRef = React.useRef(null);
  const contextTheme = useTheme();
  const theme = contextTheme?.tooltip ?? tooltipTheme;
  const defaultProps = theme?.defaultProps;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  placement ??= (defaultProps?.placement as TooltipProps["placement"]) ?? "top";
  offset ??= (defaultProps?.offset as TooltipProps["offset"]) ?? 8;
  interactive ??=
    (defaultProps?.interactive as TooltipProps["interactive"]) ?? false;

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

  const hover = useHover(context, {
    move: true,
    enabled: controlledOpen == null,
    handleClose: interactive ? safePolygon() : null,
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

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
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
}

TooltipRoot.displayName = "MaterialTailwind.Tooltip";

// tooltip trigger
export type TooltipTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<T>;

function TooltipTriggerRoot<T extends React.ElementType = "button">(
  { as, className, children, ...props }: TooltipTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.tooltipTrigger ?? tooltipTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(TooltipContext);

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

TooltipTriggerRoot.displayName = "MaterialTailwind.TooltipTrigger";

export const TooltipTrigger = React.forwardRef(TooltipTriggerRoot) as <
  T extends React.ElementType = "button",
>(
  props: TooltipTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// tooltip content
export type TooltipContentProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function TooltipContentRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: TooltipContentProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.tooltipContent ?? tooltipContentTheme;
  const { refs, getFloatingProps, open, floatingStyles } =
    React.useContext(TooltipContext);

  const styles = twMerge(theme.baseStyle, className);
  const elementRef = useMergeRefs([refs?.setFloating, ref]);

  return open ? (
    <FloatingPortal>
      <Component
        {...props}
        ref={elementRef}
        data-open={open}
        style={{ ...floatingStyles, ...props?.style }}
        className={styles}
        {...(getFloatingProps && getFloatingProps())}
      >
        {children}
      </Component>
    </FloatingPortal>
  ) : null;
}

TooltipContentRoot.displayName = "MaterialTailwind.TooltipContent";

export const TooltipContent = React.forwardRef(TooltipContentRoot) as <
  T extends React.ElementType = "div",
>(
  props: TooltipContentProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// tooltip arrow
export type TooltipArrowProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function TooltipArrowRoot<T extends React.ElementType = "span">(
  { as, className, ...props }: TooltipArrowProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.tooltipArrow ?? tooltipArrowTheme;
  const innerRef = React.useRef<React.ComponentRef<"span">>(null);
  const { placement, arrowRef, middlewareData } =
    React.useContext(TooltipContext);

  const elementRef = useMergeRefs([arrowRef, innerRef, ref]);

  const staticSide: any = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right",
  }[placement ? placement.split("-")[0] : ""];

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
      ref={elementRef}
      style={{
        position: "absolute",
        left: middlewareData?.arrow?.x,
        top: middlewareData?.arrow?.y,
        [staticSide]: `${
          -(innerRef?.current?.clientHeight as number) / 2 - 1
        }px`,
        ...props?.style,
      }}
      data-placement={placement}
      className={styles}
    />
  );
}

TooltipArrowRoot.displayName = "MaterialTailwind.TooltipArrow";

export const TooltipArrow = React.forwardRef(TooltipArrowRoot) as <
  T extends React.ElementType = "span",
>(
  props: TooltipArrowProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
});

export default Tooltip;
