// utils
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, mergeProps, splitProps } from "solid-js";
import type { color, disabled, label, objectType, ripple } from "../../types/components/checkbox";

export interface SwitchProps {
  color?: color;
  label?: label;
  ripple?: ripple;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  circleProps?: objectType;
  containerRef?: HTMLDivElement;
}

export const Switch: ParentComponent<JSX.InputHTMLAttributes<HTMLInputElement> & SwitchProps> = (
  props,
) => {
  // = React.forwardRef<HTMLInputElement, SwitchProps>(
  //   (
  //     {
  //       color,
  //       label,
  //       ripple,
  //       className,
  //       disabled,
  //       containerProps,
  //       circleProps,
  //       labelProps,
  //       inputRef,
  //       ...rest
  //     },
  //     ref,
  //   ) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().switch.defaultProps, props);
  const [switchProps, rest] = splitProps(mergedProps, [
    "color",
    "label",
    "ripple",
    "class",
    "disabled",
    "containerProps",
    "circleProps",
    "labelProps",
    "containerRef",
  ]);

  // 3. set ripple effect instance
  const rippleEffect = new Ripple();

  // 4. set styles
  const styles = createMemo(() => {
    const { valid, styles } = theme().switch;
    const { base, colors } = styles;
    const rootClasses = classnames(objectsToString(base.root), {
      [objectsToString(base.disabled)]: switchProps.disabled,
    });
    const containerClasses = twMerge(
      classnames(objectsToString(base.container)),
      switchProps.containerProps?.class,
    );
    const inputClasses = twMerge(
      classnames(
        objectsToString(base.input),
        objectsToString(colors[findMatch(valid.colors, switchProps.color, "blue")]),
      ),
      switchProps.class,
    );
    const circleClasses = twMerge(
      classnames(
        objectsToString(base.circle),
        colors[findMatch(valid.colors, switchProps.color, "blue")].circle,
        colors[findMatch(valid.colors, switchProps.color, "blue")].before,
      ),
      switchProps.circleProps?.class,
    );
    const rippleClasses = classnames(objectsToString(base.ripple));
    const labelClasses = twMerge(
      classnames(objectsToString(base.label)),
      switchProps.labelProps?.class,
    );
    return {
      rootClasses,
      containerClasses,
      inputClasses,
      circleClasses,
      rippleClasses,
      labelClasses,
    };
  });
  // 4. return
  return (
    <div ref={switchProps.containerRef} class={styles().rootClasses}>
      <div {...switchProps.containerProps} class={styles().containerClasses}>
        <input
          {...rest}
          type="checkbox"
          disabled={switchProps.disabled}
          id={rest.id || "switch"}
          class={styles().inputClasses}
        />
        <label
          {...switchProps.circleProps}
          for={rest.id || "switch"}
          class={styles().circleClasses}
        >
          <Show when={switchProps.ripple}>
            <div
              class={styles().rippleClasses}
              onMouseDown={(e) => {
                const onMouseDown = switchProps.containerProps?.onMouseDown;

                if (switchProps.ripple) {
                  rippleEffect.create(e, "dark");
                }

                return typeof onMouseDown === "function" && onMouseDown(e);
              }}
            />
          </Show>
        </label>
      </div>
      <Show when={!!switchProps.label}>
        <label {...switchProps.labelProps} for={rest.id || "switch"} class={styles().labelClasses}>
          {switchProps.label}
        </label>
      </Show>
    </div>
  );
};

export default Switch;
