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
import type { children, indicatorProps } from "../../types/components/tabs";

export interface TabsHeaderProps {
  indicatorProps?: indicatorProps;
  children: children;
}

export const TabsHeader: ParentComponent<JSX.HTMLAttributes<HTMLUListElement> & TabsHeaderProps> = (
  props,
) => {
  // = React.forwardRef<HTMLUListElement, TabsHeaderProps>(
  //   ({ indicatorProps, className, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();
  const [state, { setIndicator }] = useTabs();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().tabsHeader.defaultProps, props);
  const [headerProps, rest] = splitProps(mergedProps, ["indicatorProps", "class", "children"]);

  createEffect(() => {
    setIndicator(headerProps.indicatorProps);
  });

  // 3. set styles
  const styles = createMemo(() => {
    const { styles } = theme().tabsHeader;
    const orientation = state.orientation;
    const tabsHeaderClasses = twMerge(
      classnames(objectsToString(styles.base), {
        [styles[orientation] && objectsToString(styles[orientation])]: orientation,
      }),
      headerProps.class,
    );
    return { tabsHeaderClasses };
  });

  // 4. return
  return (
    <nav>
      <ul {...rest} role="tablist" class={styles().tabsHeaderClasses}>
        {headerProps.children}
      </ul>
    </nav>
  );
};

export default TabsHeader;
