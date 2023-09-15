import React from "react";

// framer-motion
import { m, MotionProps, domAnimation, LazyMotion } from "framer-motion";

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
        height: "auto",
        transition: { duration: 0.2, times: [0.4, 0, 0.2, 1] },
      },
    };

    const mainAnimation = {
      unmount: {
        transition: { duration: 0.3, ease: "linear" },
      },
      mount: {
        transition: { duration: 0.3, ease: "linear" },
      },
    };

    const appliedAnimation = merge(mainAnimation, animate);

    // 5. return
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          className="overflow-hidden"
          initial="unmount"
          exit="unmount"
          animate={open ? "mount" : "unmount"}
          variants={heightAnimation}
        >
          <m.div
            {...rest}
            ref={ref}
            className={bodyClasses}
            initial="unmount"
            exit="unmount"
            animate={open ? "mount" : "unmount"}
            variants={appliedAnimation}
          >
            {children}
          </m.div>
        </m.div>
      </LazyMotion>
    );
  },
);

AccordionBody.propTypes = {
  className: propTypesClassName,
  children: propTypesChildren,
};

AccordionBody.displayName = "MaterialTailwind.AccordionBody";

export default AccordionBody;
