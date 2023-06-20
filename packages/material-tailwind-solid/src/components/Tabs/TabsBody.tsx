// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createEffect, createMemo, mergeProps, splitProps } from "solid-js";
import type { animate, children } from "../../types/components/tabs";

export interface TabsBodyProps {
  animate?: animate;
  children: children;
}

export const TabsBody: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & TabsBodyProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(
    () => theme().tabsBody.defaultProps,
    { animate: mainAnimation },
    props,
  );
  const [tabProps, rest] = splitProps(mergedProps, ["animate", "children", "class"]);
  const [, { setAnimation }] = useTabs();

  // 3. set styles
  const styles = createMemo(() => {
    const {
      styles: { base },
    } = theme().tabsBody;
    const tabsBodyClasses = twMerge(classnames(objectsToString(base)), tabProps.class);
    return { tabsBodyClasses };
  });

  // 4. set animation
  createEffect(() => {
    setAnimation(tabProps.animate);
  });

  // 5. return
  return (
    <div {...rest} class={styles().tabsBodyClasses}>
      {tabProps.children}
    </div>
  );
};

export default TabsBody;

const mainAnimation = {
  initial: {
    opacity: 0,
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: 1,
    transition: { duration: 0 },
  },
  unmount: {
    opacity: 0,
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: 1,
    transition: { duration: 0.5, times: [0.4, 0, 0.2, 1] },
  },
  mount: {
    opacity: 1,
    position: "relative",
    zIndex: 2,
    transition: { duration: 0.5, times: [0.4, 0, 0.2, 1] },
  },
};
