import React from "react";
import PropTypes from "prop-types";

// @floating-ui
import {
  useFloating,
  useInteractions,
  useClick,
  useRole,
  useDismiss,
  useId,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager,
  useMergeRefs,
} from "@floating-ui/react";

// framer-motion
import { AnimatePresence, m, domAnimation, LazyMotion } from "framer-motion";

// utils
import classnames from "classnames";
import merge from "deepmerge";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type {
  open,
  handler,
  size,
  dismiss,
  animate,
  className,
  children,
} from "../../types/components/dialog";
import {
  propTypesOpen,
  propTypesHandler,
  propTypesSize,
  propTypesDismiss,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/dialog";

// dialog components
import { DialogHeader, DialogHeaderProps } from "./DialogHeader";
import { DialogBody, DialogBodyProps } from "./DialogBody";
import { DialogFooter, DialogFooterProps } from "./DialogFooter";

export interface DialogProps extends React.ComponentProps<"div"> {
  open: open;
  handler: handler;
  size?: size;
  dismiss?: dismiss;
  animate?: animate;
  className?: className;
  children: children;
}

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ open, handler, size, dismiss, animate, className, children, ...rest }, ref) => {
    // 1. init
    const { dialog } = useTheme();
    const {
      defaultProps,
      valid,
      styles: { base, sizes },
    } = dialog;

    // 2. set default props
    handler = handler ?? undefined;
    size = size ?? defaultProps.size;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = className ?? defaultProps.className;

    // 3. set styles
    const backdropClasses = classnames(objectsToString(base.backdrop));
    const dialogClasses = twMerge(
      classnames(
        objectsToString(base.container),
        objectsToString(sizes[findMatch(valid.sizes, size, "md")]),
      ),
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
    const { floating, context } = useFloating({
      open,
      onOpenChange: handler,
    });

    const id = useId();
    const labelId = `${id}-label`;
    const descriptionId = `${id}-description`;

    const { getFloatingProps } = useInteractions([
      useClick(context),
      useRole(context),
      useDismiss(context, dismiss),
    ]);

    const mergedRef = useMergeRefs([ref, floating]);

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
    return (
      <LazyMotion features={domAnimation}>
        <FloatingPortal>
          <NewAnimatePresence>
            {open && (
              <FloatingOverlay
                style={{
                  zIndex: 9999,
                }}
                lockScroll
              >
                <FloatingFocusManager context={context}>
                  <m.div
                    className={size === "xxl" ? "" : backdropClasses}
                    initial="unmount"
                    exit="unmount"
                    animate={open ? "mount" : "unmount"}
                    variants={backdropAnimation}
                    transition={{ duration: 0.2 }}
                  >
                    <m.div
                      {...getFloatingProps({
                        ...rest,
                        ref: mergedRef,
                        className: dialogClasses,
                        "aria-labelledby": labelId,
                        "aria-describedby": descriptionId,
                      })}
                      initial="unmount"
                      exit="unmount"
                      animate={open ? "mount" : "unmount"}
                      variants={appliedAnimation}
                    >
                      {children}
                    </m.div>
                  </m.div>
                </FloatingFocusManager>
              </FloatingOverlay>
            )}
          </NewAnimatePresence>
        </FloatingPortal>
      </LazyMotion>
    );
  },
);

Dialog.propTypes = {
  open: propTypesOpen,
  handler: propTypesHandler,
  size: PropTypes.oneOf(propTypesSize),
  dismiss: propTypesDismiss,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

Dialog.displayName = "MaterialTailwind.Dialog";

export type { DialogHeaderProps, DialogBodyProps, DialogFooterProps };
export { Dialog, DialogHeader, DialogBody, DialogFooter };
export default Object.assign(Dialog, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
});
