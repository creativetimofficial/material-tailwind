import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

// types
import {
  value as valueType,
  animate,
  children,
  propTypesValue,
  indicatorProps,
} from "../../types/components/tabs";
import { propTypesChildren, propTypesIndicator } from "../../types/components/tabs";

export interface TabsContextType {
  tab: {
    active: valueType;
    appliedAnimation: animate;
    indicatorProps: indicatorProps;
  };
  setTab: React.Dispatch<
    React.SetStateAction<{
      active: valueType;
      appliedAnimation: animate;
      indicatorProps: indicatorProps;
    }>
  >;
}

export interface TabsContextProviderProps {
  value: valueType;
  children: children;
}

export const TabsContext = createContext<TabsContextType | null>(null);
TabsContext.displayName = "MaterialTailwind.TabsContext";

export function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      "useTabs() must be used within a Tabs. It happens when you use TabsHeader, TabsBody, Tab or TabPanel outside the Tabs component.",
    );
  }

  return context;
}

export const TabsContextProvider = ({ value, children }: TabsContextProviderProps) => {
  const [tab, setTab] = useState({
    active: value,
    appliedAnimation: {
      unmount: {},
      mount: {},
    },
  });

  const contextValue = useMemo(() => ({ tab, setTab }), [tab]);

  return <TabsContext.Provider value={contextValue as any}>{children}</TabsContext.Provider>;
};

TabsContextProvider.propTypes = {
  value: propTypesValue,
  children: propTypesChildren,
};

TabsContextProvider.displayName = "MaterialTailwind.TabsContextProvider";
