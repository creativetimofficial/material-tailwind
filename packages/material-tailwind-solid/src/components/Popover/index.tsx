// @floating-ui
// import {
//   autoUpdate,
//   flip,
//   offset as fuiOffset,
//   shift,
//   useClick,
//   useDismiss,
//   useFloating,
//   useId,
//   useInteractions,
//   useRole,
// } from "@floating-ui/react";

// utils

// context
import { useTheme } from "../../context/theme";
import { PopoverContextProvider, usePopover } from "./PopoverContext";

// types
import type {
  animate,
  children,
  dismiss,
  handler,
  offset as offsetType,
  open,
  placement,
} from "../../types/components/popover";

// popover components
import { autoUpdate, flip, offset, shift } from "@floating-ui/dom";
import { useFloating } from "solid-floating-ui";
import type { ParentComponent } from "solid-js";
import { createMemo, createSignal, createUniqueId, mergeProps } from "solid-js";
import type { PopoverContentProps } from "./PopoverContent";
import { PopoverContent } from "./PopoverContent";
import type { PopoverHandlerProps } from "./PopoverHandler";
import { PopoverHandler } from "./PopoverHandler";

export interface PopoverProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offsetType;
  dismiss?: dismiss;
  animate?: animate;
  children: children;
}

const Popover: ParentComponent<PopoverProps> = (props) => {
  // = ({
  //   open,
  //   handler,
  //   placement,
  //   offset,
  //   dismiss,
  //   animate,
  //   children,
  // }: PopoverProps) => {
  // 1. init
  const theme = useTheme();

  const [internalOpen, setInternalOpen] = createSignal(false);
  const [reference, setReference] = createSignal<HTMLElement>();
  const [floating, setFloating] = createSignal<HTMLElement>();

  const defaultAnimation = {
    unmount: {
      opacity: 0,
    },
    mount: {
      opacity: 1,
    },
  };
  const mergedProps = mergeProps(
    () => theme().popover.defaultProps,
    { animate: defaultAnimation, handler: setInternalOpen, open: internalOpen },
    props,
  );

  // 5. set @floating-ui
  const position = useFloating(reference, floating, {
    placement: mergedProps.placement,
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift(), offset(mergedProps.offset)],
  });

  const id = createUniqueId();

  const contextValue = createMemo(() => ({
    open: mergedProps.open,
    handler: mergedProps.handler,
    position,
    reference,
    setReference,
    floating,
    setFloating,
    appliedAnimation: mergedProps.animate,
    labelId: `${id}-label`,
    descriptionId: `${id}-description`,
  }));

  // 6. return
  return (
    <PopoverContextProvider value={contextValue}>{mergedProps.children}</PopoverContextProvider>
  );
};

export type { PopoverHandlerProps, PopoverContentProps };
export { Popover, PopoverHandler, PopoverContent, usePopover };
export default Object.assign(Popover, { Handler: PopoverHandler, Content: PopoverContent });
