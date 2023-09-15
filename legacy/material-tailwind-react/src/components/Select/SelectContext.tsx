import React from "react";

// framer-motion
import { useIsomorphicLayoutEffect } from "framer-motion";

// types
import type { contextValue, children } from "../../types/components/select";
import { propTypesContextValue, propTypesChildren } from "../../types/components/select";

export type SelectContextType = contextValue;

export interface SelectContextProviderProps {
  value: contextValue;
  children: children;
}

export const SelectContext = React.createContext<SelectContextType | null>(null);
SelectContext.displayName = "MaterialTailwind.SelectContext";

export function useSelect() {
  const context = React.useContext(SelectContext);

  if (context === null) {
    throw new Error(
      "useSelect() must be used within a Select. It happens when you use SelectOption component outside the Select component.",
    );
  }

  return context;
}

export function usePrevious<T>(value: T) {
  const ref = React.useRef<T>();

  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export const SelectContextProvider = ({ value, children }: SelectContextProviderProps) => {
  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
};

SelectContextProvider.propTypes = {
  value: propTypesContextValue,
  children: propTypesChildren,
};

SelectContextProvider.displayName = "MaterialTailwind.SelectContextProvider";
