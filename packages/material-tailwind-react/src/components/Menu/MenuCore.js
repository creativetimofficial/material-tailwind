import React, {
  Children,
  cloneElement,
  isValidElement,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  useFloating,
  useFloatingTree,
  useFloatingNodeId,
  useFloatingParentNodeId,
  FloatingNode,
  FloatingPortal,
  useInteractions,
  offset as fuiOffset,
  flip,
  shift,
  useHover,
  useClick,
  useRole,
  useFocusTrap,
  useDismiss,
  safePolygon,
  useListNavigation,
  useTypeahead,
  autoUpdate,
} from "@floating-ui/react-dom-interactions";
import mergeRefs from "react-merge-refs";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "utils/objectsToString";
import { useTheme } from "context/theme";

const MenuCore = forwardRef(
  (
    { open, handler, node, placement, offset, dismiss, animate, className, children, ...rest },
    ref,
  ) => {
    // 1. init
    const { menu } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = menu;

    // 2. set default props
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = className ?? defaultProps.className;

    // 3. set styles
    const menuClasses = classnames(objectsToString(base), className);

    // 4. set animation
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

    // 5. set @floating-ui
    const [activeIndex, setActiveIndex] = useState(null);
    const listItemsRef = useRef([]);
    const listContentRef = useRef(
      Children.map(children, (child) => (isValidElement(child) ? child.props.children : null)),
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
      useFocusTrap(context, { inert: true }),
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

    useEffect(() => {
      if (open && refs.reference.current && refs.floating.current) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }

      return null;
    }, [open, nested, update, refs.reference, refs.floating]);

    useEffect(() => {
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

    useEffect(() => {
      tree?.events.emit("openChange", {
        open,
        parentId,
        reference: refs.reference.current,
      });
    }, [tree, open, parentId, refs.reference]);

    const mergedRef = useMemo(() => mergeRefs([ref, floating]), [floating, ref]);
    const nodeMergedRef = useMemo(() => mergeRefs([node?.ref, reference]), [reference, node]);

    // 5. return
    return (
      <FloatingNode id={nodeId}>
        {typeof node === "string" ? (
          <span
            {...getReferenceProps({
              ref: nodeMergedRef,
            })}
          >
            {node}
          </span>
        ) : (
          cloneElement(node, {
            ...getReferenceProps({
              ...node?.props,
              ref: nodeMergedRef,
            }),
          })
        )}
        <FloatingPortal>
          <AnimatePresence>
            {open && (
              <motion.ul
                {...getFloatingProps({
                  ...rest,
                  ref: mergedRef,
                  className: menuClasses,
                  style: {
                    position: strategy,
                    top: y ?? "",
                    left: x ?? "",
                  },
                  initial: "unmount",
                  exit: "unmount",
                  animate: open ? "mount" : "unmount",
                  variants: appliedAnimation,
                })}
              >
                {Children.map(
                  children,
                  (child, index) =>
                    isValidElement(child) &&
                    cloneElement(
                      child,
                      getItemProps({
                        ...child.props,
                        ref(nodeElement) {
                          listItemsRef.current[index] = nodeElement;
                        },
                      }),
                    ),
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </FloatingNode>
    );
  },
);

MenuCore.propTypes = {
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  node: PropTypes.node.isRequired,
  placement: PropTypes.oneOf([
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-start",
    "bottom",
    "bottom-end",
    "left-start",
    "left",
    "left-end",
  ]),
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      mainAxis: PropTypes.number,
      crossAxis: PropTypes.number,
      alignmentAxis: PropTypes.number,
    }),
  ]),
  dismiss: PropTypes.shape({
    enabled: PropTypes.bool,
    escapeKey: PropTypes.bool,
    referencePointerDown: PropTypes.bool,
    outsidePointerDown: PropTypes.bool,
    ancestorScroll: PropTypes.bool,
    bubbles: PropTypes.bool,
  }),
  animate: PropTypes.shape({
    mount: PropTypes.instanceOf(Object),
    unmount: PropTypes.instanceOf(Object),
  }),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

MenuCore.displayName = "MenuCore";

export default MenuCore;
