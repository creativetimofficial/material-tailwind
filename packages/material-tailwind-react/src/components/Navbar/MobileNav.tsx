import React from "react";

// framer-motion components
import { AnimatePresence, AnimatePresenceProps, motion, MotionProps } from "framer-motion";

// utils
import merge from "deepmerge";
import classnames from "classnames";
import mergeRefs from "react-merge-refs";
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
} from "../../types/components/navbar";
import {
  propTypesOpen,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/navbar";

export interface MobileNavProps extends Omit<MotionProps, "animate"> {
  open: open;
  animate?: animate;
  className?: className;
  children: children;
}

interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

export const MobileNav = React.forwardRef<HTMLDivElement, MobileNavProps>(
  ({ open, animate, className, children, ...rest }, ref) => {
    // 1. init
    const mobileNavRef = React.useRef(null);
    const { navbar } = useTheme();
    const { styles } = navbar;
    const {
      base: { mobileNav },
    } = styles;

    // 2. set default props
    animate = animate ?? {};
    className = className ?? "";

    // 3. set styles
    const classes = twMerge(classnames(objectsToString(mobileNav)), className);

    // 4. set animations
    const mainAnimation = {
      unmount: {
        height: 0,
        opacity: 0,
        transition: { duration: 0.3, times: "[0.4, 0, 0.2, 1]" },
      },
      mount: {
        opacity: 1,
        height: `${mobileNavRef.current?.scrollHeight}px`,
        transition: { duration: 0.3, times: "[0.4, 0, 0.2, 1]" },
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 5. set refs
    const mergedRef = React.useMemo(() => mergeRefs([ref, mobileNavRef]), [ref, mobileNavRef]);

    // 6. return
    return (
      <NewAnimatePresence>
        <motion.div
          {...rest}
          ref={mergedRef}
          className={classes}
          initial="unmount"
          exit="unmount"
          animate={open ? "mount" : "unmount"}
          variants={appliedAnimation}
        >
          {children}
        </motion.div>
      </NewAnimatePresence>
    );
  },
);

MobileNav.displayName = "MaterialTailwind.MobileNav";

MobileNav.propTypes = {
  open: propTypesOpen,
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

export default MobileNav;
