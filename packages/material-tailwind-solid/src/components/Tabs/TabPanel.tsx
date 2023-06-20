// framer-motion

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";

// types
import { Motion, Presence } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type { children, value } from "../../types/components/tabs";

export interface TabPanelProps {
  value: value;
  children: children;
}

export const TabPanel: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & TabPanelProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();
  const [state] = useTabs();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().tabPanel.defaultProps, props);
  const [tabProps, rest] = splitProps(mergedProps, ["value", "class", "children"]);

  // 3. set styles
  const styles = createMemo(() => {
    const {
      styles: { base },
    } = theme().tabPanel;

    const tabPanelClasses = twMerge(classnames(objectsToString(base)), tabProps.class);
    return { tabPanelClasses };
  });

  const animate = createMemo(() => {
    if (state.active === tabProps.value) return state.appliedAnimation.mount;
    if (state.isInitial) return state.appliedAnimation.initial || state.appliedAnimation.unmount;
    return state.appliedAnimation.unmount;
  });

  // 5. return
  return (
    <Presence exitBeforeEnter>
      <Motion.div
        {...rest}
        role="tabpanel"
        class={styles().tabPanelClasses}
        initial={state.appliedAnimation.initial}
        exit={state.appliedAnimation.unmount}
        animate={animate()}
        data-value={tabProps.value}
        data-active={state.active}
      >
        {tabProps.children}
      </Motion.div>
    </Presence>
  );
};

export default TabPanel;
