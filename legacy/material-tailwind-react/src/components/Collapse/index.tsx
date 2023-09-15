import React from "react";

// framer-motion components
import {
  AnimatePresence,
  AnimatePresenceProps,
  m,
  MotionProps,
  LazyMotion,
  domAnimation,
} from "framer-motion";

// @floating-ui
import { useMergeRefs } from "@floating-ui/react";

// utils
import merge from "deepmerge";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import {
  open,
  animate,
  className,
  children,
  propTypesAnimate,
} from "../../types/components/collapse";
import {
  propTypesOpen,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/collapse";

export interface CollapseProps extends Omit<MotionProps, "animate"> {
  open: open;
  animate?: animate;
  className?: className;
  children: children;
}

interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  ({ open, animate, className, children, ...rest }, ref) => {
    // 1. init
    const mobileNavRef = React.useRef(null);
    const { collapse } = useTheme();
    const { styles } = collapse;
    const { base } = styles;

    // 2. set default props
    animate = animate ?? {};
    className = className ?? "";

    // 3. set styles
    const classes = twMerge(classnames(objectsToString(base)), className);

    // 4. set animations
    const mainAnimation = {
      unmount: {
        height: "0px",
        transition: { duration: 0.3, times: [0.4, 0, 0.2, 1] },
      },
      mount: {
        height: "auto",
        transition: { duration: 0.3, times: [0.4, 0, 0.2, 1] },
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 5. set refs
    const mergedRef = useMergeRefs([ref, mobileNavRef]);

    // 6. return
    return (
      <LazyMotion features={domAnimation}>
        <NewAnimatePresence>
          <m.div
            {...rest}
            ref={mergedRef}
            className={classes}
            initial="unmount"
            exit="unmount"
            animate={open ? "mount" : "unmount"}
            variants={appliedAnimation}
          >
            {children}
          </m.div>
        </NewAnimatePresence>
      </LazyMotion>
    );
  },
);

Collapse.displayName = "MaterialTailwind.Collapse";

Collapse.propTypes = {
  open: propTypesOpen,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

export default Collapse;
