import React from "react";

// @floating-ui
import { FloatingPortal, FloatingFocusManager, useMergeRefs } from "@floating-ui/react";

// framer-motion
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { usePopover } from "./PopoverContext";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type { className, children } from "../../types/components/popover";
import { propTypesClassName, propTypesChildren } from "../../types/components/popover";

export interface PopoverContentProps extends React.ComponentProps<"div"> {
  className?: className;
  children: children;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, ...rest }, ref) => {
    // 1. init
    const { popover } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = popover;
    const {
      open,
      strategy,
      x,
      y,
      context,
      floating,
      getFloatingProps,
      appliedAnimation,
      labelId,
      descriptionId,
    } = usePopover();

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const popoverClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. set refs
    const mergedRef = useMergeRefs([ref, floating]);

    // 5. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 6. return
    return (
      <LazyMotion features={domAnimation}>
        <FloatingPortal>
          <NewAnimatePresence>
            {open && (
              <FloatingFocusManager context={context}>
                <m.div
                  {...getFloatingProps({
                    ...rest,
                    ref: mergedRef,
                    className: popoverClasses,
                    style: {
                      position: strategy,
                      top: y ?? "",
                      left: x ?? "",
                    },
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
              </FloatingFocusManager>
            )}
          </NewAnimatePresence>
        </FloatingPortal>
      </LazyMotion>
    );
  },
);

PopoverContent.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

PopoverContent.displayName = "MaterialTailwind.PopoverContent";

export default PopoverContent;
