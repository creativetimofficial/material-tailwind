"use client";

import * as React from "react";

// @hooks
import { useTheme } from "@context";
import { useMergeRefs } from "@floating-ui/react";
import { useRanger, Ranger } from "@tanstack/react-ranger";

// @utils
import { twMerge } from "tailwind-merge";

// @theme
import {
  sliderTheme,
  sliderRangeTheme,
  sliderThumbTheme,
  sliderTickTheme,
} from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export interface SliderContextProps extends Omit<SharedProps, "variant"> {
  sliderRef: React.RefObject<HTMLElement>;
  value?: number[];
  onValueChange?: React.Dispatch<React.SetStateAction<number[]>>;
  min?: number;
  max?: number;
  step?: number;
}

const SliderContext = React.createContext<SliderContextProps>({
  min: 0,
  max: 100,
  step: 1,
} as SliderContextProps);

// slider root
export type SliderProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    value?: number[];
    onValueChange?: React.Dispatch<React.SetStateAction<number[]>>;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
  } & Omit<SharedProps, "variant">
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/button) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/button#button-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/button#button-theme)
 */
function SliderRootBase<T extends React.ElementType = "div">(
  {
    as,
    color,
    size,
    disabled,
    min,
    max,
    step,
    value: controlledValue,
    onValueChange: setControlledValue,
    className,
    children,
    ...props
  }: SliderProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);
  const sliderRef = React.useRef<HTMLElement>(null);

  const contextTheme = useTheme();
  const theme = contextTheme?.slider ?? sliderTheme;
  const defaultProps = theme?.defaultProps;

  size ??= (defaultProps?.size as SliderProps["size"]) ?? "md";
  color ??= (defaultProps?.color as SliderProps["color"]) ?? "primary";

  const [uncontrolledValue, setUncontrolledValue] = React.useState<number[]>([
    0,
  ]);

  const value = controlledValue?.slice(0, 2) ?? uncontrolledValue;
  const onValueChange = setControlledValue ?? setUncontrolledValue;

  const contextValue = React.useMemo(
    () => ({
      size,
      color,
      value,
      onValueChange,
      min: min ?? 0,
      max: max ?? 100,
      step: step ?? 1,
      sliderRef,
    }),
    [value, onValueChange, min, max, step, size, color],
  );

  const styles = twMerge(theme.baseStyle, theme["size"][size], className);

  const elementRef = useMergeRefs([sliderRef, ref]);

  return (
    <SliderContext.Provider value={contextValue}>
      <Component ref={elementRef} {...props} className={styles}>
        {children}
      </Component>
    </SliderContext.Provider>
  );
}

SliderRootBase.displayName = "MaterialTailwind.Slider";

export const SliderRoot = React.forwardRef(SliderRootBase) as <
  T extends React.ElementType = "div",
