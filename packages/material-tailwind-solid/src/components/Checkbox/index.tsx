// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  color,
  label,
  icon,
  ripple,
  disabled,
  objectType,
} from "../../types/components/checkbox";
import type { ParentComponent, JSX } from "solid-js";
import { mergeProps, splitProps, createMemo, Show } from "solid-js";

export interface CheckboxProps {
  color?: color;
  label?: label;
  icon?: icon;
  ripple?: ripple;
  disabled?: disabled;
  containerProps?: objectType;
  labelProps?: objectType;
  iconProps?: objectType;
  containerRef?: HTMLDivElement;
}

export const Checkbox: ParentComponent<
  JSX.InputHTMLAttributes<HTMLInputElement> & CheckboxProps
> = (props) => {
  // 1. init
  const theme = useTheme();
  // const { defaultProps, valid, styles } = checkbox;
  // const { base, colors } = styles;

  // 2. set default props
  // color = color ?? defaultProps.color;
  // label = label ?? defaultProps.label;
  // icon = icon ?? defaultProps.icon;
  // ripple = ripple ?? defaultProps.ripple;
  // class = class ?? defaultProps.class;
  // disabled = disabled ?? defaultProps.disabled;
  // containerProps = containerProps ?? defaultProps.containerProps;
  // labelProps = labelProps ?? defaultProps.labelProps;
  // iconProps = iconProps ?? defaultProps.iconProps;
  const mergedProps = mergeProps(() => theme().checkbox.defaultProps, props);
  const [checkboxProps, rest] = splitProps(mergedProps, [
    "color",
    "label",
    "icon",
    "ripple",
    "disabled",
    "containerProps",
    "labelProps",
    "iconProps",
    "containerRef",
    "class",
  ]);
  // 3. set ripple effect instance
  const rippleEffect = new Ripple();

  // 4. set styles
  const rootClasses = createMemo(() =>
    classnames(objectsToString(theme().checkbox.styles.base.root), {
      [objectsToString(theme().checkbox.styles.base.disabled)]: checkboxProps.disabled,
    }),
  );

  const containerClasses = createMemo(() =>
    twMerge(
      classnames(objectsToString(theme().checkbox.styles.base.container)),
      checkboxProps.containerProps?.class,
    ),
  );
  const inputClasses = createMemo(() => {
    const base = theme().checkbox.styles.base.input;
    const colors = theme().checkbox.styles.colors;
    const validColors = theme().checkbox.valid.colors;
    return twMerge(
      classnames(
        objectsToString(base),
        objectsToString(colors[findMatch(validColors, checkboxProps.color, "blue")]),
      ),
      checkboxProps.class,
    );
  });
  const labelClasses = createMemo(() =>
    twMerge(
      classnames(objectsToString(theme().checkbox.styles.base.label)),
      checkboxProps.labelProps?.class,
    ),
  );
  const iconContainerClasses = createMemo(() =>
    twMerge(
      classnames(objectsToString(theme().checkbox.styles.base.icon)),
      checkboxProps.iconProps?.class,
    ),
  );

  return (
    <div ref={props.containerRef} class={rootClasses()}>
      <label
        {...checkboxProps.containerProps}
        class={containerClasses()}
        for={rest.id || "checkbox"}
        onMouseDown={(e) => {
          const onMouseDown = checkboxProps.containerProps?.onMouseDown;

          if (checkboxProps.ripple) {
            rippleEffect.create(e, "dark");
          }

          return typeof onMouseDown === "function" && onMouseDown(e);
        }}
      >
        <input
          {...rest}
          type="checkbox"
          disabled={checkboxProps.disabled}
          class={inputClasses()}
          id={rest.id || "checkbox"}
        />
        <span class={iconContainerClasses()}>
          <Show when={!checkboxProps.icon} fallback={<>{checkboxProps.icon}</>}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width={1}
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </Show>
        </span>
      </label>
      <Show when={!!checkboxProps.label}>
        <label {...checkboxProps.labelProps} class={labelClasses()} for={rest.id || "checkbox"}>
          {checkboxProps.label as string}
        </label>
      </Show>
    </div>
  );
};

// Checkbox.propTypes = {
//   color: PropTypes.oneOf(propTypesColor),
//   label: propTypesLabel,
//   icon: propTypesIcon,
//   ripple: propTypesRipple,
//   class: propTypesClassName,
//   disabled: propTypesDisabled,
//   containerProps: propTypesObject,
//   labelProps: propTypesObject,
// };

// Checkbox.displayName = "MaterialTailwind.Checkbox";

export default Checkbox;
