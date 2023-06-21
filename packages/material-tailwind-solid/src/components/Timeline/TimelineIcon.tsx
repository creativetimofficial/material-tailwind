// @floading-ui

// utils
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTimelineItem } from "./TimelineItem";

// types
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps, onCleanup, onMount, splitProps } from "solid-js";
import type { children, className, color, variant } from "../../types/components/timeline";

export interface TimelineIconProps {
  className?: className;
  children?: children;
  variant?: variant;
  color?: color;
}

export const TimelineIcon: ParentComponent<
  JSX.HTMLAttributes<HTMLSpanElement> & TimelineIconProps
> = (props) => {
  // = React.forwardRef<HTMLSpanElement, TimelineIconProps>(
  //   ({ color, variant, className, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();
  let innerRef!: HTMLSpanElement;
  const [, setWidth] = useTimelineItem();
  const mergedProps = mergeProps(() => theme().timelineIcon.defaultProps, props);
  const [iconProps, rest] = splitProps(mergedProps, [
    "class",
    "children",
    "variant",
    "color",
    "ref",
  ]);
  const updateWidth = () => {
    const { width } = innerRef.getBoundingClientRect();
    setWidth(width);
  };
  onMount(() => {
    innerRef.addEventListener("resize", () => {
      updateWidth();
    });
    updateWidth();
  });
  onCleanup(() => {
    innerRef.removeEventListener("resize", () => {
      setWidth(0);
    });
  });
  // 3. set styles
  const styles = createMemo(() => {
    const { styles, valid } = theme().timelineIcon;
    const { base, variants } = styles;
    const variantClasses = objectsToString(
      variants[findMatch(valid.variants, iconProps.variant, "filled")][
        findMatch(valid.colors, iconProps.color, "blue")
      ],
    );
    const classes = twMerge(objectsToString(base), variantClasses, iconProps.class);
    return { classes };
  });
  // 4. return
  return (
    <span
      ref={mergeRefs((el) => (innerRef = el), iconProps.ref)}
      {...rest}
      class={styles().classes}
    >
      {iconProps.children}
    </span>
  );
};

export default TimelineIcon;
