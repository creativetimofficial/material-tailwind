"use client";

import * as React from "react";

// @hooks
import { useTheme } from "@context";
import { useMergeRefs } from "@floating-ui/react";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import {
  tabsTheme,
  tabsListTheme,
  tabsTriggerTheme,
  tabsPanelTheme,
  tabsTriggerIndicatorTheme,
} from "@theme";

// @types
import { BaseProps } from "@types";

export type orientation = "horizontal" | "vertical";

export type rect = {
  clientWidth: number;
  clientHeight: number;
  offsetLeft: number;
  offsetTop: number;
};

// tabs context
export interface TabsContext {
  orientation?: orientation;
  activeTab?: string;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
  indicatorRect?: rect;
  setIndicatorRect?: React.Dispatch<React.SetStateAction<rect>>;
}

const TabsContext = React.createContext<TabsContext>({
  activeTab: "",
  orientation: "horizontal",
} as TabsContext);

// tabs root
export type TabsProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value?: string;
    defaultValue?: string;
    orientation?: orientation;
    onValueChange?: React.Dispatch<React.SetStateAction<string>>;
  }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/tabs) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/tabs#tabs-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/tabs#tabs-theme)
 */
function TabsRootBase<T extends React.ElementType = "div">(
  {
    as,
    value,
    defaultValue,
    onValueChange,
    orientation,
    className,
    children,
    ...props
  }: TabsProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.tabs || tabsTheme;
  const defaultProps = contextTheme.defaultProps;

  orientation ??=
    (defaultProps?.orientation as TabsProps["orientation"]) ?? "horizontal";

  const tabsValue = value || defaultValue;

  const [indicatorRect, setIndicatorRect] = React.useState<rect>({
    clientWidth: 0,
    clientHeight: 0,
    offsetLeft: 0,
    offsetTop: 0,
  });

  const [uncontrolledActiveTab, setUncontrolledActiveTab] =
    React.useState<string>(() => tabsValue as string);

  const activeTab = value || uncontrolledActiveTab;
  const setActiveTab = onValueChange || setUncontrolledActiveTab;

  React.useEffect(() => {
    setActiveTab(tabsValue as string);
  }, [tabsValue]);

  const contextValue = React.useMemo(
    () => ({
      orientation,
      activeTab,
      setActiveTab,
      indicatorRect,
      setIndicatorRect,
    }),
    [orientation, activeTab, setActiveTab, indicatorRect, setIndicatorRect],
  );

  const styles = twMerge(theme.baseStyle, className);

  return (
    <TabsContext.Provider value={contextValue}>
      <Component
        {...props}
        ref={ref}
        className={styles}
        data-orientation={orientation}
      >
        {children}
      </Component>
    </TabsContext.Provider>
  );
}

TabsRootBase.displayName = "MaterialTailwind.TabsRoot";

export const TabsRoot = React.forwardRef(TabsRootBase) as <
  T extends React.ElementType = "div",
>(
  props: TabsProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// tabs list
export type TabsListProps<T extends React.ElementType = "div"> = BaseProps<T>;

function TabsListRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: TabsListProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.tabsList || tabsListTheme;
  const { orientation } = React.useContext(TabsContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
      ref={ref}
      role="tablist"
      className={styles}
      aria-orientation={orientation}
      data-orientation={orientation}
    >
      {children}
    </Component>
  );
}

TabsListRoot.displayName = "MaterialTailwind.TabsList";

export const TabsList = React.forwardRef(TabsListRoot) as <
  T extends React.ElementType = "div",
