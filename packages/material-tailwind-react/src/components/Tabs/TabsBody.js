import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const TabsBody = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { tabsBody } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = tabsBody;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const tabsBodyClasses = classnames(objectsToString(base), className);

  // 4. return
  return (
    <div {...rest} ref={ref} className={tabsBodyClasses}>
      {children}
    </div>
  );
});

TabsBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TabsBody.displayName = "TabsBody";

export default TabsBody;
