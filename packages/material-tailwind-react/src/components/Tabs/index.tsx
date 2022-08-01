import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
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
import type { id, value, className, children } from "../../types/components/tabs";
import {
  propTypesId,
  propTypesValue,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/tabs";

export interface TabsProps extends React.ComponentProps<"div" | any> {
  id: id;
  value: value;
  className?: className;
  children: children;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ id, value, className, children, ...rest }, ref) => {
    // 1. init
    const { tabs } = useTheme();
    const {
      defaultProps,
      styles: { base },
    } = tabs;

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const tabsClasses = twMerge(classnames(objectsToString(base)), className);

    // 4. return
    return (
      <TabsContextProvider id={id} value={value}>
        <div {...rest} ref={ref} className={tabsClasses}>
          {children}
        </div>
      </TabsContextProvider>
    );
  },
);

Tabs.propTypes = {
  id: propTypesId,
  value: propTypesValue,
  className: propTypesClassName,
  children: propTypesChildren,
};

Tabs.displayName = "MaterialTailwind.Tabs";

export type { TabProps, TabsBodyProps, TabsHeaderProps, TabPanelProps };
export { Tabs, Tab, TabsBody, TabsHeader, TabPanel, useTabs };
export default Object.assign(Tabs, { Tab, Body: TabsBody, Header: TabsHeader, Panel: TabPanel });
