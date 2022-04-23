import React, { forwardRef, cloneElement, useMemo } from "react";
import PropTypes from "prop-types";

// @floating-ui
import {
  useFloating,
  useInteractions,
  useClick,
  useFocusTrap,
  useRole,
  useDismiss,
  useId,
  FloatingPortal,
  FloatingOverlay,
} from "@floating-ui/react-dom-interactions";

// framer-motion
import { AnimatePresence, motion } from "framer-motion";

// utils
import mergeRefs from "react-merge-refs";
import classnames from "classnames";
import merge from "deepmerge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// dialog components
import DialogHeader from "./DialogHeader";
import DialogBody from "./DialogBody";
import DialogFooter from "./DialogFooter";

const Dialog = forwardRef(
  ({ open, handler, node, size, dismiss, animate, className, children, ...rest }, ref) => {
    // 1. init
    const { dialog } = useTheme();
    const {
      defaultProps,
      valid,
      styles: { base, sizes },
    } = dialog;

    // 2. set default props
    size = size ?? defaultProps.size;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = className ?? defaultProps.className;

    // 3. set styles
    const backdropClasses = classnames(objectsToString(base.backdrop));
    const dialogClasses = classnames(
      objectsToString(base.container),
      objectsToString(sizes[findMatch(valid.sizes, size, "md")]),
      className,
    );

    // 4. set animation
    const animation = {
      unmount: {
        opacity: 0,
        y: -50,
        transition: {
          duration: 0.3,
        },
      },
      mount: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      },
    };
    const backdropAnimation = {
      unmount: {
        opacity: 0,
        transition: {
          delay: 0.2,
        },
      },
      mount: {
        opacity: 1,
      },
    };
    const appliedAnimation = merge(animation, animate);

    // 5. set @floating-ui
    const { reference, floating, context } = useFloating({
      open,
      onOpenChange: handler,
    });

    const id = useId();
    const labelId = `${id}-label`;
    const descriptionId = `${id}-description`;

    const { getReferenceProps, getFloatingProps } = useInteractions([
      useClick(context),
      useFocusTrap(context),
      useRole(context),
      useDismiss(context, dismiss),
    ]);

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
              <FloatingOverlay lockScroll>
                <motion.div
                  className={size === "xxl" ? "" : backdropClasses}
                  initial="unmount"
                  exit="unmount"
                  animate={open ? "mount" : "unmount"}
                  variants={backdropAnimation}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    {...getFloatingProps({
                      ...rest,
                      ref: mergedRef,
                      className: dialogClasses,
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
                </motion.div>
              </FloatingOverlay>
            )}
          </AnimatePresence>
        </FloatingPortal>
      </>
    );
  },
);

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  node: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "xxl"]),
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

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;

Dialog.displayName = "Dialog";

export { Dialog, DialogHeader, DialogBody, DialogFooter };
export default Object.assign(Dialog, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
});
