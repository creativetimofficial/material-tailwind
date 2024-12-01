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
  useClick,
  useHover,
  useFocus,
  FloatingPortal,
  useMergeRefs,
} from "@floating-ui/react";

// framer-motion
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import merge from "deepmerge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type {
  open,
  handler,
  content,
  interactive,
  placement,
  offset,
  dismiss,
  animate,
  className,
  children,
} from "../../types/components/popover";
import {
  propTypesOpen,
  propTypesHandler,
  propTypesContent,
  propTypesInteractive,
  propTypesPlacement,
  propTypesOffset,
  propTypesDismiss,
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/popover";

export interface TooltipProps extends React.ComponentProps<any> {
  open?: open;
  handler?: handler;
  content?: content;
  interactive?: interactive;
  placement?: placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate;
  className?: className;
  children: children | React.ComponentProps<any>;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      open,
      handler,
      content,
      interactive,
      placement,
      offset,
      dismiss,
      animate,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { tooltip } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tooltip;
    const [internalOpen, setInternalOpen] = React.useState(false);

    // 2. set default props
    open = open ?? internalOpen;
    handler = handler ?? setInternalOpen;
    interactive = interactive ?? defaultProps.interactive;
    placement = placement ?? defaultProps.placement;
    offset = offset ?? defaultProps.offset;
    dismiss = dismiss ?? defaultProps.dismiss;
    animate = animate ?? defaultProps.animate;
    className = twMerge(defaultProps.className || "", className);

    // 3. set styles
    const tooltipClasses = twMerge(classnames(objectsToString(base)), className);

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
      useClick(context, {
        enabled: interactive,
      }),
      useFocus(context),
      useHover(context),
      useRole(context, { role: "tooltip" }),
      useDismiss(context, dismiss),
    ]);

    React.useEffect(() => {
      if (refs.reference.current && refs.floating.current && open) {
        return autoUpdate(refs.reference.current, refs.floating.current, update);
      }
    }, [open, update, refs.reference, refs.floating]);

    const mergedRef = useMergeRefs([ref, floating]);
    const childMergedRef = useMergeRefs([ref, reference]);

    // 6. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 7. return
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
          React.cloneElement(children, {
            ...getReferenceProps({
              ...children?.props,
              ref: childMergedRef,
            }),
          })
        )}
        <LazyMotion features={domAnimation}>
          <FloatingPortal>
            <NewAnimatePresence>
              {open && (
                <m.div
                  {...getFloatingProps({
                    ...rest,
                    ref: mergedRef,
                    className: tooltipClasses,
                    style: {
                      position: strategy,
                      top: y ?? "",
                      left: x ?? "",
                    },
                  })}
                  initial="unmount"
                  exit="unmount"
                  animate={open ? "mount" : "unmount"}
                  variants={appliedAnimation}
                >
                  {content}
                </m.div>
              )}
            </NewAnimatePresence>
          </FloatingPortal>
        </LazyMotion>
      </>
    );
  },
);

Tooltip.propTypes = {
  open: propTypesOpen,
  handler: propTypesHandler,
  content: propTypesContent,
  interactive: propTypesInteractive,
  placement: PropTypes.oneOf(propTypesPlacement),
  offset: propTypesOffset,
  dismiss: propTypesDismiss,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

Tooltip.displayName = "MaterialTailwind.Tooltip";

export default Tooltip;
