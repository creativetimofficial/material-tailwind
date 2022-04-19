import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const TabsHeader = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { tabsHeader } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = tabsHeader;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const tabsHeaderClasses = classnames(objectsToString(base), className);

  // 4. return
  return (
    <nav>
      <ul {...rest} ref={ref} role="tablist" className={tabsHeaderClasses}>
        {children}
      </ul>
    </nav>
  );
});

TabsHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TabsHeader.displayName = "TabsHeader";

export default TabsHeader;
