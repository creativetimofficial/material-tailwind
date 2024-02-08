import React from "react";

// framer-motion
import { useIsomorphicLayoutEffect } from "framer-motion";

// utils
import merge from "deepmerge";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs, setAnimation } from "./TabsContext";

// types
import type { animate, className, children } from "../../types/components/tabs";
import {
  propTypesAnimate,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/tabs";

export interface TabsBodyProps extends React.ComponentProps<"div"> {
  animate?: animate;
  className?: className;
  children: children;
}

export const TabsBody = React.forwardRef<HTMLDivElement, TabsBodyProps>(
  ({ animate, className, children, ...rest }, ref) => {
    // 1. init
    const { tabsBody } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tabsBody;
    const { dispatch } = useTabs();

    // 2. set default props
    animate = animate ?? defaultProps.animate;
    className = twMerge(defaultProps.className || "", className);
    // 3. set styles
    const tabsBodyClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. set animation
    const mainAnimation = React.useMemo(
      () => ({
        initial: {
          opacity: 0,
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
          transition: { duration: 0 },
        },
        unmount: {
          opacity: 0,
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: 1,
          transition: { duration: 0.5, times: [0.4, 0, 0.2, 1] },
        },
        mount: {
          opacity: 1,
          position: "relative",
          zIndex: 2,
          transition: { duration: 0.5, times: [0.4, 0, 0.2, 1] },
        },
      }),
      [],
    );

    const appliedAnimation = React.useMemo(
      () => merge(mainAnimation, animate),
      [animate, mainAnimation],
    );

    useIsomorphicLayoutEffect(() => {
      setAnimation(dispatch, appliedAnimation);
    }, [appliedAnimation, dispatch]);

    // 5. return
    return (
      <div {...rest} ref={ref} className={tabsBodyClasses}>
        {children}
      </div>
    );
  },
);

TabsBody.propTypes = {
  animate: propTypesAnimate,
  className: propTypesClassName,
  children: propTypesChildren,
};

TabsBody.displayName = "MaterialTailwind.TabsBody";

export default TabsBody;
