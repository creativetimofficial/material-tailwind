// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Accessor, JSX, ParentComponent, Setter } from "solid-js";
import { createContext, createSignal, useContext } from "solid-js";

const TimelineItemContext = createContext<[width: Accessor<number>, setWidth: Setter<number>] | 0>(
  0,
);

export function useTimelineItem() {
  const context = useContext(TimelineItemContext);
  if (!context) {
    throw new Error(
      "useTimelineItemContext() must be used within a TimelineItem. It happens when you use TimelineIcon, TimelineConnector or TimelineBody components outside the TimelineItem component.",
    );
  }

  return context;
}

export const TimelineItem: ParentComponent<JSX.LiHTMLAttributes<HTMLLIElement>> = (props) => {
  // 1. init
  const theme = useTheme();
  const [width, setWidth] = createSignal(0);

  // 4. return
  return (
    <TimelineItemContext.Provider value={[width, setWidth]}>
      <li
        {...props}
        class={twMerge(objectsToString(theme().timelineItem.styles.base), props.class)}
      >
        {props.children}
      </li>
    </TimelineItemContext.Provider>
  );
};

export default TimelineItem;
