// types
import type { ParentComponent } from "solid-js";
import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import type {
  animate,
  indicatorProps,
  isInitial,
  value as valueType,
} from "../../types/components/tabs";
import type { children, id, orientation } from "../../types/components/tabs";

export interface TabsContextValue {
  id: id;
  active: valueType;
  isInitial: isInitial;
  orientation: orientation;
  appliedAnimation: animate;
  indicatorProps: indicatorProps;
}
interface TabsContextSetter {
  setId(value: id): void;
  setActive(value: valueType): void;
  setAnimation(value: animate): void;
  setIndicator(value: indicatorProps): void;
  setIsInitial(value: isInitial): void;
  setOrientation(value: orientation): void;
}
export type TabsContextType = readonly [TabsContextValue, TabsContextSetter];
// dispatch: React.Dispatch<{
//   id: id;
//   active: valueType;
//   isInitial: isInitial;
//   orientation: orientation;
//   appliedAnimation: animate;
//   indicatorProps: indicatorProps;
// }>;

export interface TabsContextProviderProps {
  id?: id;
  defaultValue: valueType;
  orientation?: orientation;
  children: children;
}

export const TabsContext = createContext<TabsContextType | null>(null);

export function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error(
      "useTabs() must be used within a Tabs. It happens when you use TabsHeader, TabsBody, Tab or TabPanel outside the Tabs component.",
    );
  }

  return context;
}

export const TabsContextProvider: ParentComponent<TabsContextProviderProps> = (props) => {
  const [state, setState] = createStore<TabsContextValue>({
    // eslint-disable-next-line solid/reactivity
    id: props.id ?? "indicator",
    active: props.defaultValue,
    // eslint-disable-next-line solid/reactivity
    orientation: props.orientation || "horizontal",
    isInitial: true,
    appliedAnimation: {
      initial: {},
      unmount: {},
      mount: {},
    },
    indicatorProps: undefined,
  });
  const ctx = [
    state,
    {
      setId(value: id): void {
        setState("id", value);
      },
      setActive(value: valueType): void {
        setState("active", value);
      },
      setAnimation(value: animate): void {
        setState("appliedAnimation", value);
      },
      setIndicator(value: indicatorProps): void {
        setState("indicatorProps", value);
      },
      setIsInitial(value: isInitial): void {
        setState("isInitial", value);
      },
      setOrientation(value: orientation): void {
        setState("orientation", value);
      },
    },
  ] as const;

  return <TabsContext.Provider value={ctx}>{props.children}</TabsContext.Provider>;
};
