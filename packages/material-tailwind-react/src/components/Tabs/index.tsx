import React from "react";

// utils
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { TabsContextProvider, useTabs } from "./TabsContext";

// tabs components
import { Tab, TabProps } from "./Tab";
import { TabsBody, TabsBodyProps } from "./TabsBody";
import { TabsHeader, TabsHeaderProps } from "./TabsHeader";
import { TabPanel, TabPanelProps } from "./TabPanel";

// types
import type { value, className, children } from "../../types/components/tabs";
import { propTypesValue, propTypesClassName, propTypesChildren } from "../../types/components/tabs";

export interface TabsProps extends React.ComponentProps<"div"> {
  value: value;
  className?: className;
  children: children;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, className, children, ...rest }, ref) => {
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
  },
);

Tabs.propTypes = {
  value: propTypesValue,
  className: propTypesClassName,
  children: propTypesChildren,
};

Tabs.displayName = "MaterialTailwind.Tabs";

export type { TabProps, TabsBodyProps, TabsHeaderProps, TabPanelProps };
export { Tabs, Tab, TabsBody, TabsHeader, TabPanel, useTabs };
export default Object.assign(Tabs, { Tab, Body: TabsBody, Header: TabsHeader, Panel: TabPanel });
