// utils
import classnames from "classnames";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Component, JSX } from "solid-js";
import { createMemo, mergeProps, splitProps } from "solid-js";
import type {
  color,
  containerProps,
  error,
  label,
  labelProps,
  resize,
  shrink,
  size,
  success,
  variant,
} from "../../types/components/input";

export interface TextareaProps {
  variant?: variant;
  size?: size;
  color?: color;
  label?: label;
  error?: error;
  success?: success;
  resize?: resize;
  labelProps?: labelProps;
  containerProps?: containerProps;
  shrink?: shrink;
}

export const Textarea: Component<
  JSX.TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaProps
> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().textarea.defaultProps, props);
  const [inputProps, rest] = splitProps(mergedProps, [
    "variant",
    "color",
    "size",
    "label",
    "error",
    "success",
    "resize",
    "labelProps",
    "containerProps",
    "shrink",
    "class",
  ]);

  // 3. set styles
  const styles = createMemo(() => {
    const { valid, styles } = theme().textarea;
    const { base, variants } = styles;
    const textareaVariant = variants[findMatch(valid.variants, inputProps.variant, "outlined")];
    const textareaError = objectsToString(textareaVariant.error.textarea);
    const textareaSuccess = objectsToString(textareaVariant.success.textarea);
    const textareaShrink = objectsToString(textareaVariant.shrink.textarea);
    const textareaColor = objectsToString(
      textareaVariant.colors.textarea[findMatch(valid.colors, inputProps.color, "blue")],
    );
    const labelError = objectsToString(textareaVariant.error.label);
    const labelSuccess = objectsToString(textareaVariant.success.label);
    const labelShrink = objectsToString(textareaVariant.shrink.label);
    const labelColor = objectsToString(
      textareaVariant.colors.label[findMatch(valid.colors, inputProps.color, "blue")],
    );
    const containerClasses = classnames(
      objectsToString(base.container),
      inputProps.containerProps?.class,
    );
    const textareaClasses = classnames(
      objectsToString(base.textarea),
      objectsToString(textareaVariant.base.textarea),
      objectsToString(
        textareaVariant.sizes[findMatch(valid.sizes, inputProps.size, "md")].textarea,
      ),
      { [textareaColor]: !inputProps.error && !inputProps.success },
      { [textareaError]: inputProps.error },
      { [textareaSuccess]: inputProps.success },
      { [textareaShrink]: inputProps.shrink },
      !inputProps.resize ? "!resize-none" : "",
      inputProps.class,
    );
    const labelClasses = classnames(
      objectsToString(base.label),
      objectsToString(textareaVariant.base.label),
      objectsToString(textareaVariant.sizes[findMatch(valid.sizes, inputProps.size, "md")].label),
      { [labelColor]: !inputProps.error && !inputProps.success },
      { [labelError]: inputProps.error },
      { [labelSuccess]: inputProps.success },
      { [labelShrink]: inputProps.shrink },
      inputProps.labelProps?.class,
    );
    return { labelClasses, textareaClasses, containerClasses };
  });
  // 4. return
  return (
    <div {...inputProps.containerProps} class={styles().containerClasses}>
      <textarea {...rest} class={styles().textareaClasses} placeholder={rest?.placeholder || " "} />
      <label class={styles().labelClasses}>{inputProps.label}</label>
    </div>
  );
};

export default Textarea;
