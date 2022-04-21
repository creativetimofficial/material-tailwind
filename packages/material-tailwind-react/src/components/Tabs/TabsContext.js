import React, { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const TabsContext = createContext(null);
TabsContext.displayName = "TabsContextProvider";

function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs() must be used within a Tabs.");
  }

  return context;
}

function TabsContextProvider({ value, children }) {
  const [active, setActive] = useState(value);

  const contextValue = useMemo(() => [active, setActive], [active]);

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
}

TabsContextProvider.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { TabsContextProvider, useTabs };