>(
  props: SliderProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// slider range
export type SliderRangeProps<T extends React.ElementType = "div"> =
  BaseProps<T>;

function SliderRangeRoot<T extends React.ElementType = "div">(
  { as, className, children, ...props }: SliderProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("div" as any);

  const contextTheme = useTheme();
  const theme = contextTheme?.sliderRange ?? sliderRangeTheme;

  const { sliderRef, value, onValueChange, min, max, step, color } =
    React.useContext(SliderContext);

  const sliderInstance = useRanger<HTMLDivElement>({
    getRangerElement: () => sliderRef.current as HTMLDivElement,
    values: value as readonly number[],
    min: min ?? 0,
    max: max ?? 100,
    stepSize: step ?? 1,
    onDrag: (instance: Ranger<HTMLDivElement>) =>
      onValueChange?.(instance.sortedValues as number[]),
    onChange: (instance: Ranger<HTMLDivElement>) =>
      onValueChange?.(instance.sortedValues as number[]),
  });

  return sliderInstance.getSteps().map(({ left, width }, i) => (
    <Component
      ref={ref}
      {...props}
      className={twMerge(
        theme.baseStyle,
        value && value.length > 1
          ? i === 0
            ? "bg-transparent"
            : i === 1
              ? theme["color"][color ?? "primary"]
              : "bg-transparent"
          : i === 0
            ? theme["color"][color ?? "primary"]
            : "bg-transparent",
        className,
      )}
      style={{
        position: "absolute",
        left: `${left}%`,
        width: `${width}%`,
        ...props?.style,
      }}
    >
      {children}
    </Component>
  ));
}

SliderRangeRoot.displayName = "MaterialTailwind.SliderRange";

export const SliderRange = React.forwardRef(SliderRangeRoot) as <
  T extends React.ElementType = "div",
>(
  props: SliderRangeProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// slider thumb
export type SliderThumbProps<T extends React.ElementType = "button"> =
  BaseProps<T>;

function SliderThumbRoot<T extends React.ElementType = "button">(
  { as, className, children, ...props }: SliderProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("button" as any);

  const contextTheme = useTheme();
  const theme = contextTheme?.sliderThumb ?? sliderThumbTheme;

  const { sliderRef, value, onValueChange, min, max, step, size, color } =
    React.useContext(SliderContext);

  const sliderInstance = useRanger<HTMLElement>({
    getRangerElement: () => sliderRef.current,
    values: value as number[],
    min: min ?? 0,
    max: max ?? 100,
    stepSize: step ?? 1,
    onDrag: (instance: Ranger<HTMLElement>) =>
      onValueChange?.(instance.sortedValues as number[]),
    onChange: (instance: Ranger<HTMLElement>) =>
      onValueChange?.(instance.sortedValues as number[]),
  });

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size ?? "md"],
    theme["color"][color ?? "primary"],
    className,
  );

  return sliderInstance
    .handles()
    .map(
      (
        {
          value,
          onKeyDownHandler,
          onMouseDownHandler,
          onTouchStart,
          isActive,
        }: any,
        i: any,
      ) => {
        return (
          <Component
            {...props}
            ref={ref}
            key={i}
            onKeyDown={(e: any) => {
              props?.onKeyDown?.(e);
              onKeyDownHandler(e);
            }}
            onMouseDown={(e: any) => {
              props?.onMouseDown?.(e);
              onMouseDownHandler(e);
            }}
            onTouchStart={(e: any) => {
              props?.onTouchStart?.(e);
              onTouchStart(e);
            }}
            role="slider"
            aria-valuemin={sliderInstance.options.min}
            aria-valuemax={sliderInstance.options.max}
            aria-valuenow={value}
            className={styles}
            style={{
              position: "absolute",
              top: "50%",
              left: `${sliderInstance.getPercentageForValue(value)}%`,
              zIndex: isActive ? "1" : "0",
              transform: "translate(-50%, -50%)",
              ...props?.style,
            }}
          />
        );
      },
    );
}

SliderThumbRoot.displayName = "MaterialTailwind.SliderThumb";

export const SliderThumb = React.forwardRef(SliderThumbRoot) as <
  T extends React.ElementType = "div",
>(
  props: SliderThumbProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

// slider tick
export type SliderTickProps<T extends React.ElementType = "span"> =
  BaseProps<T>;

function SliderTickRoot<T extends React.ElementType = "span">(
  { as, className, children, ...props }: SliderProps,
  ref: React.Ref<Element>,
) {
  const Component = as || ("span" as any);

  const contextTheme = useTheme();
  const theme = contextTheme?.sliderTick ?? sliderTickTheme;

  const { sliderRef, value, onValueChange, min, max, step, size, color } =
    React.useContext(SliderContext);

  const sliderInstance = useRanger<HTMLElement>({
    getRangerElement: () => sliderRef.current,
    values: value as number[],
    min: min ?? 0,
    max: max ?? 100,
    stepSize: step ?? 1,
    onDrag: (instance: Ranger<HTMLElement>) =>
      onValueChange?.(instance.sortedValues as number[]),
    onChange: (instance: Ranger<HTMLElement>) =>
      onValueChange?.(instance.sortedValues as number[]),
  });

  const styles = twMerge(
    theme.baseStyle,
    theme["size"][size ?? "md"],
    theme["color"][color ?? "primary"],
    className,
  );

  return sliderInstance.getTicks().map(({ value, key, percentage }) => (
    <Component
      {...props}
      key={key}
      ref={ref}
      className={styles}
      style={{
        left: `${percentage}%`,
        ...props?.style,
      }}
    >
      {value}
    </Component>
  ));
}

SliderTickRoot.displayName = "MaterialTailwind.SliderTick";

export const SliderTick = React.forwardRef(SliderTickRoot) as <
  T extends React.ElementType = "div",
>(
  props: SliderTickProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export const Slider = Object.assign(SliderRoot, {
  Range: SliderRange,
  Thumb: SliderThumb,
  Tick: SliderTick,
});

export default Slider;
