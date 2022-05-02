import React from "react";
import PropTypes from "prop-types";

// framer-motion
import { motion } from "framer-motion";

// utils
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";

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
    const { tab, setTab } = useTabs();
    const { active } = tab;

    // 2. set default props
    className = className ?? defaultProps.className;
    disabled = disabled ?? defaultProps.disabled;

    // 3. set styles
    const tabClasses = classnames(
      objectsToString(base.tab.initial),
      { [objectsToString(base.tab.disabled)]: disabled },
      className,
    );
    const indicatorClasses = classnames(objectsToString(base.indicator));

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
            setTab({ ...tab, active: value });
            onClick(e);
          }

          setTab({ ...tab, active: value });
        }}
        data-value={value}
      >
        <div className="z-20">{children}</div>
        {active === value && (
          <motion.div
            transition={{ duration: 0.5 }}
            className={indicatorClasses}
            layoutId="indicator"
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
