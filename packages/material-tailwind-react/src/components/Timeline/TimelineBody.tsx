import React from "react";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTimelineItem } from "./TimelineItem";

// types
import {
  className,
  children,
  propTypeClassName,
  propTypeChildren,
} from "../../types/components/timeline";

export interface TimelineBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: className;
  children?: children;
}

export const TimelineHeader = React.forwardRef<HTMLDivElement, TimelineBodyProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { timelineBody } = useTheme();
    const { styles } = timelineBody;
    const { base } = styles;
    const [width] = useTimelineItem();

    // 3. set styles
    const classes = twMerge(objectsToString(base), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={classes}>
        <span
          className="pointer-events-none invisible h-full flex-shrink-0"
          style={{
            width: `${width}px`,
          }}
        />
        <div>{children}</div>
      </div>
    );
  },
);

TimelineHeader.propTypes = {
  children: propTypeChildren,
  className: propTypeClassName,
};

TimelineHeader.displayName = "MaterialTailwind.TimelineHeader";

export default TimelineHeader;
