// utils
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";
import { Show } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type {
  color,
  containerProps,
  error,
  helperText,
  shrink,
  size,
  success,
  variant,
} from "../../types/components/input";
import type { icon, label, labelProps } from "../../types/components/input";

export interface InputProps {
  variant?: variant;
  size?: size;
  color?: color;
  label?: label;
  error?: error;
  success?: success;
  icon?: icon;
  labelProps?: labelProps;
  containerProps?: containerProps;
  shrink?: shrink;
  containerRef?: HTMLDivElement;
  helperText?: helperText;
}

export const Input: ParentComponent<JSX.InputHTMLAttributes<HTMLInputElement> & InputProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  const mergedProps = mergeProps(() => theme().input.defaultProps, props);
  const [iProps, rest] = splitProps(mergedProps, [
    "variant",
    "size",
    "color",
    "label",
    "icon",
    "labelProps",
    "containerProps",
    "containerRef",
    "shrink",
    "class",
    "error",
    "success",
    "helperText",
  ]);

  const cProps = createMemo(() => {
    const { valid, styles } = theme().input;
    const { base, variants } = styles;
    // 3. set styles
    const inputVariant = variants[findMatch(valid.variants, iProps.variant, "outlined")];
    const inputSize = inputVariant.sizes[findMatch(valid.sizes, iProps.size, "md")];
    const inputError = objectsToString(inputVariant.error.input);
    const inputSuccess = objectsToString(inputVariant.success.input);
    const inputShrink = objectsToString(inputVariant.shrink.input);

    const inputColor = objectsToString(
      inputVariant.colors.input[findMatch(valid.colors, iProps.color, "blue")],
    );
    const labelError = objectsToString(inputVariant.error.label);
    const labelSuccess = objectsToString(inputVariant.success.label);
    const labelShrink = objectsToString(inputVariant.shrink.label);
    const labelColor = objectsToString(
      inputVariant.colors.label[findMatch(valid.colors, iProps.color, "blue")],
    );
    const containerClasses = classnames(
      objectsToString(base.container),
      objectsToString(inputSize.container),
      // { "opacity-70": mergedProps.disabled },
      iProps.containerProps?.class,
    );
    const inputClasses = classnames(
      objectsToString(base.input),
      objectsToString(inputVariant.base.input),
      objectsToString(inputSize.input),
      { [objectsToString(inputVariant.base.inputWithIcon)]: iProps.icon },
      { [inputColor]: !iProps.error && !iProps.success },
      { [inputError]: iProps.error },
      { [inputSuccess]: iProps.success },
      { [inputShrink]: iProps.shrink },
      iProps.class,
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(inputVariant.base.label),
      objectsToString(inputSize.label),
      { [labelColor]: !iProps.error && !iProps.success },
      { [labelError]: iProps.error },
      { [labelSuccess]: iProps.success },
      { [labelShrink]: iProps.shrink },
      iProps.labelProps?.class,
    );

    const helperTextClasses = classnames(
      { [labelColor]: !iProps.error && !iProps.success },
      { [labelError]: iProps.error },
      { [labelSuccess]: iProps.success },
      "text-xs p-1",
    );

    const iconClasses = classnames(
      objectsToString(base.icon),
      objectsToString(inputVariant.base.icon),
      objectsToString(inputSize.icon),
    );

    const asteriskClasses = classnames(objectsToString(base.asterisk));
    return {
      asteriskClasses,
      containerClasses,
      inputClasses,
      labelClasses,
      iconClasses,
      helperTextClasses,
      rest,
    };
  });
  // 4. return
  return (
    <div>
      <div
        {...mergedProps.containerProps}
        ref={mergedProps.containerRef}
        class={cProps().containerClasses}
      >
        <Show when={iProps.icon}>
          <div class={cProps().iconClasses}>{iProps.icon}</div>
        </Show>

        <input {...rest} class={cProps().inputClasses} placeholder={rest?.placeholder || " "} />

        <label {...iProps.labelProps} class={cProps().labelClasses}>
          {iProps.label}
          <Show when={rest.required}>
            <span class={cProps().asteriskClasses}>*</span>
          </Show>
        </label>
      </div>
      <Show when={iProps.helperText}>
        <p class={cProps().helperTextClasses}>
          <Show
            when={iProps.helperText === iProps.helperText?.trim()}
            fallback={<span>&nbsp;</span>} //avoid layoutshift with empty string
          >
            {iProps.helperText}
          </Show>
        </p>
      </Show>
    </div>
  );
};
export default Input;
