import React from "react";
import PropTypes from "prop-types";

// @floating-ui
import {
  offset as fuiOffset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
} from "@floating-ui/react";

// utils
import merge from "deepmerge";

// context
import { useTheme } from "../../context/theme";
import { PopoverContextProvider, usePopover } from "./PopoverContext";

// types
import type {
  open,
  handler,
  placement,
  offset,
  dismiss,
  animate,
  children,
} from "../../types/components/popover";
import {
  propTypesOpen,
  propTypesHandler,
  propTypesPlacement,
  propTypesOffset,
  propTypesDismiss,
  propTypesAnimate,
  propTypesChildren,
} from "../../types/components/popover";

// popover components
import { PopoverHandler, PopoverHandlerProps } from "./PopoverHandler";
import { PopoverContent, PopoverContentProps } from "./PopoverContent";

export interface PopoverProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  children: children;
}

const Popover = ({
  open,
  handler,
  placement,
  offset,
  dismiss,
  animate,
  children,
}: PopoverProps) => {
  // 1. init
  const { popover } = useTheme();
  const { defaultProps } = popover;
  const [internalOpen, setInternalOpen] = React.useState(false);

  // 2. set default props
  open = open ?? internalOpen;
  handler = handler ?? setInternalOpen;
  placement = placement ?? defaultProps.placement;
  offset = offset ?? defaultProps.offset;
  dismiss = dismiss ?? defaultProps.dismiss;
  animate = animate ?? defaultProps.animate;

  // 4. set animation
  const animation = {
    unmount: {
      opacity: 0,
    },
    mount: {
      opacity: 1,
    },
  };
  const appliedAnimation = merge(animation, animate);

  // 5. set @floating-ui
  const { x, y, reference, floating, strategy, refs, update, context } = useFloating({
    open,
    onOpenChange: handler,
    middleware: [fuiOffset(offset), flip(), shift()],
    placement,
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context, dismiss),
  ]);

  React.useEffect(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, update, refs.reference, refs.floating]);

  const contextValue = React.useMemo(
    () => ({
      open,
      strategy,
      x,
      y,
      context,
      reference,
      floating,
      getReferenceProps,
      getFloatingProps,
      appliedAnimation,
      labelId,
      descriptionId,
    }),
    [
      open,
      strategy,
      x,
      y,
      context,
      reference,
      floating,
      getFloatingProps,
      getReferenceProps,
      appliedAnimation,
      labelId,
      descriptionId,
    ],
  );

  // 6. return
  return <PopoverContextProvider value={contextValue}>{children}</PopoverContextProvider>;
};

Popover.propTypes = {
  open: propTypesOpen,
  handler: propTypesHandler,
  placement: PropTypes.oneOf(propTypesPlacement),
  offset: propTypesOffset,
  dismiss: propTypesDismiss,
  animate: propTypesAnimate,
  children: propTypesChildren,
};

Popover.displayName = "MaterialTailwind.Popover";

export type { PopoverHandlerProps, PopoverContentProps };
export { Popover, PopoverHandler, PopoverContent, usePopover };
export default Object.assign(Popover, { Handler: PopoverHandler, Content: PopoverContent });
