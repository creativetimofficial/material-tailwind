import React from "react";
import PropTypes from "prop-types";

// @floating-ui
import {
  useFloating,
  useFloatingTree,
  useFloatingNodeId,
  useFloatingParentNodeId,
  FloatingNode,
  useInteractions,
  offset as fuiOffset,
  flip,
  shift,
  useHover,
  useClick,
  useRole,
  useDismiss,
  safePolygon,
  useListNavigation,
  useTypeahead,
  autoUpdate,
} from "@floating-ui/react-dom-interactions";

// utils
import merge from "deepmerge";

// context
import { useTheme } from "../../context/theme";
import { MenuContextProvider } from "./MenuContext";

// types
import type {
  open,
  handler,
  placement,
  offset,
  dismiss,
  animate,
  lockScroll,
  children,
} from "../../types/components/menu";
import {
  propTypesOpen,
  propTypesHandler,
  propTypesPlacement,
  propTypesOffset,
  propTypesDismiss,
  propTypesAnimate,
  propTypesLockScroll,
  propTypesChildren,
} from "../../types/components/menu";

export interface MenuProps {
  open?: open;
  handler?: handler;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  lockScroll?: lockScroll;
  children: children;
}

export const MenuCore = React.forwardRef<HTMLDivElement, MenuProps>(
  ({ open, handler, placement, offset, dismiss, animate, lockScroll, children }, ref) => {
    // 1. init
    const { menu } = useTheme();
    const { defaultProps } = menu;
    const [internalOpen, setInternalOpen] = React.useState(false);

    // 2. set default props
    open = open ?? internalOpen;
    handler = handler ?? setInternalOpen;
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    lockScroll = lockScroll ?? defaultProps.lockScroll;

    // 3. set animation
    const animation = {
      unmount: {
        opacity: 0,
        transformOrigin: "top",
        transform: "scale(0.95)",
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
      mount: {
        opacity: 1,
        transformOrigin: "top",
        transform: "scale(1)",
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
    };
    const appliedAnimation = merge(animation, animate);

    // 4. set @floating-ui
    const [activeIndex, setActiveIndex] = React.useState(null);
    const listItemsRef = React.useRef([]);
    const listContentRef = React.useRef(
      React.Children.map(children, (child) =>
        React.isValidElement(child) ? child.props.children : null,
      ),
    );

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const nested = parentId != null;

    const { x, y, reference, floating, strategy, refs, update, context } = useFloating({
      open,
      onOpenChange: handler,
      middleware: [fuiOffset(offset), flip(), shift()],
      placement,
      nodeId,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
      useHover(context, {
        handleClose: safePolygon(),
        enabled: nested,
      }),
      useClick(context),
      useRole(context, { role: "menu" }),
      useDismiss(context, dismiss),
      useListNavigation(context, {
        listRef: listItemsRef,
        activeIndex,
        nested,
        onNavigate: setActiveIndex,
      }),
      useTypeahead(context, {
        listRef: listContentRef,
        onMatch: open ? setActiveIndex : undefined,
        activeIndex,
      }),
    ]);

    React.useEffect(() => {
      if (open && refs.reference.current && refs.floating.current) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }
    }, [open, nested, update, refs.reference, refs.floating]);

    React.useEffect(() => {
      function onTreeOpenChange({ openElement, referenceElement, parentElementId }) {
        if (parentElementId !== nodeId) {
          return;
        }

        listItemsRef.current.forEach((item) => {
          if (item && item !== referenceElement) {
            item.style.pointerEvents = openElement ? "none" : "";
          }
        });
      }

      tree.events.on("openChange", onTreeOpenChange);

      return () => {
        tree.events.off("openChange", onTreeOpenChange);
      };
    }, [nodeId, tree.events, refs.reference, refs.floating]);

    React.useEffect(() => {
      tree?.events.emit("openChange", {
        open,
        parentId,
        reference: refs.reference.current,
      });
    }, [tree, open, parentId, refs.reference]);

    const contextValue = React.useMemo(
      () => ({
        open,
        handler,
        setInternalOpen,
        strategy,
        x,
        y,
        reference,
        floating,
        listItemsRef,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        appliedAnimation,
        lockScroll,
        context,
      }),
      [
        open,
        handler,
        setInternalOpen,
        strategy,
        x,
        y,
        reference,
        floating,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        appliedAnimation,
        lockScroll,
        context,
      ],
    );

    // 5. return
    return (
      <MenuContextProvider value={contextValue}>
        <FloatingNode id={nodeId}>{children}</FloatingNode>
      </MenuContextProvider>
    );
  },
);

MenuCore.propTypes = {
  open: propTypesOpen,
  handler: propTypesHandler,
  placement: PropTypes.oneOf(propTypesPlacement),
  offset: propTypesOffset,
  dismiss: propTypesDismiss,
  animate: propTypesAnimate,
  lockScroll: propTypesLockScroll,
  children: propTypesChildren,
};

MenuCore.displayName = "MaterialTailwind.MenuCore";

export default MenuCore;
