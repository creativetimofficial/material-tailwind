import React from "react";

// framer-motion
import { AnimatePresence, m, MotionProps, LazyMotion, domAnimation } from "framer-motion";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";

// types
import type { NewAnimatePresenceProps } from "../../types/generic";
import type { value, className, children } from "../../types/components/tabs";
import { propTypesValue, propTypesClassName, propTypesChildren } from "../../types/components/tabs";

export interface TabPanelProps extends MotionProps {
  value: value;
  className?: className;
  children: children;
}

export const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ value, className, children, ...rest }, ref) => {
    // 1. init
    const { tabPanel } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tabPanel;
    const { state } = useTabs();
    const { active, appliedAnimation, isInitial } = state;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const tabPanelClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. Create an instance of AnimatePresence because of the types issue with the children
    const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

    // 5. return
    return (
      <LazyMotion features={domAnimation}>
        <NewAnimatePresence exitBeforeEnter>
          <m.div
            {...rest}
            ref={ref}
            role="tabpanel"
            className={tabPanelClasses}
            initial="unmount"
            exit="unmount"
            animate={active === value ? "mount" : isInitial ? "initial" : "unmount"}
            variants={appliedAnimation}
            data-value={value}
          >
            {children}
          </m.div>
        </NewAnimatePresence>
      </LazyMotion>
    );
  },
);

TabPanel.propTypes = {
  value: propTypesValue,
  className: propTypesClassName,
  children: propTypesChildren,
};

TabPanel.displayName = "MaterialTailwind.TabPanel";

export default TabPanel;
