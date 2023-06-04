// utils
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Component, JSX } from "solid-js";
import { Show, createMemo, mergeProps, splitProps } from "solid-js";
import type {
  color,
  disabled,
  icon,
  label,
  objectType,
  ripple,
} from "../../types/components/checkbox";

export interface RadioProps {
  color?: color;
  label?: label;
  icon?: icon;
  ripple?: ripple;
  class?: string;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  iconProps?: objectType;
  containerRef?: HTMLDivElement;
}

export const Radio: Component<JSX.InputHTMLAttributes<HTMLInputElement> & RadioProps> = (props) => {
  // 1. init
  const theme = useTheme();
  // 2. set default props
  const mergedProps = mergeProps(() => theme().radio.defaultProps, props);

  // 3. set ripple effect instance
  const rippleEffect = new Ripple();
  const [radioProps, rest] = splitProps(mergedProps, [
    "color",
    "label",
    "icon",
    "ripple",
    "class",
    "disabled",
    "containerProps",
    "labelProps",
    "iconProps",
    "containerRef",
  ]);
  // 4. set styles
  const cProps = createMemo(() => {
    const { valid, styles } = theme().radio;
    const { base, colors } = styles;
    const rootClasses = classnames(objectsToString(base.root), {
      [objectsToString(base.disabled)]: radioProps.disabled,
    });
    const containerClasses = twMerge(
      classnames(objectsToString(base.container)),
      radioProps.containerProps?.className,
    );
    const inputClasses = twMerge(
      classnames(
        objectsToString(base.input),
        objectsToString(colors[findMatch(valid.colors, radioProps.color, "blue")]),
      ),
      radioProps.class,
    );
    const labelClasses = twMerge(
      classnames(objectsToString(base.label)),
      radioProps.labelProps?.className,
    );
    const radioIconClasses = classnames(
      classnames(objectsToString(base.icon)),
      colors[findMatch(valid.colors, radioProps.color, "blue")].color,
      radioProps.iconProps?.className,
    );
    return { radioIconClasses, rootClasses, containerClasses, inputClasses, labelClasses };
  });

  return (
    <div ref={radioProps.containerRef} class={cProps().rootClasses}>
      <label
        {...radioProps.containerProps}
        class={cProps().containerClasses}
        for={rest.id || "radio"}
        onMouseDown={(e) => {
          const onMouseDown = radioProps.containerProps?.onMouseDown;

          if (radioProps.ripple) {
            rippleEffect.create(e, "dark");
          }

          return typeof onMouseDown === "function" && onMouseDown(e);
        }}
      >
        <input
          {...rest}
          type="radio"
          disabled={radioProps.disabled}
          class={cProps().inputClasses}
          id={rest.id || "radio"}
        />
        <span class={cProps().radioIconClasses}>
          <Show
            when={radioProps.icon}
            fallback={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <circle data-name="ellipse" cx="8" cy="8" r="8" />
              </svg>
            }
          >
            {radioProps.icon}
          </Show>
        </span>
      </label>
      <Show when={radioProps.label}>
        <label {...radioProps.labelProps} class={cProps().labelClasses} for={rest.id || "radio"}>
          {radioProps.label}
        </label>
      </Show>
    </div>
  );
};

export default Radio;