>(
  props: TabsListProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// tabs trigger
export type TabsTriggerProps<T extends React.ElementType = "button"> =
  BaseProps<
    T,
    {
      value: string;
    }
  >;

function TabsTriggerRoot<T extends React.ElementType = "button">(
  { as, value, className, children, ...props }: TabsTriggerProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);
  const innerRef = React.useRef<HTMLElement>(null);
  const [elementRect, setElementRect] = React.useState<HTMLElement | null>(
    null,
  );

  const contextTheme = useTheme();
  const theme = contextTheme.tabsTrigger || tabsTriggerTheme;
  const { activeTab, setActiveTab, setIndicatorRect } =
    React.useContext(TabsContext);

  const isActive = activeTab === value;
  const styles = twMerge(theme.baseStyle, className);
  const elementRef = useMergeRefs([innerRef, ref]);

  React.useEffect(() => {
    const element = innerRef.current;

    if (element) {
      setElementRect(element);
    }
  }, []);

  const handleIndicatorRect = React.useCallback(() => {
    if (isActive && elementRect) {
      setIndicatorRect?.({
        clientWidth: elementRect.clientWidth,
        clientHeight: elementRect.clientHeight,
        offsetLeft: elementRect.offsetLeft,
        offsetTop: elementRect.offsetTop,
      });
    }
  }, [isActive, elementRect]);

  React.useEffect(() => {
    handleIndicatorRect();
  }, [handleIndicatorRect]);

  React.useEffect(() => {
    window.addEventListener("resize", handleIndicatorRect);

    return () => {
      window.removeEventListener("resize", handleIndicatorRect);
    };
  }, [handleIndicatorRect]);

  return (
    <Component
      {...props}
      ref={elementRef}
      role="tab"
      className={styles}
      data-active={isActive}
      aria-selected={isActive}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        props.onClick?.(event);
        setActiveTab?.(value);
      }}
    >
      {children}
    </Component>
  );
}

TabsTriggerRoot.displayName = "MaterialTailwind.TabsTrigger";

export const TabsTrigger = React.forwardRef(TabsTriggerRoot) as <
  T extends React.ElementType = "button",
>(
  props: TabsTriggerProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// tabs panel
export type TabsPanelProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value: string;
  }
>;

function TabsPanelRoot<T extends React.ElementType = "div">(
  { as, value, className, children, ...props }: TabsPanelProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme.tabsPanel || tabsPanelTheme;
  const { activeTab, orientation } = React.useContext(TabsContext);

  const isActive = activeTab === value;
  const styles = twMerge(theme.baseStyle, className);

  return isActive ? (
    <Component
      {...props}
      ref={ref}
      role="tabpanel"
      className={styles}
      data-active={isActive}
      data-orientation={orientation}
    >
      {children}
    </Component>
  ) : null;
}

TabsPanelRoot.displayName = "MaterialTailwind.TabsPanel";

export const TabsPanel = React.forwardRef(TabsPanelRoot) as <
  T extends React.ElementType = "div",
>(
  props: TabsPanelProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// tabs trigger indicator
export type TabsTriggerIndicatorProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function TabsTriggerIndicatorRoot<T extends React.ElementType = "span">(
  { as, className, ...props }: TabsTriggerIndicatorProps,
  ref: React.Ref<Element>,
) {
  const Component = as || "span";
  const contextTheme = useTheme();
  const theme = contextTheme.tabsTriggerIndicator || tabsTriggerIndicatorTheme;
  const { indicatorRect } = React.useContext(TabsContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
      ref={ref}
      style={{
        ...props?.style,
        width: indicatorRect?.clientWidth,
        height: indicatorRect?.clientHeight,
        left: indicatorRect?.offsetLeft,
        top: indicatorRect?.offsetTop,
        position: "absolute",
        zIndex: 1,
      }}
      className={styles}
    />
  );
}

TabsTriggerIndicatorRoot.displayName = "MaterialTailwind.TabsTriggerIndicator";

export const TabsTriggerIndicator = React.forwardRef(
  TabsTriggerIndicatorRoot,
) as <T extends React.ElementType = "span">(
  props: TabsTriggerIndicatorProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Panel: TabsPanel,
  TriggerIndicator: TabsTriggerIndicator,
});

export default Tabs;
