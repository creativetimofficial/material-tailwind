import React from "react";

// framer-motion
import { AnimatePresence, m, LazyMotion, domAnimation } from "framer-motion";

// @floating-ui
import { useMergeRefs } from "@floating-ui/react";

// context
import { useSpeedDial } from "./index";
import { useTheme } from "../../context/theme";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import { propTypesChildren, propTypesClassName } from "../../types/components/speedDial";
import type { NewAnimatePresenceProps } from "../../types/generic";

export interface SpeedDialContentProps extends React.ComponentProps<"div"> {}

export const SpeedDialContent = React.forwardRef<HTMLDivElement, SpeedDialContentProps>(
  ({ children, className, ...rest }, ref) => {
    // 1. init
    const {
      speedDialContent: { styles },
    } = useTheme();
    const { x, y, refs, open, strategy, getFloatingProps, animation } = useSpeedDial();
    const mergedRefs = useMergeRefs([ref, refs.setFloating]);

    // 2. set styles
    const classes = twMerge(objectsToString(styles), className);

    // 3. create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 4. return
    return (
      <LazyMotion features={domAnimation}>
        <NewAnimatePresence>
          {open && (
            <div
              {...rest}
              ref={mergedRefs}
              className={classes}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
              }}
              {...getFloatingProps()}
            >
              {React.Children.map(children, (child: React.ReactElement) => (
                <m.div
                  initial="unmount"
                  exit="unmount"
                  animate={open ? "mount" : "unmount"}
                  variants={animation}
                >
                  {child}
                </m.div>
              ))}
            </div>
          )}
        </NewAnimatePresence>
      </LazyMotion>
    );
  },
);

SpeedDialContent.propTypes = {
  children: propTypesChildren,
  className: propTypesClassName,
};

SpeedDialContent.displayName = "MaterialTailwind.SpeedDialContent";

export default SpeedDialContent;
