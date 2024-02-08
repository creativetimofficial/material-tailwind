import React from "react";
import PropTypes from "prop-types";

// utils
import merge from "deepmerge";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import {
  color,
  invisible,
  withBorder,
  overlap,
  className,
  content,
  children,
  placement,
  containerProps,
  containerRef,
  propTypesColor,
  propTypesInvisible,
  propTypesWithBorder,
  propTypesOverlap,
  propTypesClassName,
  propTypesContent,
  propTypesChildren,
  propTypesPlacement,
  propTypesContainerProps,
  propTypesContainerRef,
} from "../../types/components/badge";

export interface BadgeProps {
  color?: color;
  invisible?: invisible;
  withBorder?: withBorder;
  overlap?: overlap;
  className?: className;
  content?: content;
  children?: children;
  placement?: placement;
  containerProps?: containerProps;
  containerRef?: containerRef;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      color,
      invisible,
      withBorder,
      overlap,
      placement,
      className,
      content,
      children,
      containerProps,
      containerRef,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { badge } = useTheme();
    const { valid, defaultProps, styles } = badge;
    const { base, placements, colors } = styles;

    // 2. set default props
    color = color ?? defaultProps.color;
    invisible = invisible ?? defaultProps.invisible;
    withBorder = withBorder ?? defaultProps.withBorder;
    overlap = overlap ?? defaultProps.overlap;
    placement = placement ?? defaultProps.placement;
    className = twMerge(defaultProps.className || "", className);
    containerProps =
      merge(containerProps, defaultProps.containerProps || {}) ?? defaultProps.containerProps;

    // 3. set styles
    const badgeInitialClasses = objectsToString(base.badge.initial);
    const badgeWithBorderClasses = objectsToString(base.badge.withBorder);
    const badgeWithContentClasses = objectsToString(base.badge.withContent);
    const badgeColorClasses = objectsToString(colors[findMatch(valid.colors, color, "red")]);
    const badgePlacementClasses = objectsToString(
      placements[findMatch(valid.placements, placement, "top-end")][
        findMatch(valid.overlaps, overlap, "square")
      ],
    );
    const badgeClasses = twMerge(
      classnames(badgeInitialClasses, badgePlacementClasses, badgeColorClasses, {
        [badgeWithBorderClasses]: withBorder,
        [badgeWithContentClasses]: content,
      }),
      className,
    );
    const badgeContainerClasses = twMerge(
      classnames(objectsToString(base.container), containerProps?.className),
    );

    // 4. return
    return (
      <div ref={containerRef} {...containerProps} className={badgeContainerClasses}>
        {children}
        {!invisible && (
          <span {...rest} ref={ref} className={badgeClasses}>
            {content}
          </span>
        )}
      </div>
    );
  },
);

Badge.propTypes = {
  color: PropTypes.oneOf(propTypesColor),
  invisible: propTypesInvisible,
  withBorder: propTypesWithBorder,
  overlap: PropTypes.oneOf(propTypesOverlap),
  className: propTypesClassName,
  content: propTypesContent,
  children: propTypesChildren,
  placement: PropTypes.oneOf(propTypesPlacement),
  containerProps: propTypesContainerProps,
  containerRef: propTypesContainerRef,
};

Badge.displayName = "MaterialTailwind.Badge";

export default Badge;
