"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";
import { useMergeRefs } from "@floating-ui/react";

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
import type { BaseProps, SharedProps } from "@types";

type Orientation = "horizontal" | "vertical";
type Mode = "stepper" | "timeline";

// timeline context
export interface TimelineContextProps {
  value?: string | number;
  setValue?: (e: string | number) => void;
  color?: SharedProps["color"];
  orientation?: Orientation;
  mode?: Mode;
  parentRef?: React.RefObject<HTMLElement>;
}

export const TimelineContext = React.createContext<TimelineContextProps>({
  value: "",
  setValue: () => {},
  color: "primary",
  mode: "timeline",
  orientation: "horizontal",
});

// timeline root
export type TimelineProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value?: string | number;
    defaultValue?: string | number;
    onValueChange?: (e: string | number) => void;
    color?: SharedProps["color"];
    orientation?: Orientation;
    mode?: Mode;
  }
>;

function TimelineRootBase<T extends React.ElementType = "div">(
  {
    as,
    value,
    defaultValue,
    onValueChange,
    color,
    mode,
    orientation,
    className,
    children,
    ...props
  }: TimelineProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.timeline ?? timelineTheme;
  const defaultProps = theme?.defaultProps;
  const innerRef = React.useRef<HTMLDivElement | HTMLElement>(null);
  const [innerValue, setInnerValue] = React.useState(defaultValue || "");

  value ??= innerValue;
  onValueChange ??= setInnerValue;
  mode ??= (defaultProps?.mode as TimelineProps["mode"]) ?? "timeline";
  color ??= (defaultProps?.color as TimelineProps["color"]) ?? "primary";
  orientation ??=
    (defaultProps?.orientation as TimelineProps["orientation"]) ?? "horizontal";

  React.useEffect(() => {
    const parentEl = innerRef?.current;

    if (parentEl && !value) {
      const children = Array.from(parentEl.children);
      const firstChild = children[0] as HTMLElement;

      onValueChange?.(firstChild.dataset.value!);
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
      setValue: onValueChange,
      orientation,
      color,
      mode,
      parentRef: innerRef,
    }),
    [value, onValueChange, orientation, color, mode],
  );

  const styles = twMerge(theme.baseStyle, className);
  const mergedRef = useMergeRefs([ref, innerRef]);

  return (
    <Component
      {...props}
      ref={mergedRef}
      className={styles}
      data-orientation={orientation}
    >
      <TimelineContext.Provider value={contextValue}>
        {children}
      </TimelineContext.Provider>
    </Component>
  );
}

TimelineRootBase.displayName = "MaterialTailwind.Timeline";

export const TimelineRoot = React.forwardRef(TimelineRootBase) as <
  T extends React.ElementType = "div",
>(
  props: TimelineProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// timeline item
export type TimelineItemProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value?: string;
    disabled?: boolean;
  }
>;

function TimelineItemRoot<T extends React.ElementType = "div">(
  { as, value, className, disabled, children, ...props }: TimelineItemProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineItem ?? timelineItemTheme;
  const {
    mode,
    setValue,
    orientation,
    value: contextValue,
  } = React.useContext(TimelineContext);
  const innerRef = React.useRef<HTMLElement>(null);

  value ??= React.useId();

  const isActive = contextValue == value || mode === "timeline";

  function onClick(event: React.MouseEvent<HTMLDivElement>) {
    props?.onClick?.(event);

    if (mode === "stepper") {
      setValue?.(value!);
    }
  }

  const styles = twMerge(theme.baseStyle, className);
  const mergedRef = useMergeRefs([ref, innerRef]);

  return (
    <Component
      {...props}
      ref={mergedRef}
      onClick={onClick}
      data-value={value}
      data-active={isActive}
      data-completed={isActive}
      data-orientation={orientation}
      aria-disabled={disabled}
      className={styles}
    >
      {children}
    </Component>
  );
}

TimelineItemRoot.displayName = "MaterialTailwind.TimelineItem";

export const TimelineItem = React.forwardRef(TimelineItemRoot) as <
  T extends React.ElementType = "div",
>(
  props: TimelineItemProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// timeline header
export type TimelineHeaderProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function TimelineHeaderRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: TimelineHeaderProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineHeader ?? timelineHeaderTheme;

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

TimelineHeaderRoot.displayName = "MaterialTailwind.TimelineHeader";

export const TimelineHeader = React.forwardRef(TimelineHeaderRoot) as <
  T extends React.ElementType = "div",
>(
  props: TimelineHeaderProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// timeline icon
export type TimelineIconProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function TimelineIconRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: TimelineIconProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("span" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineIcon ?? timelineIconTheme;
  const { color } = React.useContext(TimelineContext);

  const styles = twMerge(theme.baseStyle, theme.color[color!], className);

  return (
    <Component {...props} ref={ref} className={styles}>
      {children}
    </Component>
  );
}

TimelineIconRoot.displayName = "MaterialTailwind.TimelineIcon";

export const TimelineIcon = React.forwardRef(TimelineIconRoot) as <
  T extends React.ElementType = "span",
>(
  props: TimelineIconProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// timeline separator
export type TimelineSeparatorProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function TimelineSeparatorRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: TimelineSeparatorProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineSeparator ?? timelineSeparatorTheme;
  const { orientation, color } = React.useContext(TimelineContext);

  const styles = twMerge(theme.baseStyle, theme.color[color!], className);

  return (
    <Component
      {...props}
      ref={ref}
      data-orientation={orientation}
      className={styles}
    >
      {children}
    </Component>
  );
}

TimelineSeparatorRoot.displayName = "MaterialTailwind.TimelineSeparator";

export const TimelineSeparator = React.forwardRef(TimelineSeparatorRoot) as <
  T extends React.ElementType = "div",
>(
  props: TimelineSeparatorProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// timeline body
export type TimelineBodyProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function TimelineBodyRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: TimelineBodyProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.timelineBody ?? timelineBodyTheme;
  const { orientation } = React.useContext(TimelineContext);

  const styles = twMerge(theme.baseStyle, className);

  return (
    <Component
      {...props}
      ref={ref}
      className={styles}
      data-orientation={orientation}
    >
      {children}
    </Component>
  );
}

TimelineBodyRoot.displayName = "MaterialTailwind.TimelineBody";

export const TimelineBody = React.forwardRef(TimelineBodyRoot) as <
  T extends React.ElementType = "div",
>(
  props: TimelineBodyProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Icon: TimelineIcon,
  Body: TimelineBody,
  Header: TimelineHeader,
  Separator: TimelineSeparator,
});
