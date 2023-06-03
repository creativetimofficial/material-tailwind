// types
import type { contextValue, children } from "../../types/components/popover";
import type { Accessor } from "solid-js";
import { createContext, useContext } from "solid-js";
type TContext = Accessor<contextValue | null>;
export interface PopoverContextProviderProps {
  value: TContext;
  children: children;
}

export const PopoverContext = createContext<TContext>(() => null);

export function usePopover() {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error(
      "usePopover() must be used within a Popover. It happens when you use PopoverHandler or PopoverContent components outside the Popover component.",
    );
  }

  return context;
}

export const PopoverContextProvider = (props: PopoverContextProviderProps) => {
  return <PopoverContext.Provider {...props}>{props.children}</PopoverContext.Provider>;
};
