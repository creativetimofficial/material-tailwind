// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Component, JSX } from "solid-js";
import { createMemo, createSignal, mergeProps, onMount, splitProps } from "solid-js";
import type {
  barClassName,
  color,
  defaultValue,
  inputProps,
  inputRef,
  max,
  min,
  onInput,
  size,
  step,
  thumbClassName,
  trackClassName,
  value,
} from "../../types/components/slider";
import { mergeRefs } from "@solid-primitives/refs";

export interface SliderProps {
  color?: color;
  size?: size;
  className?: string;
  sliderClassName?: trackClassName;
  trackClassName?: trackClassName;
  thumbClassName?: thumbClassName;
  barClassName?: barClassName;
  value?: value;
  defaultValue?: defaultValue;
  onInput?: onInput;
  min?: min;
  max?: max;
  step?: step;
  inputRef?: inputRef;
  inputProps?: inputProps;
}

export const Slider: Component<JSX.HTMLAttributes<HTMLDivElement> & SliderProps> = (props) => {
  // = React.forwardRef<HTMLDivElement, SliderProps>(
  //   (
  //     {
  //       color,
  //       size,
  //       className,
  //       trackClassName,
  //       thumbClassName,
  //       barClassName,
  //       value,
  //       defaultValue,
  //       onChange,
  //       min,
  //       max,
  //       step,
  //       inputRef,
  //       inputProps,
  //       ...rest
  //     },
  //     ref,
  //   ) => {
  // 1. init
  let ref!: HTMLInputElement;
  const theme = useTheme();

  // React.useMemo(() => {
  //   if (defaultValue) setInnerValue(defaultValue);
  // }, [defaultValue]);

  // 2. set default props
  const mergedProps = mergeProps(() => theme().slider.defaultProps, props);
  const [sliderProps, rest] = splitProps(mergedProps, [
    "color",
    "size",
    "class",
    "sliderClassName",
    "trackClassName",
    "thumbClassName",
    "barClassName",
    "value",
    "defaultValue",
    "onInput",
    "min",
    "max",
    "step",
    "inputRef",
    "inputProps",
  ]);
  const [innerValue, setInnerValue] = createSignal(sliderProps.defaultValue || 0);

  // 3. set styles
  const cProps = createMemo(() => {
    const { valid, styles } = theme().slider;
    const { base, sizes, colors } = styles;
    const sliderContainerClasses = twMerge(
      classnames(
        objectsToString(base.container),
        objectsToString(colors[findMatch(valid.colors, sliderProps.color, "blue")]),
        objectsToString(sizes[findMatch(valid.sizes, sliderProps.size, "md")]["container"]),
        sliderProps.class,
      ),
    );
    const sliderBarClasses = twMerge(
      classnames(objectsToString(base.bar), sliderProps.barClassName),
    );
    const sliderTrackClasses = classnames(
      objectsToString(base.track),
      objectsToString(sizes[findMatch(valid.sizes, sliderProps.size, "md")]["track"]),
    );
    const sliderThumbClasses = classnames(
      objectsToString(base.thumb),
      objectsToString(sizes[findMatch(valid.sizes, sliderProps.size, "md")]["thumb"]),
    );
    const sliderCLasses = classnames(
      objectsToString(base.slider),
      twMerge(sliderTrackClasses, sliderProps.trackClassName),
      twMerge(sliderThumbClasses, sliderProps.thumbClassName),
    );
    return { sliderBarClasses, sliderCLasses, sliderContainerClasses, sliderThumbClasses };
  });
  //@ts-ignore expects string as value
  onMount(() => (ref.value = sliderProps.defaultValue || 0));
  // 4. return
  return (
    <div {...rest} class={cProps().sliderContainerClasses}>
      <label
        class={cProps().sliderBarClasses}
        style={{ width: `${sliderProps.value || innerValue}%` }}
      />

      <input
        ref={mergeRefs((el) => (ref = el), sliderProps.inputRef)}
        type="range"
        max={sliderProps.max}
        min={sliderProps.min}
        step={sliderProps.step}
        class={cProps().sliderCLasses}
        {...(sliderProps.value ? { value: sliderProps.value } : null)}
        onInput={(e) => sliderProps.onInput?.(e) || setInnerValue(Number(e.target.value))}
      />
    </div>
  );
};

export default Slider;
