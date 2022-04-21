import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// framer-motion
import { motion } from "framer-motion";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";
import { useTabs } from "components/Tabs/TabsContext";

const Tab = forwardRef(({ value, className, disabled, children, ...rest }, ref) => {
  // 1. init
  const { tab } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = tab;
  const [active, setActive] = useTabs();

  // 2. set default props
  className = className ?? defaultProps.className;
  disabled = disabled ?? defaultProps.disabled;

  // 3. set styles
  const tabClasses = classnames(
    objectsToString(base.tab),
    // { [objectsToString(base.disabled)]: disabled },
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
      disabled={disabled}
      onClick={(e) => {
        const onClick = rest?.onClick;

        if (typeof onClick === "function") {
          setActive(value);
          onClick(e);
        }

        setActive(value);
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
});

Tab.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Tab.displayName = "Tab";

export default Tab;
