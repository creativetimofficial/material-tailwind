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
import { Props } from "@types";

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
  onOpenChange?: () => void;
  placement?: Placement;
  offset?: OffsetOptions;
  interactive?: boolean;
  children: React.ReactNode;
}

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
export interface TooltipTriggerProps extends Props<"button" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TooltipTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  TooltipTriggerProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "button";
  const contextTheme = useTheme();
  const theme = contextTheme?.tooltipTrigger ?? tooltipTriggerTheme;
  const { refs, getReferenceProps, open } = React.useContext(TooltipContext);

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

TooltipTrigger.displayName = "MaterialTailwind.TooltipTrigger";

// tooltip content
export interface TooltipContentProps extends Props<"div" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TooltipContent = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TooltipContentProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.tooltipContent ?? tooltipContentTheme;
  const { refs, getFloatingProps, open, floatingStyles } =
    React.useContext(TooltipContext);

  const styles = twMerge(theme.baseStyle, className);
  const elementRef = useMergeRefs([refs?.setFloating, ref]);

  return open ? (
    <FloatingPortal>
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
    </FloatingPortal>
  ) : null;
});

TooltipContent.displayName = "MaterialTailwind.TooltipContent";

// tooltip arrow
export interface TooltipArrowProps extends Props<HTMLSpanElement | any> {
  as?: React.ElementType;
  className?: string;
}

export const TooltipArrow = React.forwardRef<
  HTMLSpanElement,
  TooltipArrowProps
>(({ as, className, ...rest }, ref) => {
  const Element = as || "span";
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

export const Tooltip = Object.assign(TooltipRoot, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
  Arrow: TooltipArrow,
});

export default Tooltip;
