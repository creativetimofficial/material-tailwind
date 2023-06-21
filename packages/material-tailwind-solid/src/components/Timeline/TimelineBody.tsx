// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTimelineItem } from "./TimelineItem";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, splitProps } from "solid-js";

export const TimelineHeader: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  //  = React.forwardRef<HTMLDivElement, TimelineBodyProps>(
  //   ({ className, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();
  const [width] = useTimelineItem();
  const [headerProps, rest] = splitProps(props, ["children", "class"]);
  // 3. set styles
  const styles = createMemo(() => {
    const { styles } = theme().timelineBody;
    const { base } = styles;
    const classes = twMerge(objectsToString(base), headerProps.class);
    return { classes };
  });
  // 4. return
  return (
    <div {...rest} class={styles().classes}>
      <span
        class="pointer-events-none invisible h-full flex-shrink-0"
        style={{
          width: `${width()}px`,
        }}
      />
      <div>{headerProps.children}</div>
    </div>
  );
};

export default TimelineHeader;
