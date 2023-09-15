import React from "react";
import PropTypes from "prop-types";

// @floading-ui
import { useMergeRefs } from "@floating-ui/react";

// utils
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTimelineItem } from "./TimelineItem";

// types
import {
  className,
  children,
  color,
  variant,
  propTypeClassName,
  propTypeChildren,
  propTypeColor,
  propTypeVariant,
} from "../../types/components/timeline";

export interface TimelineIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: className;
  children?: children;
  variant?: variant;
  color?: color;
}

export const TimelineIcon = React.forwardRef<HTMLSpanElement, TimelineIconProps>(
  ({ color, variant, className, children, ...rest }, ref) => {
    // 1. init
    const { timelineIcon } = useTheme();
    const { styles, valid } = timelineIcon;
    const { base, variants } = styles;
    const [, setWidth] = useTimelineItem();
    const innerRef = React.useRef<HTMLSpanElement>(null);
    const mergedRef = useMergeRefs([ref, innerRef]);

    React.useEffect(() => {
      const iconElement = innerRef.current;

      if (iconElement) {
        const { width } = iconElement.getBoundingClientRect();

        setWidth(width);

        return () => {
          setWidth(0);
        };
      }
    }, [setWidth, className, children]);

    // 3. set styles
    const variantClasses = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "gray")
      ],
    );
    const classes = twMerge(objectsToString(base), variantClasses, className);

    // 4. return
    return (
      <span ref={mergedRef} {...rest} className={classes}>
        {children}
      </span>
    );
  },
);

TimelineIcon.propTypes = {
  children: propTypeChildren,
  className: propTypeClassName,
  color: PropTypes.oneOf(propTypeColor),
  variant: PropTypes.oneOf(propTypeVariant),
};

TimelineIcon.displayName = "MaterialTailwind.TimelineIcon";

export default TimelineIcon;
