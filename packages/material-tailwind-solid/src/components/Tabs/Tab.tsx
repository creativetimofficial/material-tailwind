// framer-motion

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs } from "./TabsContext";

// types
import { Motion } from "@motionone/solid";
import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, mergeProps, splitProps } from "solid-js";
import type { children, disabled, value } from "../../types/components/tabs";

export interface TabProps {
  value: value;
  activeClassName?: string;
  disabled?: disabled;
  children: children;
}

export const Tab: ParentComponent<JSX.LiHTMLAttributes<HTMLLIElement> & TabProps> = (props) => {
  //  = React.forwardRef<HTMLLIElement, TabProps>(
  //   ({ value, className, activeClassName, disabled, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();

  const [state, { setIsInitial, setActive }] = useTabs();
  // const { id, active, indicatorProps } = state;
  // 2. set default props
  const mergedProps = mergeProps(() => theme().tab.defaultProps, props);
  const [tabProps, rest] = splitProps(mergedProps, [
    "value",
    "class",
    "activeClassName",
    "disabled",
    "children",
  ]);

  // 3. set styles
  const styles = createMemo(() => {
    const {
      styles: { base },
    } = theme().tab;
    const tabClasses = twMerge(
      classnames(objectsToString(base.tab.initial), {
        [objectsToString(base.tab.disabled)]: tabProps.disabled,
        [tabProps.activeClassName]: state.active === tabProps.value,
      }),
      tabProps.class,
    );
    const indicatorClasses = twMerge(
      classnames(objectsToString(base.indicator)),
      state.indicatorProps?.className ?? "",
    );
    return { tabClasses, indicatorClasses };
  });

  // 4. return
  return (
    <li
      {...rest}
      role="tab"
      class={styles().tabClasses}
      onClick={(e) => {
        const onClick = rest?.onClick;
        setIsInitial(false);
        setActive(tabProps.value);
        if (typeof onClick === "function") {
          onClick(e);
        }
      }}
      data-value={tabProps.value}
    >
      <div class="z-20 text-inherit">{tabProps.children}</div>
      <Show when={state.active === tabProps.value}>
        <Motion.div
          {...state.indicatorProps}
          transition={{ duration: 0.5 }}
          class={styles().indicatorClasses}
          layout-Id={state.id}
        />
      </Show>
    </li>
  );
};

export default Tab;
