// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTimelineItem } from "./TimelineItem";

// types
import type { JSX, ParentComponent } from "solid-js";
import { For, children, createMemo, splitProps } from "solid-js";

export const TimelineConnector: ParentComponent<JSX.HTMLAttributes<HTMLSpanElement>> = (props) => {
  // 1. init
  const theme = useTheme();
  const [width] = useTimelineItem();
  const [local, rest] = splitProps(props, ["class", "children"]);

  // 3. set styles
  const styles = createMemo(() => {
    const { styles } = theme().timelineConnector;
    const { base } = styles;
    const lineClasses = objectsToString(base.line);
    const containerClasses = twMerge(objectsToString(base.container), local.class);
    return { lineClasses, containerClasses };
  });
  const getChildren = children(() => local.children);

  // 4. return
  return (
    <span
      {...rest}
      class={styles().containerClasses}
      style={{
        top: `${width()}px`,
        width: `${width()}px`,
        opacity: width() ? 1 : 0,
        height: `calc(100% - ${width()}px)`,
      }}
    >
      <For each={getChildren.toArray()} fallback={<span class={styles().lineClasses} />}>
        {(child) => <span class={styles().lineClasses}>{child}</span>}
      </For>
    </span>
  );
};

export default TimelineConnector;
