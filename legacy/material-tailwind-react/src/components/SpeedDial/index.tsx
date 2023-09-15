import React from "react";

// @floating-ui
import {
  offset as fuiOffset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useFloatingNodeId,
  useInteractions,
  useDismiss,
  safePolygon,
  useHover,
  FloatingNode,
} from "@floating-ui/react";

// context
import { useTheme } from "../../context/theme";

// utils
import merge from "deepmerge";

// types
import {
  open,
  handler,
  placement,
  offset,
  dismiss,
  animate,
  propTypesOpen,
  propTypesHanlder,
  propTypesPlacement,
  propTypesOffset,
  propTypesDismiss,
  propTypesClassName,
  propTypesChildren,
  propTypesAnimate,
} from "../../types/components/speedDial";

// components
import SpeedDialHandler from "./SpeedDialHandler";
import SpeedDialContent from "./SpeedDialContent";
import SpeedDialAction from "./SpeedDialAction";

export interface SpeedDialProps extends React.ComponentProps<"div"> {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
}

// context
export const SpeedDialContext = React.createContext(null);

export function useSpeedDial() {
  const context = React.useContext(SpeedDialContext);

  if (!context) {
    throw new Error("useSpeedDial must be used within a <SpeedDial />.");
  }

  return context;
}

function SpeedDial({
  open,
  handler,
  placement,
  offset,
  dismiss,
  animate,
  children,
}: SpeedDialProps) {
  // 1. init
  const {
    speedDial: { defaultProps },
  } = useTheme();
  const [internalOpen, setInternalOpen] = React.useState(false);

  // 2. set default props
  open = open ?? internalOpen;
  handler = handler ?? setInternalOpen;
  placement = placement ?? defaultProps.placement;
  offset = offset ?? defaultProps.offset;
  dismiss = dismiss ?? defaultProps.dismiss;
  animate = animate ?? defaultProps.animate;

  // 3. set animation
  const animation = {
    unmount: {
      opacity: 0,
      transform: "scale(0.5)",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
    mount: {
      opacity: 1,
      transform: "scale(1)",
      transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
    },
  };
  const appliedAnimation = merge(animation, animate);

  // 4. set floating ui
  const nodeId = useFloatingNodeId();

  const { x, y, strategy, refs, context } = useFloating({
    open,
    nodeId,
    placement,
    onOpenChange: handler,
    whileElementsMounted: autoUpdate,
    middleware: [fuiOffset(offset), flip(), shift()],
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      handleClose: safePolygon(),
    }),
    useDismiss(context, dismiss),
  ]);

  const contextValue = React.useMemo(
    () => ({
      x,
      y,
      strategy,
      refs,
      open,
      context,
      getReferenceProps,
      getFloatingProps,
      animation: appliedAnimation,
    }),
    [context, getFloatingProps, getReferenceProps, refs, strategy, x, y, open, appliedAnimation],
  );

  // 5. return
  return (
    <SpeedDialContext.Provider value={contextValue}>
      <div className="group">
        <FloatingNode id={nodeId}>{children}</FloatingNode>
      </div>
    </SpeedDialContext.Provider>
  );
}

SpeedDial.propTypes = {
  open: propTypesOpen,
  handler: propTypesHanlder,
  placement: propTypesPlacement,
  offset: propTypesOffset,
  dismiss: propTypesDismiss,
  className: propTypesClassName,
  children: propTypesChildren,
  animate: propTypesAnimate,
};

SpeedDial.displayName = "MaterialTailwind.SpeedDial";

export { SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction };
export default Object.assign(SpeedDial, {
  Handler: SpeedDialHandler,
  Content: SpeedDialContent,
  Action: SpeedDialAction,
});
