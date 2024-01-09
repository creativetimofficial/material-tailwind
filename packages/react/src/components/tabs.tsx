import React from "react";

// @hooks
import { useTheme } from "@context";
import { useMergeRefs } from "@floating-ui/react";

// @types
import type { Props } from "@types";

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
export interface TabsProps extends Props<"div" | any> {
  as?: React.ElementType;
  value?: string;
  defaultValue?: string;
  orientation?: orientation;
  className?: string;
  children: React.ReactNode;
  onValueChange?: React.Dispatch<React.SetStateAction<string>>;
}

export const TabsRoot = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TabsProps
>(
  (
    {
      as,
      value,
      defaultValue,
      onValueChange,
      orientation,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const Element = as || "div";
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
        <Element
          {...rest}
          ref={ref}
          className={styles}
          data-orientation={orientation}
        >
          {children}
        </Element>
      </TabsContext.Provider>
    );
  },
);

TabsRoot.displayName = "MaterialTailwind.TabsRoot";

// tabs list
export interface TabsListProps extends Props<"div" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TabsList = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TabsListProps
>(({ as, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.tabsList || tabsListTheme;
  const { orientation } = React.useContext(TabsContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element
      {...rest}
      ref={ref}
      role="tablist"
      className={styles}
      aria-orientation={orientation}
      data-orientation={orientation}
    >
      {children}
    </Element>
  );
});

TabsList.displayName = "MaterialTailwind.TabsList";

// tabs trigger
export interface TabsTriggerProps extends Props<"button" | any> {
  as?: React.ElementType;
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabsTrigger = React.forwardRef<
  HTMLButtonElement | HTMLElement,
  TabsTriggerProps
>(({ as, value, className, children, ...rest }, ref) => {
  const Element = as || "button";
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
  }, [
    isActive,
    elementRect?.clientWidth,
    elementRect?.clientHeight,
    elementRect?.offsetLeft,
    elementRect?.offsetTop,
  ]);

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
    <Element
      {...rest}
      ref={elementRef}
      role="tab"
      className={styles}
      data-active={isActive}
      aria-selected={isActive}
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        rest.onClick?.(event);
        setActiveTab?.(value);
      }}
    >
      {children}
    </Element>
  );
});

TabsTrigger.displayName = "MaterialTailwind.TabsTrigger";

// tabs panel
export interface TabsPanelProps extends Props<"div" | any> {
  as?: React.ElementType;
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabsPanel = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TabsPanelProps
>(({ as, value, className, children, ...rest }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme.tabsPanel || tabsPanelTheme;
  const { activeTab, orientation } = React.useContext(TabsContext);

  const isActive = activeTab === value;
  const styles = twMerge(theme.baseStyle, className);

  return isActive ? (
    <Element
      {...rest}
      ref={ref}
      role="tabpanel"
      className={styles}
      data-active={isActive}
      data-orientation={orientation}
    >
      {children}
    </Element>
  ) : null;
});

TabsPanel.displayName = "MaterialTailwind.TabsPanel";

// tabs trigger indicator
export interface TabsTriggerIndicatorProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
}

export const TabsTriggerIndicator = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  TabsTriggerIndicatorProps
>(({ as, className, ...rest }, ref) => {
  const Element = as || "span";
  const contextTheme = useTheme();
  const theme = contextTheme.tabsTriggerIndicator || tabsTriggerIndicatorTheme;
  const { indicatorRect } = React.useContext(TabsContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element
      {...rest}
      ref={ref}
      style={{
        ...rest?.style,
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
});

TabsTriggerIndicator.displayName = "MaterialTailwind.TabsTriggerIndicator";

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Panel: TabsPanel,
  TriggerIndicator: TabsTriggerIndicator,
});

export default Tabs;
