"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";
import { inner, useMergeRefs } from "@floating-ui/react";

// @theme
import {
  timelineTheme,
  timelineItemTheme,
  timelineHeaderTheme,
  timelineIconTheme,
  timelineSeparatorTheme,
  timelineBodyTheme,
} from "@theme";

// @types
import type { BaseComponent, Props } from "@types";

type Orientation = "horizontal" | "vertical";
type Mode = "stepper" | "timeline";

// timeline context
export interface TimelineContextProps {
  value?: string;
  setValue?: (e: string) => void;
  color?: BaseComponent<any>["color"];
  orientation?: Orientation;
  mode?: Mode;
  parentRef?: React.RefObject<HTMLDivElement | HTMLElement>;
}

export const TimelineContext = React.createContext<TimelineContextProps>({
  value: "",
  setValue: () => {},
  color: "primary",
  mode: "timeline",
  orientation: "horizontal",
});

// timeline root
export interface TimelineProps extends Props<"div" | any> {
  as?: React.ElementType;
  value?: string;
  defaultValue?: string;
  onChange?: (e: string) => void;
  color: BaseComponent<any>["color"];
  orientation?: Orientation;
  mode?: Mode;
  className?: string;
  children: React.ReactNode;
}

export const TimelineRoot = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TimelineProps
>(
  (
    {
      as,
      value,
      defaultValue,
      onChange,
      color,
      mode,
      orientation,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Element = as || "div";
    const contextTheme = useTheme();
    const theme = contextTheme?.timeline ?? timelineTheme;
    const defaultProps = theme?.defaultProps;
    const innerRef = React.useRef<HTMLDivElement | HTMLElement>(null);
    const [innerValue, setInnerValue] = React.useState(defaultValue || "");

    value ??= innerValue;
    onChange ??= setInnerValue;
    mode ??= (defaultProps?.mode as TimelineProps["mode"]) ?? "timeline";
    color ??= (defaultProps?.color as TimelineProps["color"]) ?? "primary";
    orientation ??=
      (defaultProps?.orientation as TimelineProps["orientation"]) ??
      "horizontal";

    React.useEffect(() => {
      const parentEl = innerRef?.current;

      if (parentEl && !value) {
        const children = Array.from(parentEl.children);
        const firstChild = children[0] as HTMLElement;

        onChange?.(firstChild.dataset.value!);
      }
    }, []);

    React.useEffect(() => {
      if (mode === "stepper") {
        const parentEl = innerRef?.current;

        if (parentEl) {
          const children = Array.from(parentEl.children);

          const currentEl = children.find(
            (child: any) => child.dataset.value == value,
          ) as HTMLElement;

          const currentElIndex = children.findIndex(
            (child: any) => child.dataset.value == value,
          );

          const activeElIndex = children.findIndex(
            (child: any) => child.dataset.active === "true",
          );

          const completedSteps = children.filter(
            (_, index) => index < activeElIndex,
          );

          const incompletedSteps = children.filter(
            (_, index) => index > activeElIndex,
          );

          completedSteps.forEach((step: any) => {
            step.dataset.completed = "true";
          });

          incompletedSteps.forEach((step: any) => {
            step.dataset.completed = "false";
          });

          if (currentElIndex === activeElIndex && currentEl) {
            currentEl.dataset.completed = "false";
          }
        }
      }
    }, [value]);

    const contextValue = React.useMemo(
      () => ({
        value,
        setValue: onChange,
        orientation,
        color,
        mode,
        parentRef: innerRef,
      }),
      [value, onChange, orientation, color, mode],
    );

    const styles = twMerge(theme.baseStyle, className);
    const mergedRef = useMergeRefs([ref, innerRef]);

    return (
      <Element
        {...props}
        ref={mergedRef}
        className={styles}
        data-orientation={orientation}
      >
        <TimelineContext.Provider value={contextValue}>
          {children}
        </TimelineContext.Provider>
      </Element>
    );
  },
);

TimelineRoot.displayName = "MaterialTailwind.Timeline";

// timeline item
interface TimelineItemProps extends Props<"div" | any> {
  as?: React.ElementType;
  value?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const TimelineItem = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TimelineItemProps
>(({ as, value, className, disabled, children, ...props }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineItem ?? timelineItemTheme;
  const {
    mode,
    setValue,
    orientation,
    value: contextValue,
  } = React.useContext(TimelineContext);
  const innerRef = React.useRef<HTMLDivElement | HTMLElement>(null);

  value ??= React.useId();

  const isActive = contextValue == value || mode === "timeline";

  function onClick(event: React.MouseEvent<HTMLElement>) {
    props?.onClick?.(event);

    if (mode === "stepper") {
      setValue?.(value!);
    }
  }

  const styles = twMerge(theme.baseStyle, className);
  const mergedRef = useMergeRefs([ref, innerRef]);

  return (
    <Element
      {...props}
      ref={mergedRef}
      onClick={onClick}
      data-value={value}
      data-active={isActive}
      data-orientation={orientation}
      aria-disabled={disabled}
      className={styles}
    >
      {children}
    </Element>
  );
});

TimelineItem.displayName = "MaterialTailwind.TimelineItem";

// timeline header
export interface TimelineHeaderProps extends Props<"div" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TimelineHeader = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TimelineHeaderProps
>(({ as, className, children, ...props }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineHeader ?? timelineHeaderTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element {...props} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

TimelineHeader.displayName = "MaterialTailwind.TimelineHeader";

// timeline icon
export interface TimelineIconProps extends Props<"span" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TimelineIcon = React.forwardRef<
  HTMLSpanElement | HTMLElement,
  TimelineIconProps
>(({ as, className, children, ...props }, ref) => {
  const Element = as || "span";
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineIcon ?? timelineIconTheme;
  const { color } = React.useContext(TimelineContext);

  const styles = twMerge(theme.baseStyle, theme.color[color], className);

  return (
    <Element {...props} ref={ref} className={styles}>
      {children}
    </Element>
  );
});

TimelineIcon.displayName = "MaterialTailwind.TimelineIcon";

// timeline separator
export interface TimelineSeparatorProps extends Props<"div" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TimelineSeparator = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TimelineSeparatorProps
>(({ as, className, children, ...props }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineSeparator ?? timelineSeparatorTheme;
  const { orientation, color } = React.useContext(TimelineContext);

  const styles = twMerge(theme.baseStyle, theme.color[color], className);

  return (
    <Element
      {...props}
      ref={ref}
      data-orientation={orientation}
      className={styles}
    >
      {children}
    </Element>
  );
});

TimelineSeparator.displayName = "MaterialTailwind.TimelineSeparator";

// timeline body
export interface TimelineBodyProps extends Props<"div" | any> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const TimelineBody = React.forwardRef<
  HTMLDivElement | HTMLElement,
  TimelineBodyProps
>(({ as, className, children, ...props }, ref) => {
  const Element = as || "div";
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineBody ?? timelineBodyTheme;
  const { orientation } = React.useContext(TimelineContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Element
      {...props}
      ref={ref}
      className={styles}
      data-orientation={orientation}
    >
      {children}
    </Element>
  );
});

TimelineBody.displayName = "MaterialTailwind.TimelineBody";

export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Icon: TimelineIcon,
  Body: TimelineBody,
  Header: TimelineHeader,
  Separator: TimelineSeparator,
});
