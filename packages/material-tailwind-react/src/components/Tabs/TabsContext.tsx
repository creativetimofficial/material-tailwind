import React from "react";

// types
import {
  id,
  value as valueType,
  animate,
  children,
  propTypesValue,
  indicatorProps,
  propTypesId,
} from "../../types/components/tabs";
import { propTypesChildren } from "../../types/components/tabs";

export interface TabsContextType {
  state: {
    id: id;
    active: valueType;
    appliedAnimation: animate;
    indicatorProps: indicatorProps;
  };
  dispatch: React.Dispatch<{
    id: id;
    active: valueType;
    appliedAnimation: animate;
    indicatorProps: indicatorProps;
  }>;
}

export interface TabsContextProviderProps {
  id?: id;
  value: valueType;
  children: children;
}

function reducer(state, action) {
  switch (action.type) {
    case "SET_ID": {
      return { ...state, id: action.value };
    }
    case "SET_ACTIVE": {
      return { ...state, active: action.value };
    }
    case "SET_ANIMATION": {
      return { ...state, appliedAnimation: action.value };
    }
    case "SET_INDICATOR": {
      return { ...state, indicatorProps: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export const TabsContext = React.createContext<TabsContextType | null>(null);
TabsContext.displayName = "MaterialTailwind.TabsContext";

export function useTabs() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error(
      "useTabs() must be used within a Tabs. It happens when you use TabsHeader, TabsBody, Tab or TabPanel outside the Tabs component.",
    );
  }

  return context;
}

export const TabsContextProvider = ({ id, value, children }: TabsContextProviderProps) => {
  const initialState = React.useMemo(
    () => ({
      id: id ?? "indicator",
      active: value,
      appliedAnimation: {
        unmount: {},
        mount: {},
      },
      indicatorProps: undefined,
    }),
    [id, value],
  );

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const contextValue = React.useMemo(() => ({ state, dispatch }), [state]);

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
};

export const setId = (dispatch: (arg: object) => void, value: id) =>
  dispatch({ type: "SET_ID", value });
export const setActive = (dispatch: (arg: object) => void, value: valueType) =>
  dispatch({ type: "SET_ACTIVE", value });
export const setAnimation = (dispatch: (arg: object) => void, value: animate) =>
  dispatch({ type: "SET_ANIMATION", value });
export const setIndicator = (dispatch: (arg: object) => void, value: indicatorProps) =>
  dispatch({ type: "SET_INDICATOR", value });

TabsContextProvider.propTypes = {
  id: propTypesId,
  value: propTypesValue,
  children: propTypesChildren,
};

TabsContextProvider.displayName = "MaterialTailwind.TabsContextProvider";
