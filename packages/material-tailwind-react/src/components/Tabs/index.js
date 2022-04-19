import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";
import { TabsContextProvider } from "components/Tabs/TabsContext";

// tabs components
import Tab from "components/Tabs/Tab";
import TabsBody from "components/Tabs/TabsBody";
import TabsHeader from "components/Tabs/TabsHeader";
import TabPanel from "components/Tabs/TabPanel";

const Tabs = forwardRef(({ value, className, children, ...rest }, ref) => {
  // 1. init
  const { tabs } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = tabs;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const tabsClasses = classnames(objectsToString(base), className);

  return (
    <TabsContextProvider value={value}>
      <div {...rest} ref={ref} className={tabsClasses}>
        {children}
      </div>
    </TabsContextProvider>
  );
});

Tabs.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tabs.displayName = "Tabs";
Tabs.Tab = Tab;
Tabs.Body = TabsBody;
Tabs.Header = TabsHeader;
Tabs.Panel = TabPanel;

export { Tabs, Tab, TabsBody, TabsHeader, TabPanel };
export default Tabs;
