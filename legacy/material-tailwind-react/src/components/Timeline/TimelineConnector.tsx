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

export interface TimelineConnectorProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: className;
  children?: children;
}

export const TimelineConnector = React.forwardRef<HTMLSpanElement, TimelineConnectorProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const { timelineConnector } = useTheme();
    const { styles } = timelineConnector;
    const { base } = styles;
    const [width] = useTimelineItem();

    // 3. set styles
    const lineClasses = objectsToString(base.line);
    const containerClasses = twMerge(objectsToString(base.container), className);

    // 4. return
    return (
      <span
        {...rest}
        ref={ref}
        className={containerClasses}
        style={{
          top: `${width}px`,
          width: `${width}px`,
          opacity: width ? 1 : 0,
          height: `calc(100% - ${width}px)`,
        }}
      >
        {children && React.isValidElement(children) ? (
          React.cloneElement(children as React.ReactElement, {
            className: twMerge(lineClasses, children.props?.className),
          })
        ) : (
          <span className={lineClasses} />
        )}
      </span>
    );
  },
);

TimelineConnector.propTypes = {
  children: propTypeChildren,
  className: propTypeClassName,
};

TimelineConnector.displayName = "MaterialTailwind.TimelineConnector";

export default TimelineConnector;
