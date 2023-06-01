// types
import type { Accessor, ParentComponent } from "solid-js";
import { createContext, useContext } from "solid-js";
import type { children, contextValue } from "../../types/components/menu";
type ContextAccessor = Accessor<null | contextValue>;
export interface MenuContextProviderProps {
  value: ContextAccessor;
  children: children;
}

export const MenuContext = createContext<ContextAccessor>(() => null);

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context()) {
    throw new Error(
      "useMenu() must be used within a Menu. It happens when you use MenuCore, MenuHandler, MenuItem or MenuList components outside the Menu component.",
    );
  }

  return context;
}
export function useIsNestedMenu() {
  const context = useContext(MenuContext);
  if (!context()) return false;
  return true;
}
export function useParentContext() {
  const context = useContext(MenuContext);
  if (!context())
    return {
      parentContext: () => undefined,
    };
  return {
    parentContext: () => context(),
  };
}
export const MenuContextProvider: ParentComponent<MenuContextProviderProps> = (props) => {
  return <MenuContext.Provider {...props}>{props.children}</MenuContext.Provider>;
};

export function getRootContext(ctx: ContextAccessor): ContextAccessor {
  if (ctx()?.parentContext() && ctx()?.parentContext)
    return getRootContext(ctx()!.parentContext as ContextAccessor);
  return ctx;
}
