import React from "react";

// framer-motion
import { motion } from "framer-motion";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs, setActive } from "./TabsContext";

// types
import type { value, className, disabled, children } from "../../types/components/tabs";
import {
  propTypesValue,
  propTypesClassName,
  propTypesDisabled,
  propTypesChildren,
} from "../../types/components/tabs";

export interface TabProps extends React.ComponentProps<"li"> {
  value: value;
  className?: className;
  disabled?: disabled;
  children: children;
}

export const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ value, className, disabled, children, ...rest }, ref) => {
    // 1. init
    const { tab: tabTheme } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tabTheme;
    const { state, dispatch } = useTabs();
    const { id, active, indicatorProps } = state;

    // 2. set default props
    className = className ?? defaultProps.className;
    disabled = disabled ?? defaultProps.disabled;

    // 3. set styles
    const tabClasses = twMerge(
      classnames(objectsToString(base.tab.initial), {
        [objectsToString(base.tab.disabled)]: disabled,
      }),
      className,
    );
    const indicatorClasses = twMerge(
      classnames(objectsToString(base.indicator)),
      indicatorProps?.className ?? "",
    );

    // 4. return
    return (
      <li
        {...rest}
        ref={ref}
        role="tab"
        className={tabClasses}
        onClick={(e) => {
          const onClick = rest?.onClick;

          if (typeof onClick === "function") {
            setActive(dispatch, value);
            onClick(e);
          }

          setActive(dispatch, value);
        }}
        data-value={value}
      >
        <div className="z-20">{children}</div>
        {active === value && (
          <motion.div
            {...indicatorProps}
            transition={{ duration: 0.5 }}
            className={indicatorClasses}
            layoutId={id}
          />
        )}
      </li>
    );
  },
);

Tab.propTypes = {
  value: propTypesValue,
  className: propTypesClassName,
  disabled: propTypesDisabled,
  children: propTypesChildren,
};

Tab.displayName = "MaterialTailwind.Tab";

export default Tab;
