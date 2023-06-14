// types
import type { Accessor, JSXElement } from "solid-js";
import { createContext, useContext } from "solid-js";
import type { contextValue } from "../../types/components/select";

export type SelectContextType = Accessor<contextValue> | (() => null);

export interface SelectContextProviderProps {
  value: SelectContextType;
  children: JSXElement;
}

export const SelectContext = createContext<SelectContextType>(() => null);

export function useSelect() {
  const context = useContext(SelectContext);

  if (context === null) {
    throw new Error(
      "useSelect() must be used within a Select. It happens when you use SelectOption component outside the Select component.",
    );
  }

  return context;
}

export function usePrevious() {
  const context = useSelect();
  return context()?.prevActiveIndex;
}

export const SelectContextProvider = (props: SelectContextProviderProps) => {
  return <SelectContext.Provider {...props}>{props.children}</SelectContext.Provider>;
};
