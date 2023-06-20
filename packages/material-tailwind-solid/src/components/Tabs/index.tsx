// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { TabsContextProvider, useTabs } from "./TabsContext";

// tabs components
import type { TabProps } from "./Tab";
import { Tab } from "./Tab";
import type { TabPanelProps } from "./TabPanel";
import { TabPanel } from "./TabPanel";
import type { TabsBodyProps } from "./TabsBody";
import { TabsBody } from "./TabsBody";
import type { TabsHeaderProps } from "./TabsHeader";
import { TabsHeader } from "./TabsHeader";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type { children, id, orientation, value } from "../../types/components/tabs";

export interface TabsProps {
  id: id;
  value: value;
  orientation?: orientation;
  children: children;
}

const Tabs: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & TabsProps> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().tabs.defaultProps, props);
  const [tabProps, rest] = splitProps(mergedProps, [
    "id",
    "value",
    "orientation",
    "children",
    "class",
  ]);

  // 3. set styles
  const styles = createMemo(() => {
    const { styles } = theme().tabs;
    const tabsClasses = twMerge(
      classnames(objectsToString(styles.base), {
        [styles[tabProps.orientation] && objectsToString(styles[tabProps.orientation])]:
          tabProps.orientation,
      }),
      tabProps.class,
    );
    return { tabsClasses };
  });

  // 4. return
  return (
    <TabsContextProvider
      id={tabProps.id}
      defaultValue={tabProps.value}
      orientation={tabProps.orientation}
    >
      <div {...rest} class={styles().tabsClasses}>
        {tabProps.children}
      </div>
    </TabsContextProvider>
  );
};

export type { TabProps, TabsBodyProps, TabsHeaderProps, TabPanelProps };
export { Tabs, Tab, TabsBody, TabsHeader, TabPanel, useTabs };
export default Object.assign(Tabs, { Tab, Body: TabsBody, Header: TabsHeader, Panel: TabPanel });
