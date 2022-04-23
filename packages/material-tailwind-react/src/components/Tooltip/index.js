import React, { forwardRef, cloneElement, useEffect, useMemo } from "react";
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
  useClick,
  useHover,
  useFocus,
  FloatingPortal,
} from "@floating-ui/react-dom-interactions";

// framer-motion
import { AnimatePresence, motion } from "framer-motion";

// utils
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

const Tooltip = forwardRef(
  (
    { open, handler, content, placement, offset, dismiss, animate, className, children, ...rest },
    ref,
  ) => {
    // 1. init
    const { tooltip } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tooltip;

    // 2. set default props
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = className ?? defaultProps.className;

    // 3. set styles
    const tooltipClasses = classnames(objectsToString(base), className);

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

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useClick(context),
      useHover(context),
      useFocus(context),
      useRole(context, { role: "tooltip" }),
      useDismiss(context, dismiss),
    ]);

    useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }
    }, [open, update, refs.reference, refs.floating]);

    const mergedRef = useMemo(() => mergeRefs([ref, floating]), [floating, ref]);
    const childMergedRef = useMemo(() => mergeRefs([ref, reference]), [reference, ref]);

    // 6. return
    return (
      <>
        {typeof children === "string" ? (
          <span
            {...getReferenceProps({
              ref: childMergedRef,
            })}
          >
            {children}
          </span>
        ) : (
          cloneElement(children, {
            ...getReferenceProps({
              ...children?.props,
              ref: childMergedRef,
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
                  className: tooltipClasses,
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
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </>
    );
  },
);

Tooltip.propTypes = {
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
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

Tooltip.displayName = "Tooltip";

export { Tooltip };
export default Tooltip;
