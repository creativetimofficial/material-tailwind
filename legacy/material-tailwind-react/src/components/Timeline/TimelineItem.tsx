import React from "react";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import {
  className,
  children,
  propTypeChildren,
  propTypeClassName,
} from "../../types/components/timeline";

const TimelineItemContext = React.createContext<any>(0);
TimelineItemContext.displayName = "MaterialTailwind.TimelineItemContext";

export function useTimelineItem() {
  const context = React.useContext(TimelineItemContext);
  if (!context) {
    throw new Error(
      "useTimelineItemContext() must be used within a TimelineItem. It happens when you use TimelineIcon, TimelineConnector or TimelineBody components outside the TimelineItem component.",
    );
  }

  return context;
}

// component
export interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: className;
  children?: children;
}

export const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { timelineItem } = useTheme();
    const { styles } = timelineItem;
    const { base } = styles;
    const [width, setWidth] = React.useState(0);
    const contextValue = React.useMemo(() => [width, setWidth], [width, setWidth]);

    // 3. set styles
    const classes = twMerge(objectsToString(base), className);

    // 4. return
    return (
      <TimelineItemContext.Provider value={contextValue}>
        <li ref={ref} {...rest} className={classes}>
          {children}
        </li>
      </TimelineItemContext.Provider>
    );
  },
);

TimelineItem.propTypes = {
  className: propTypeClassName,
  children: propTypeChildren.isRequired,
};

TimelineItem.displayName = "MaterialTailwind.TimelineItem";

export default TimelineItem;
