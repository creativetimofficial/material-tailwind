// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";

// components
import { createMemo, splitProps } from "solid-js";
import TimelineBody from "./TimelineBody";
import TimelineConnector from "./TimelineConnector";
import TimelineHeader from "./TimelineHeader";
import TimelineIcon from "./TimelineIcon";
import TimelineItem from "./TimelineItem";

export const Timeline: ParentComponent<JSX.HTMLAttributes<HTMLUListElement>> = (props) => {
  // 1. init
  const theme = useTheme();
  const [timelineProps, rest] = splitProps(props, ["class", "children"]);

  // 3. set styles
  const styles = createMemo(() => {
    const { styles } = theme().timeline;
    const { base } = styles;
    const classes = twMerge(objectsToString(base), timelineProps.class);
    return { classes };
  });
  // 4. return
  return (
    <ul {...rest} class={styles().classes}>
      {timelineProps.children}
    </ul>
  );
};

export { TimelineItem, TimelineIcon, TimelineBody, TimelineHeader, TimelineConnector };
export default Object.assign(Timeline, {
  Item: TimelineItem,
  Icon: TimelineIcon,
  Header: TimelineHeader,
  Body: TimelineBody,
  Connector: TimelineConnector,
});
