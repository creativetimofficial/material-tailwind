// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Component } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type { barProps, color, label, size, value, variant } from "../../types/components/progress";

export interface ProgressProps {
  variant?: variant;
  color?: color;
  size?: size;
  value?: value;
  label?: label;
  barProps?: barProps;
  class?: string;
}

export const Progress: Component<ProgressProps> = (props) => {
  //  = React.forwardRef<HTMLDivElement, ProgressProps>(
  //   ({ variant, color, size, value, label, className, barProps, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();
  const mergedProps = mergeProps(() => theme().progress.defaultProps, props);

  // 2. set default props
  // variant = variant ?? defaultProps.variant;
  // color = color ?? defaultProps.color;
  // size = size ?? defaultProps.size;
  // label = label ?? defaultProps.label;
  // className = className ?? defaultProps.className;
  // barProps = barProps ?? defaultProps.barProps;
  const [progressProps, barProps, rest] = splitProps(
    mergedProps,
    ["variant", "color", "size", "value", "label", "class"],
    ["barProps"],
  );
  // 3. set styles
  const cProps = createMemo(() => {
    const { valid, styles } = theme().progress;
    const { base, variants, sizes } = styles;
    const progressVariant = objectsToString(
      variants[findMatch(valid.variants, progressProps.variant, "filled")][
        findMatch(valid.colors, progressProps.color, "blue")
      ],
    );
    const progressContainerSize = objectsToString(
      sizes[findMatch(valid.sizes, progressProps.size, "md")]["container"]["initial"],
    );
    const progressContainer = classnames(
      objectsToString(base.container.initial),
      progressContainerSize,
    );
    const progressWithLabelSize = objectsToString(
      sizes[findMatch(valid.sizes, progressProps.size, "md")]["container"]["withLabel"],
    );
    const progressWithLabel = classnames(
      objectsToString(base.container.withLabel),
      progressWithLabelSize,
    );
    const progressBarSize = objectsToString(
      sizes[findMatch(valid.sizes, progressProps.size, "md")]["bar"],
    );
    const progressBar = classnames(objectsToString(base.bar), progressBarSize);
    const containerClasses = twMerge(
      classnames(progressContainer, { [progressWithLabel]: progressProps.label }),
      progressProps.class,
    );
    const barClasses = twMerge(classnames(progressBar, progressVariant), barProps?.barProps.class);
    return { barClasses, containerClasses };
  });
  // 4. return
  return (
    <div {...rest} class={cProps().containerClasses}>
      <div
        {...barProps.barProps}
        class={cProps().barClasses}
        style={{ width: `${progressProps.value}%` }}
      >
        {progressProps.label &&
          `${progressProps.value}% ${
            typeof progressProps.label === "string" ? progressProps.label : ""
          }`}
      </div>
    </div>
  );
};

export default Progress;
