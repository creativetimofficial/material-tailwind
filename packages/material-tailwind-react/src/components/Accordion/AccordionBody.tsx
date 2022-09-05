import React from "react";

// framer-motion
import { motion, MotionProps } from "framer-motion";

// utils
import classnames from "classnames";
import merge from "deepmerge";
import objectsToString from "../../utils/objectsToString";
import { twMerge } from "tailwind-merge";

// context
import { useAccordion } from "./AccordionContext";
import { useTheme } from "../../context/theme";

// types
import type { className, children } from "../../types/components/accordion";
import { propTypesClassName, propTypesChildren } from "../../types/components/accordion";

export interface AccordionBodyProps extends MotionProps {
  className?: className;
  children: children;
  [key: string]: any;
}

export const AccordionBody = React.forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { open, animate } = useAccordion();
    const { accordion } = useTheme();
    const {
      styles: { base },
    } = accordion;
    const bodyEl = React.useRef(null);
    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
      setHeight(bodyEl.current?.scrollHeight);
    }, []);

    // 2. set default props
    className = className ?? "";

    // 3. set styles
    const bodyClasses = twMerge(classnames(objectsToString(base.body)), className);

    // 4. set animation
    const heightAnimation = {
      unmount: {
        height: "0px",
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
      mount: {
        height: `${height + 10}px`,
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
    };

    const mainAnimation = {
      unmount: {
        opacity: 0,
        transition: { duration: 0.3, ease: "linear" },
      },
      mount: {
        opacity: 1,
        transition: { duration: 0.3, ease: "linear" },
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);

    // 5. return
    return (
      <motion.div
        className="overflow-hidden"
        ref={bodyEl}
        initial="unmount"
        exit="unmount"
        animate={open ? "mount" : "unmount"}
        variants={heightAnimation}
      >
        <motion.div
          {...rest}
          ref={ref}
          className={bodyClasses}
          initial="unmount"
          exit="unmount"
          animate={open ? "mount" : "unmount"}
          variants={appliedAnimation}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  },
);

AccordionBody.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

AccordionBody.displayName = "MaterialTailwind.AccordionBody";

export default AccordionBody;
