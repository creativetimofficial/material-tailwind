// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";

export const TimelineHeader: ParentComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  // 1. init
  const theme = useTheme();

  // 4. return
  return (
    <div
      {...props}
      class={twMerge(objectsToString(theme().timelineHeader.styles.base), props.class)}
    >
      {props.children}
    </div>
  );
};

export default TimelineHeader;
