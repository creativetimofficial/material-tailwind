import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const SelectContext = createContext(null);
SelectContext.displayName = "SelectContextProvider";

function useSelect() {
  const context = useContext(SelectContext);

  if (context === null) {
    throw new Error("useSelect() must be used within a Select");
  }

  return context;
}

function SelectContextProvider({ value, children }) {
  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
}

SelectContextProvider.propTypes = {
  value: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
};

export { SelectContextProvider, useSelect };
