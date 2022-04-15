import { forwardRef, cloneElement, useEffect, useMemo } from "react";
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
  useFocusTrap,
  FloatingPortal,
} from "@floating-ui/react-dom-interactions";
import mergeRefs from "react-merge-refs";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "utils/objectsToString";
import { useTheme } from "context/theme";

const Popover = forwardRef(
  (
    { open, handler, node, placement, offset, dismiss, animate, className, children, ...rest },
    ref,
  ) => {
    // 1. init
    const { popover } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = popover;

    // 2. set default props
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = className ?? defaultProps.className;

    // 3. set styles
    const popoverClasses = classnames(objectsToString(base), className);

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
      useFocusTrap(context),
    ]);

    useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }

      return null;
    }, [open, update, refs.reference, refs.floating]);

    const mergedRef = useMemo(() => mergeRefs([ref, floating]), [floating, ref]);
    const nodeMergedRef = useMemo(() => mergeRefs([node?.ref, reference]), [reference, node]);

    // 6. return
    return (
      <>
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
              <motion.div
                {...getFloatingProps({
                  ...rest,
                  ref: mergedRef,
                  className: popoverClasses,
                  style: {
                    position: strategy,
                    top: y ?? "",
                    left: x ?? "",
                  },
                  initial: "unmount",
                  exit: "unmount",
                  animate: open ? "mount" : "unmount",
                  variants: appliedAnimation,
                  "aria-labelledby": labelId,
                  "aria-describedby": descriptionId,
                })}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </>
    );
  },
);

Popover.propTypes = {
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

Popover.displayName = "Popover";

export default Popover;
